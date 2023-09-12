<template>
  <tu-trigger
    animation-name="slide-dynamic-origin"
    auto-fit-transform-origin
    :popup-visible="computedPopupVisible"
    :popup-offset="4"
    :trigger="trigger"
    :position="position"
    :opened-class="nsDropdown.e('open')"
    :popup-container="popupContainer"
    @popup-visible-change="handlePopupVisibleChange"
  >
    <slot />
    <template #content> 123 </template>
  </tu-trigger>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue';
import { dropdownProps, dropdownEmits } from './dropdown';
import { TuTrigger } from '../../trigger';
import { useNamespace, useTrigger } from '@tu-view-plus/hooks';
import '../style/dropdown.scss';

defineOptions({
  name: 'TuDropdown'
});

const props = defineProps(dropdownProps);
const emit = defineEmits(dropdownEmits);

const { defaultPopupVisible, popupVisible, popupMaxHeight } = toRefs(props);

const nsDropdown = useNamespace('dropdown');

const { computedPopupVisible, handlePopupVisibleChange } = useTrigger({
  defaultPopupVisible,
  popupVisible,
  emit
});
</script>
