<template>
  <tu-trigger
    trigger="click"
    animation-name="slide-dynamic-origin"
    auto-fit-transform-origin
    :click-to-close="false"
    :position="position"
    :disabled="timePickerDisabled || readonly"
    :popup-offset="4"
    :popup-visible="panelVisible"
    :prevent-focus="true"
    :unmount-on-close="unmountOnClose"
    :popup-container="popupContainer"
    @popupVisibleChange="onPanelVisibleChange"
  >
    <component
      :is="
        isRange
          ? shallowComponent['TuRangePicker']
          : shallowComponent['TuPicker']
      "
      :size="size"
      :format="() => {}"
    ></component>
    <template #content>
      <div :class="nsTimePicker.e('container')">
        <component
          :is="
            isRange
              ? shallowComponent['TuTimePickerRangeDropdown']
              : shallowComponent['TuTimePickerDropdown']
          "
        ></component>
      </div>
    </template>
  </tu-trigger>
</template>

<script lang="ts" setup>
import {
  ref,
  computed,
  reactive,
  toRefs,
  nextTick,
  shallowReactive
} from 'vue';
import { timePickerProps, TimePickerEmits } from './time-picker';
import { useNamespace, useMergeState, useState } from '@tu-view-plus/hooks';
import { useFormDisabled, useFormSize } from '../../form';
import TuTrigger from '../../trigger';
import TuPicker from '../../picker';
import TuRangePicker from '../../range-picker';
import TuTimePickerDropdown from './time-picker-dropdown.vue';
import TuTimePickerRangeDropdown from './time-picker-range-dropdown.vue';
import '../style/time-picker.scss';

defineOptions({
  name: 'TuTimePicker',
  inheritAttrs: false
});

const props = defineProps(timePickerProps);
const emit = defineEmits(TimePickerEmits);

const {
  type,
  format,
  use12Hours,
  modelValue,
  defaultValue,
  popupVisible,
  defaultPopupVisible,
  disabled,
  placeholder,
  disableConfirm,
  disabledHours,
  disabledMinutes,
  disabledSeconds
} = toRefs(props);

const nsTimePicker = useNamespace('time-picker');

const timePickerDisabled = useFormDisabled();
const timePickerSize = useFormSize();

const [focusedInputIndex, setFocusedInputIndex] = useState(0);

const [panelVisible, setLocalVisible] = useMergeState(
  defaultPopupVisible.value,
  reactive({ value: popupVisible })
);

const refInput = ref();
const shallowComponent = shallowReactive<any>({
  TuPicker,
  TuRangePicker,
  TuTimePickerDropdown,
  TuTimePickerRangeDropdown
});

const isRange = computed(() => type.value === 'time-range');

const setPanelVisible = (newVisible: boolean) => {
  if (newVisible !== panelVisible.value) {
    setLocalVisible(newVisible);
    emit('popup-visible-change', newVisible);
    emit('update:popupVisible', newVisible);
  }
};

const focusInput = (index?: number) => {
  refInput.value && refInput.value.focus && refInput.value.focus(index);
};

const onPanelVisibleChange = (newVisible: boolean) => {
  if (timePickerDisabled.value) return;
  setPanelVisible(newVisible);

  if (newVisible) {
    nextTick(() => {
      focusInput(focusedInputIndex.value);
    });
  }
};
</script>
