<template>
  <tu-trigger
    ref="triggerRef"
    trigger="click"
    position="bl"
    hide-empty
    auto-fit-popup-width
    auto-fit-transform-origin
    animation-name="slide-dynamic-origin"
    :disabled="selectDisabled"
    :popup-offset="4"
    :popup-visible="computedPopupVisible"
    :unmount-on-close="unmountOnClose"
    :click-to-close="!(allowSearch || allowCreate)"
    :popup-container="popupContainer"
    @popup-visible-change="handlePopupVisibleChange"
  >
    <template #default> </template>
    <template #content>
      <tu-select-dropdown ref="dropdownRef">
        <tu-scrollbar ref="scrollbarRef" tag="ul"><slot /></tu-scrollbar>
      </tu-select-dropdown>
    </template>
  </tu-trigger>
</template>

<script lang="ts" setup>
import { toRefs, useAttrs, ref } from 'vue';
import { selectProps, selectEmits } from './select';
import { useTrigger } from '@tu-view-plus/hooks';
import { TuTrigger } from '../../trigger';
import TuSelectDropdown from './select-dropdown.vue';
import TuScrollbar from '../../scrollbar';
import { useFormDisabled, useFormItem, useFormItemInputId } from '../../form';
import '../style/select.scss';

import type { ComponentPublicInstance } from 'vue';

defineOptions({
  name: 'TuSelect',
  inheritAttrs: false
});

const props = defineProps(selectProps);
const emit = defineEmits(selectEmits);

const attrs = useAttrs();

const { popupVisible } = toRefs(props);

const triggerRef = ref<InstanceType<typeof TuTrigger> | null>(null);
const dropdownRef = ref<ComponentPublicInstance>();

const selectDisabled = useFormDisabled();

const { form, formItem } = useFormItem();

const { inputId } = useFormItemInputId(props, {
  formItemContext: formItem
});

const { computedPopupVisible, handlePopupVisibleChange } = useTrigger({
  popupVisible,
  emit
});

const handleMouseEnter = () => {
  console.log('handleMouseEnter');
};

const handleMouseLeave = () => {
  console.log('handleMouseLeave');
};

const toggleMenu = () => {
  console.log('toggleMenu');
};
</script>
