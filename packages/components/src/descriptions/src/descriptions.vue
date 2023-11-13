<template>
  <div :class="classes">
    <div
      v-if="title || extra || $slots.title || $slots.extra"
      :class="nsDescriptions.e('header')"
    >
      <div :class="nsDescriptions.e('title')">
        <slot name="title">{{ title }}</slot>
      </div>
      <div :class="nsDescriptions.e('extra')">
        <slot name="extra">{{ extra }}</slot>
      </div>
    </div>
    <div :class="nsDescriptions.e('body')">
      <table
        :class="[
          nsDescriptions.e('table'),
          { [nsDescriptions.is('bordered')]: border }
        ]"
      >
        <tbody>
          <template v-for="(row, index) in getRows()" :key="index">
            <TuDescriptionsRow :row="row" />
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, provide, useSlots } from 'vue';
import { descriptionsProps } from './descriptions';
import { useNamespace } from '@tu-view-plus/hooks';
import { flattedChildren } from '@tu-view-plus/utils';
import { descriptionsInjectionKey } from './constants';
import { useFormSize } from '../../form';
import TuDescriptionsRow from './descriptions-row.vue';
import '../style/descriptions.scss';

defineOptions({
  name: 'TuDescriptions'
});

const props = defineProps(descriptionsProps);

const nsDescriptions = useNamespace('descriptions');

const slots = useSlots();

const descriptionsSize = useFormSize();

const classes = computed(() => ({
  [nsDescriptions.b()]: true,
  [nsDescriptions.m(descriptionsSize.value)]: descriptionsSize.value
}));

provide(descriptionsInjectionKey, props);

const filledNode = (node, span, count, isLast = false) => {
  if (!node.props) {
    node.props = {};
  }
  if (span > count) {
    node.props.span = count;
  }
  if (isLast) {
    node.props.span = span;
  }
  return node;
};

const getRows = () => {
  const children = flattedChildren(slots.default?.()).filter(
    (node) => node?.type?.name === 'TuDescriptionsItem'
  );
  const rows = [];
  let temp = [];
  let count = props.column;
  let totalSpan = 0;

  children.forEach((node, index) => {
    const span = node.props?.span || 1;

    if (index < children.length - 1) {
      totalSpan += span > count ? count : span;
    }

    if (index === children.length - 1) {
      const lastSpan = props.column - (totalSpan % props.column);
      temp.push(filledNode(node, lastSpan, count, true));
      rows.push(temp);
      return;
    }

    if (span < count) {
      count -= span;
      temp.push(node);
    } else {
      temp.push(filledNode(node, span, count));
      rows.push(temp);
      count = props.column;
      temp = [];
    }
  });

  return rows;
};
</script>
