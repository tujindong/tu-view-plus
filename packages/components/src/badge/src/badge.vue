<template>
  <div :class="classes">
    <slot></slot>
    <span
      v-if="color && !$slots.default"
      :class="nsBadge.em('status', 'dot')"
      :style="{ background: color }"
    ></span>
    <span v-if="text" :class="nsBadge.em('status', 'text')">{{ text }}</span>
    <transition :name="`${defaultNamespace}-zoom-in-center`">
      <sup
        v-show="!hidden && (content || isDot)"
        v-text="content"
        :class="classesSup"
        :style="numberStyle"
      ></sup>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue';
import { badgeProps } from './badge';
import { useNamespace, defaultNamespace } from '@tu-view-plus/hooks';
import { isNumber } from '@tu-view-plus/utils/types';
import '../style/badge.scss';

defineOptions({
  name: 'TuBadge'
});

const slots = useSlots();
const props = defineProps(badgeProps);
const nsBadge = useNamespace('badge');

const classes = computed(() => ({
  [nsBadge.b()]: true,
  [nsBadge.is('single')]: !slots.default && !props.text,
  [nsBadge.is('status')]: !slots.default && props.text
}));

const classesSup = computed(() => ({
  [nsBadge.e('content')]: true,
  [nsBadge.em('content', props.type)]: props.type,
  [nsBadge.is('fixed')]: slots.default,
  [nsBadge.is('dot')]: props.isDot
}));

const content = computed<string>(() => {
  if (props.isDot) return '';
  if (isNumber(props.value) && isNumber(props.max)) {
    return props.max < props.value ? `${props.max}+` : `${props.value}`;
  }
  return `${props.value}`;
});

defineExpose({
  /**
   * @zh 徽标内容
   * @en badge content */
  content
});
</script>
