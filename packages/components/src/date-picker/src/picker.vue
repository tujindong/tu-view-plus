<template>
  <tu-trigger
    v-if="!hideTrigger"
    trigger="click"
    animation-name="slide-dynamic-origin"
    auto-fit-transform-origin
    :click-to-close="false"
    :popup-offset="4"
    v-bind="triggerProps"
    :position="position"
    :disabled="pickerDisabled || readonly"
    :prevent-focus="true"
    :popup-visible="panelVisible"
    :unmount-on-close="unmountOnClose"
    :popup-container="popupContainer"
    @popupVisibleChange="onPanelVisibleChange"
  >
    <slot>
      <!-- <tu-picker
        ref="refInput"
        v-bind="$attrs"
        :size="size"
        :focused="panelVisible"
        :visible="panelVisible"
        :error="error"
        :disabled="pickerDisabled"
        :readonly="!inputEditable || disabledInput"
        :allow-clear="allowClear && !readonly"
        :placeholder="computedPlaceholder"
        :input-value="inputValue"
        :value="needConfirm ? panelValue : selectedValue"
        :format="inputFormat"
        @clear="onInputClear"
        @change="onInputChange"
        @pressEnter="onInputPressEnter"
        @blur="onInputBlur"
      >
      </tu-picker> -->
    </slot>
    <template #content>
      <tu-picker-dropdown />
    </template>
  </tu-trigger>
  <tu-picker-dropdown v-else />
</template>

<script lang="ts" setup>
import { toRefs, computed, reactive } from 'vue';
import { Dayjs } from 'dayjs';
import { pickerProps, pickerEmits } from './picker';
import { useNamespace, useMergeState } from '@tu-view-plus/hooks';
import { isFunction, getDateValue } from '@tu-view-plus/utils';
import { useFormDisabled, useFormSize } from '../../form';
import {
  DisabledTimeProps,
  ShortcutType,
  FormatFunc,
  CalendarValue,
  WeekStart
} from './interface';
import TuTrigger from '../../trigger';
import TuPickerDropdown from './picker-dropdown.vue';
import TuPicker from '../../picker';

defineOptions({
  name: 'Picker'
});

const props = defineProps(pickerProps);
const emit = defineEmits(pickerEmits);

const {
  mode,
  modelValue,
  defaultValue,
  format,
  valueFormat,
  placeholder,
  popupVisible,
  defaultPopupVisible,
  disabled,
  showTime,
  timePickerProps,
  disabledDate,
  disabledTime,
  readonly,
  locale,
  pickerValue,
  defaultPickerValue,
  dayStartOfWeek,
  previewShortcut,
  showConfirmBtn
} = toRefs(props);

const nsPicker = useNamespace('picker');

const pickerSize = useFormSize();
const pickerDisabled = useFormDisabled();

const [panelVisible, setLocalPanelVisible] = useMergeState(
  defaultPopupVisible.value,
  reactive({ value: popupVisible })
);

const inputFormat = computed(() =>
  format && isFunction(format.value)
    ? (value: Dayjs) => (format.value as FormatFunc)?.(getDateValue(value))
    : computedFormat.value
);

const inputEditable = computed(
  () => !readonly.value && !isFunction(inputFormat.value)
);

const setPanelVisible = (newVisible: boolean) => {
  if (panelVisible.value !== newVisible) {
    setLocalPanelVisible(newVisible);
    emit('popup-visible-change', newVisible);
    emit('update:popupVisible', newVisible);
  }
};

const onPanelVisibleChange = (visible: boolean) => {
  if (pickerDisabled.value) return;
  setPanelVisible(visible);
};
</script>
