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
    <template #default>
      <div v-bind="attrs">
        <tu-input
          ref="inputRef"
          type="text"
          :id="inputId"
          :name="name"
          :autocomplete="autocomplete"
        ></tu-input>
      </div>
    </template>
    <template #content>
      <tu-select-dropdown>
        <tu-scrollbar ref="scrollbarRef" tag="ul"><slot /></tu-scrollbar>
      </tu-select-dropdown>
    </template>
  </tu-trigger>
</template>

<script lang="ts" setup>
import { toRefs, useAttrs, ref, computed } from 'vue';
import { selectProps, selectEmits } from './select';
import { useTrigger } from '@tu-view-plus/hooks';
import { TuTrigger } from '../../trigger';
import TuInput from '../../input';
import TuSelectDropdown from './select-dropdown.vue';
import TuScrollbar from '../../scrollbar';
import { useSelect } from './use-select';
import { useFormDisabled, useFormItem, useFormItemInputId } from '../../form';
import '../style/select.scss';

defineOptions({
  name: 'TuSelect',
  inheritAttrs: false
});

const props = defineProps(selectProps);
const emit = defineEmits(selectEmits);

const attrs = useAttrs();

const { popupVisible } = toRefs(props);

const { handleMouseEnter, handleMouseLeave, toggleMenu } = useSelect(
  props,
  emit
);

const triggerRef = ref<InstanceType<typeof TuTrigger> | null>(null);

const selectDisabled = useFormDisabled();

const { form, formItem } = useFormItem();

const { inputId } = useFormItemInputId(props, {
  formItemContext: formItem
});

const { computedPopupVisible, handlePopupVisibleChange } = useTrigger({
  popupVisible,
  emit
});
</script>
