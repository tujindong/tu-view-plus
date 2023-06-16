<template>
  <span
    ref="arrowRef"
    :class="nsArrow.e('arrow')"
    :style="arrowStyle"
    data-popper-arrow
  ></span>
</template>

<script lang="ts" setup>
import { inject, onBeforeUnmount, watch } from 'vue';
import { useNamespace } from '@tu-view-plus/hooks';
import { POPPER_CONTENT_INJECTION_KEY } from './constants';
import { popperArrowProps } from './arrow';

defineOptions({
  name: 'TuPopperArrow',
  inheritAttrs: false
});

const props = defineProps(popperArrowProps);

const nsArrow = useNamespace('popper');

const { arrowOffset, arrowRef, arrowStyle } = inject(
  POPPER_CONTENT_INJECTION_KEY,
  undefined
)!;

watch(
  () => props.arrowOffset,
  (val) => {
    arrowOffset.value = val;
  }
);

onBeforeUnmount(() => {
  arrowRef.value = undefined;
});

defineExpose({
  /**
   * @zh Arrow 元素
   * @en Arrow element
   */
  arrowRef
});
</script>