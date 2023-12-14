<template>
  <tu-trigger
    trigger="click"
    animation-name="slide-dynamic-origin"
    auto-fit-transform-origin
    :click-to-close="false"
    :position="position"
    :disabled="timePickerDisabled || readonly"
    :popup-offset="8"
    :popup-visible="panelVisible"
    :prevent-focus="true"
    :unmount-on-close="unmountOnClose"
    :popup-container="popupContainer"
    @popupVisibleChange="onPanelVisibleChange"
  >
    <component
      ref="refInput"
      v-bind="{ ...$attrs, ...inputProps }"
      :is="
        isRange
          ? shallowComponent['TuRangePicker']
          : shallowComponent['TuPicker']
      "
      :input-value="inputValue"
      :value="panelValue"
      :size="size"
      :focused="panelVisible"
      :format="computedFormat"
      :visible="panelVisible"
      :disabled="timePickerDisabled"
      :editable="!readonly"
      :allow-clear="allowClear && !readonly"
      :placeholder="computedPlaceholder"
      @clear.stop="onInputClear"
    >
      <template v-if="$slots.prefix" #prefix>
        <slot name="prefix"> </slot>
      </template>
      <template #suffix-icon>
        <slot name="suffix-icon">
          <Clock />
        </slot>
      </template>
    </component>
    <template #content>
      <div :class="nsTimePicker.e('container')">
        <component
          v-bind="panelProps"
          :is="
            isRange
              ? shallowComponent['TuTimePickerRangeDropdown']
              : shallowComponent['TuTimePickerDropdown']
          "
          :size="size"
          :value="panelValue"
          :visible="panelVisible"
          :format="computedFormat"
          :use12-hours="computedUse12Hours"
          :step="step"
          :disabled-hours="disabledHours"
          :disabled-minutes="disabledMinutes"
          :disabled-seconds="disabledSeconds"
          :hide-disabled-options="hideDisabledOptions"
          :hide-footer="disableConfirm"
          @select="onPanelSelect"
          @confirm="onPanelConfirm"
        >
          <template v-if="$slots.extra" #extra-footer>
            <slot name="extra" />
          </template>
        </component>
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
import { Dayjs } from 'dayjs';
import { timePickerProps, TimePickerEmits } from './time-picker';
import {
  useNamespace,
  useMergeState,
  useState,
  useLocale
} from '@tu-view-plus/hooks';
import {
  isUndefined,
  isArray,
  dayjs,
  getSortedDayjsArray,
  isValueChange,
  getDateValue
} from '@tu-view-plus/utils';
import { Clock } from '@tu-view-plus/icons-vue';
import { useFormDisabled } from '../../form';
import { useTimeFormat, useTimeState, useIsDisabledTime } from './hooks';
import {
  getFormattedValue,
  isValidInputValue,
  isValidRangeValue
} from './utils';
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

const { t } = useLocale();

const {
  type,
  format,
  use12Hours,
  modelValue,
  defaultValue,
  popupVisible,
  defaultPopupVisible,
  placeholder,
  disabledHours,
  disabledMinutes,
  disabledSeconds
} = toRefs(props);

const nsTimePicker = useNamespace('time-picker');

const timePickerDisabled = useFormDisabled();

const [focusedInputIndex, setFocusedInputIndex] = useState(0);

const [panelVisible, setLocalVisible] = useMergeState(
  defaultPopupVisible.value,
  reactive({ value: popupVisible })
);

const refInput = ref();

const isRange = computed(() => type.value === 'time-range');

const { format: computedFormat, use12Hours: computedUse12Hours } =
  useTimeFormat(reactive({ format, use12Hours }));

const {
  computedValue,
  panelValue,
  inputValue,
  setValue,
  setPanelValue,
  setInputValue
} = useTimeState(
  reactive({
    modelValue,
    defaultValue,
    isRange,
    format: computedFormat
  })
);

const shallowComponent = shallowReactive<any>({
  TuPicker,
  TuRangePicker,
  TuTimePickerDropdown,
  TuTimePickerRangeDropdown
});

const computedPlaceholder = computed(() => {
  const _placeholder = placeholder?.value;
  // 单个
  if (!isRange.value) {
    return !isUndefined(_placeholder)
      ? _placeholder
      : t('tu.datepicker.placeholder.time');
  }
  // 范围
  if (isUndefined(_placeholder)) {
    return [
      t('tu.datepicker.rangePlaceholder.timeStart'),
      t('tu.datepicker.rangePlaceholder.timeEnd')
    ];
  }
  if (!isArray(_placeholder)) {
    return [_placeholder, _placeholder];
  }
  return _placeholder;
});

