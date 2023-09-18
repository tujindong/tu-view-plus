<template>
  <div role="separator" :class="dividerClasses" :style="dividerStyles">
    <div
      v-if="$slots.default && direction === 'horizontal'"
      :class="nsDivider.e('text')"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue';
import { dividerProps } from './divider';
import { useNamespace } from '@tu-view-plus/hooks';
import { addUnit } from '@tu-view-plus/utils';
import '../style/divider.scss';

import type { CSSProperties } from 'vue';

defineOptions({
  name: 'TuDivider'
});

const props = defineProps(dividerProps);

const slots = useSlots();

const nsDivider = useNamespace('divider');

const isHorizontal = computed(() => props.direction === 'horizontal');

const dividerClasses = computed(() => ({
  [nsDivider.b()]: true,
  [nsDivider.m(props.direction)]: props.direction,
  [nsDivider.is(props.orientation)]: props.orientation,
  [nsDivider.is('with-text')]: slots.default
}));

const dividerStyles = computed<CSSProperties>(() => {
  const styles: CSSProperties = {};
  if (props.size) {
    styles[isHorizontal.value ? 'border-bottom-width' : 'border-left-width'] =
      addUnit(props.size);
  }
  if (props.type) {
    styles[isHorizontal.value ? 'border-bottom-style' : 'border-left-style'] =
      props.type;
  }
  if (props.margin) {
    styles.margin = isHorizontal.value
      ? `${props.margin} 0`
      : `0 ${addUnit(props.margin)}`;
  }
  return styles;
});
</script>
