<template>
  <div :class="classes">
    <div :class="nsCard.e('header')" v-if="$slots.title || title">
      
      <div :class="nsCard.e('header-title')">
        <template v-if="title">{{ title }}</template>
        <slot name="title"></slot>
      </div>

      <div :class="nsCard.e('header-extra')" v-if="$slots.extra">
        <slot name="extra"></slot>
      </div>

    </div>
    <div :class="nsCard.e('body')" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { cardProps } from './card';
import { useNamespace } from '@tu-view-plus/hooks';
import '../style/card.scss';

defineOptions({
  name: 'TuCard'
});

const props = defineProps(cardProps);
const nsCard = useNamespace('card');

const classes = computed(() => ({
  [nsCard.b()]: true,
  [nsCard.m(props.effect)]: props.effect,
  [nsCard.m(props.size)]: props.size
}));
</script>