const isDisabledTime = useIsDisabledTime(
  reactive({
    disabledHours,
    disabledMinutes,
    disabledSeconds
  })
);

const inputProps = computed(() => {
  if (isRange.value) {
    return {
      focusedIndex: focusedInputIndex.value,
      onFocusedIndexChange: (index: number) => {
        setFocusedInputIndex(index);
      },
      onChange: onRangeInputChange,
      onPressEnter: onRangeInputPressEnter
    };
  }
  return {
    onChange: onInputChange,
    onPressEnter: onInputPressEnter
  };
});

const panelProps = computed(() => {
  if (isRange.value) {
    return {
      displayIndex: focusedInputIndex.value,
      onDisplayIndexChange: (index: number) => {
        setFocusedInputIndex(index);
        focusInput(index);
      }
    };
  }
  return {};
});

const emitChange = (value: Dayjs | Array<Dayjs | undefined> | undefined) => {
  if (isValueChange(value, computedValue.value)) {
    const formattedValue = getFormattedValue(value, computedFormat.value);
    const dateValue = getDateValue(value);
    emit('update:modelValue', formattedValue);
    emit('change', formattedValue, dateValue);
  }
};

const confirm = (
  value: Dayjs | Array<Dayjs | undefined> | undefined,
  showPanel: boolean
) => {
  if (isDisabledTime(value)) return;

  let newValue = value;

  if (isArray(value)) {
    const now = dayjs();
    newValue = value.map((item) => {
      if (item) {
        item = item.year(now.year());
        item = item.month(now.month());
        item = item.date(now.date());
      }
      return item;
    });
    if (isValidRangeValue(newValue)) {
      newValue = getSortedDayjsArray(newValue as Dayjs[]);
    }
    if (newValue?.length === 0) {
      newValue = undefined;
    }
  }

  emitChange(newValue);
  setValue(newValue);

  if (showPanel !== panelVisible.value) {
    setPanelVisible(showPanel);
  }
};

const select = (
  value: Dayjs | Array<Dayjs | undefined>,
  showPanel: boolean
) => {
  setPanelValue(value);

  if (showPanel !== panelVisible.value) {
    setPanelVisible(showPanel);
  }
};

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

const onRangeInputChange = (e: any) => {
  setPanelVisible(true);

  const targetValue = e.target.value;
  const newInputValue = isArray(inputValue.value)
    ? [...inputValue.value]
    : (isArray(panelValue.value) &&
        (getFormattedValue(panelValue.value, computedFormat.value) as Array<
          string | undefined
        >)) ||
      [];
  newInputValue[focusedInputIndex.value] = targetValue;

  setInputValue(newInputValue);

  if (!isValidInputValue(targetValue, computedFormat.value)) return;

  const targetValueDayjs = dayjs(targetValue, computedFormat.value);

  if (isDisabledTime(targetValueDayjs)) return;

  const newValue = isArray(panelValue.value) ? [...panelValue.value] : [];
  newValue[focusedInputIndex.value] = targetValueDayjs;

  if (props.disableConfirm && isValidRangeValue(newValue)) {
    confirm(newValue, true);
  } else {
    select(newValue, true);
  }
};

const onRangeInputPressEnter = () => {
  if (isValidRangeValue(panelValue.value)) {
    confirm(panelValue.value, false);
  } else {
    const newFocusedInputIndex = (focusedInputIndex.value + 1) % 2;
    setFocusedInputIndex(newFocusedInputIndex);
    focusInput(newFocusedInputIndex);
  }
};

const onInputChange = (e: any) => {
  setPanelVisible(true);

  const targetValue = e.target.value;
  setInputValue(targetValue);

  if (!isValidInputValue(targetValue, computedFormat.value)) return;

  const newValue = dayjs(targetValue, computedFormat.value);

  if (isDisabledTime(newValue)) return;

  if (props.disableConfirm) {
    confirm(newValue, true);
  } else {
    select(newValue, true);
  }
};

const onInputPressEnter = () => {
  confirm(panelValue.value || computedValue.value, false);
};

const onInputClear = (e: Event) => {
  e.stopPropagation();
  setPanelValue(undefined);
  confirm(undefined, false);
};

const onPanelSelect = (value: Dayjs | Array<Dayjs | undefined>) => {
  const formattedValue = getFormattedValue(value, computedFormat.value);
  const dateValue = getDateValue(value);
  emit('select', formattedValue as any, dateValue);

  if (props.disableConfirm && (!isRange.value || isValidRangeValue(value))) {
    confirm(value, true);
  } else {
    select(value, true);
    setInputValue(undefined);
  }
};

const onPanelConfirm = (value: Dayjs | Dayjs[]) => {
  confirm(value, false);
};
</script>
