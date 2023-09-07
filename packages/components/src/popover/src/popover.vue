<template>
  <tu-trigger
    show-arrow
    :class="popoverClasses"
    :trigger="trigger"
    :position="position"
    :popup-visible="popoverVisibleComputed"
    :popup-offset="14"
    :content-class="contentClasses"
    :content-style="contentStyle"
    :arrow-class="arrowClasses"
    :arrow-style="arrowStyle"
    :popup-container="popupContainer"
    animation-name="zoom-in-fade-out"
    auto-fit-transform-origin
    @popup-visible-change="handlePopoverVisibleChange"
  >
    <slot />
    <template #content>
      <div :class="nsPopover.e('title')">
        <slot name="title">{{ title }}</slot>
      </div>
      <div :class="nsPopover.e('content')">
        <slot name="content">{{ content }}</slot>
      </div>
    </template>
  </tu-trigger>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { popoverProps, popoverEmits } from './popover';
import { TuTrigger } from '../../trigger';
import { useNamespace } from '@tu-view-plus/hooks';
import '../style/popover.scss';

defineOptions({
  name: 'TuPopover'
});

const props = defineProps(popoverProps);
const emit = defineEmits(popoverEmits);

const nsPopover = useNamespace('popover');

const popoverVisible = ref(props.defaultPopupVisible);

const popoverVisibleComputed = computed(
  () => props.popupVisible ?? popoverVisible.value
);

const popoverClasses = computed(() => ({
  [nsPopover.b()]: true,
  [nsPopover.m(props.size)]: props.size
}));

const contentClasses = computed(() => [
  nsPopover.e('popup-content'),
  props.contentClass
]);

const arrowClasses = computed(() => [
  nsPopover.e('popup-arrow'),
  props.arrowClass
]);

const handlePopoverVisibleChange = (visible: boolean) => {
  popoverVisible.value = visible;
  emit('update:popupVisible', visible);
  emit('popupVisibleChange', visible);
};
</script>
