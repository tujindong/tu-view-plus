<template>
  <component
    ref="wrapperRef"
    v-bind="$attrs"
    :is="component"
    :class="nsResizeBox.b()"
    :style="styles"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import {
  computed,
  defineComponent,
  PropType,
  toRefs,
  ref,
  reactive
} from 'vue';
import { resizeBoxProps, resizeBoxEmits } from './resize-box';
import { useNamespace, useMergeState } from '@tu-view-plus/hooks';
import { isNumber, addUnit } from '@tu-view-plus/utils';
import '../style/resize-box.scss';

import { PaddingCSSProperties } from './interface';

defineOptions({
  name: 'TuResizeBox'
});

const props = defineProps(resizeBoxProps);
const emit = defineEmits(resizeBoxEmits);

const nsResizeBox = useNamespace('resize-box');

const { height: propHeight, width: propWidth, directions } = toRefs(props);

const [width, setWidth] = useMergeState<number | null>(
  null,
  reactive({
    value: propWidth
  })
);

const [height, setHeight] = useMergeState<number | null>(
  null,
  reactive({
    value: propHeight
  })
);

const wrapperRef = ref<HTMLDivElement>();

const paddingStyles = reactive<Partial<Record<PaddingCSSProperties, string>>>(
  {}
);

const styles = computed(() => {
  return {
    ...(isNumber(width.value) ? { width: `${width.value}px` } : {}),
    ...(isNumber(height.value) ? { height: `${height.value}px` } : {}),
    ...paddingStyles
  };
});
</script>
