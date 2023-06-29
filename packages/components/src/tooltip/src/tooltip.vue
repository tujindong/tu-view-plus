<template>
  <tu-trigger
    trigger="hover"
    animation-name="zoom-in-fade-out"
    role="tooltip"
    auto-fit-transform-origin
    show-arrow
    :popup-visible="computedPopupVisible"
    :class="classes"
    :content-class="contentClasses"
    :content-style="contentStyles"
    :arrow-class="arrowClasses"
    :arrow-style="arrowStyles"
    :popup-container="popupContainer"
    :size="size"
    :position="position"
    :popup-offset="10"
    @popup-visible-change="handlePopupVisibleChange"
  >
    <slot />
    <template #content>
      <slot name="content">{{ content }}</slot>
    </template>
  </tu-trigger>
</template>

<script lang="ts" setup>
import { computed, CSSProperties, ref } from 'vue';
import { tooltipProps, tooltipEmits } from './tooltip';
import { TuTrigger } from '../../trigger';
import { useNamespace } from '@tu-view-plus/hooks';
import '../style/tooltip.scss';

defineOptions({
  name: 'TuTooltip'
});

const props = defineProps(tooltipProps);
const emit = defineEmits(tooltipEmits);

//样式 styles
const nsTooltip = useNamespace('tooltip');

const classes = computed(() => nsTooltip.b());

const contentClasses = computed(() => [
  nsTooltip.e('content'),
  props.contentClass,
  { [nsTooltip.m(props.size)]: props.size }
]);

const contentStyles = computed<CSSProperties | undefined>(() => {
  if (props.backgroundColor || props.contentStyle) {
    return {
      backgroundColor: props.backgroundColor,
      ...props.contentStyle
    };
  }
  return undefined;
});

const arrowClasses = computed(() => [nsTooltip.e('arrow'), props.arrowClass]);

const arrowStyles = computed<CSSProperties | undefined>(() => {
  if (props.backgroundColor || props.arrowStyle) {
    return {
      backgroundColor: props.backgroundColor,
      ...props.arrowStyle
    };
  }
  return undefined;
});

// 属性 attrs
const defaultPopupVisibleRef = ref(props.defaultPopupVisible);
const computedPopupVisible = computed(
  () => props.popupVisible ?? defaultPopupVisibleRef.value
);

// 事件 event
const handlePopupVisibleChange = (visible: boolean) => {
  defaultPopupVisibleRef.value = visible;
  emit('update:popupVisible', visible);
  emit('popupVisibleChange', visible);
};
</script>
