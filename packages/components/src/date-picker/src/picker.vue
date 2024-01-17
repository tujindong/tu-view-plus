<template>
  <tu-trigger
    v-if="!hideTrigger"
    v-bind="triggerProps"
    trigger="click"
    animation-name="slide-dynamic-origin"
    auto-fit-transform-origin
    :click-to-close="false"
    :popup-offset="10"
    :position="position"
    :disabled="pickerDisabled || readonly"
    :prevent-focus="true"
    :popup-visible="panelVisible"
    :unmount-on-close="unmountOnClose"
    :popup-container="popupContainer"
    @popupVisibleChange="onPanelVisibleChange"
  >
    <slot>
      <tu-picker
        ref="refInput"
        v-bind="$attrs"
        :size="pickerSize"
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
        <template v-if="$slots.prefix" #prefix>
          <slot name="prefix" />
        </template>
        <template #suffix-icon>
          <slot name="suffix-icon">
            <tu-icon>
              <Calendar />
            </tu-icon>
          </slot>
        </template>
      </tu-picker>
    </slot>
    <template #content>
      <tu-picker-dropdown v-bind="panelProps" @click="onPanelClick" />
    </template>
  </tu-trigger>
  <tu-picker-dropdown v-else v-bind="{ ...$attrs, ...panelProps }" />
</template>

<script lang="ts" setup>
import {
  ref,
  toRefs,
  computed,
  reactive,
  useSlots,
  watch,
  onUnmounted
} from 'vue';
import { Dayjs } from 'dayjs';
import { pickerProps, pickerEmits } from './picker';
import {
  useNamespace,
  useMergeState,
  useLocale,
  useState
} from '@tu-view-plus/hooks';
import {
  useFormat,
  usePickerState,
  useIsDisabledDate,
  useReturnValue,
  useHeaderValue,
  useTimePickerValue
} from './hooks';
import {
  isFunction,
  getDateValue,
  dayjs,
  isBoolean,
  isValueChange,
  pick,
  omit,
  getNow
} from '@tu-view-plus/utils';
import { useFormDisabled, useFormSize } from '../../form';
import {
  getFormattedValue,
  isValidInputValue
} from '../../time-picker/src/utils';
import { ShortcutType, FormatFunc } from './interface';
import { mergeValueWithTime } from './utils';
import TuTrigger from '../../trigger';
import TuPickerDropdown from './picker-dropdown.vue';
import TuPicker from '../../picker';
import { TuIcon } from '../../icon';
import { Calendar } from '@tu-view-plus/icons-vue';
import '../style/index.scss';

defineOptions({
  name: 'Picker',
  inheritAttrs: false
});

let clearPreviewTimer: any;

const props = defineProps(pickerProps);
const emit = defineEmits(pickerEmits);
const slots = useSlots();

const {
  mode,
  modelValue,
  defaultValue,
  format,
  valueFormat,
  placeholder,
  popupVisible,
  defaultPopupVisible,
  showTime,
  timePickerProps,
  disabledDate,
  disabledTime,
  readonly,
  pickerValue,
  defaultPickerValue,
  previewShortcut,
  showConfirmBtn
} = toRefs(props);

const { t } = useLocale();

const pickerSize = useFormSize();
const pickerDisabled = useFormDisabled();

const refInput = ref();

const headerMode = ref<'year' | 'month' | undefined>();

const [panelVisible, setLocalPanelVisible] = useMergeState(
  defaultPopupVisible.value,
  reactive({ value: popupVisible })
);

const [inputValue, setInputValue] = useState<string | undefined>();

const inputFormat = computed(() =>
  format && isFunction(format.value)
    ? (value: Dayjs) => (format.value as FormatFunc)?.(getDateValue(value))
    : computedFormat.value
);

const inputEditable = computed(
  () => !readonly.value && !isFunction(inputFormat.value)
);

const {
  format: computedFormat,
  valueFormat: returnValueFormat,
  parseValueFormat
} = useFormat(reactive({ format, mode, showTime, valueFormat }));

const computedPlaceholder = computed(
  () =>
    placeholder?.value ||
    {
      date: t('tu.datepicker.placeholder.date'),
      month: t('tu.datepicker.placeholder.month'),
      year: t('tu.datepicker.placeholder.year'),
      week: t('tu.datepicker.placeholder.week'),
      quarter: t('tu.datepicker.placeholder.quarter')
    }[mode.value] ||
    t('tu.datepicker.placeholder.date')
);

const forSelectedValue = computed(
  () => processValue.value ?? selectedValue.value
);

const confirmBtnDisabled = computed(
  () =>
    needConfirm.value &&
    (!forSelectedValue.value || isDisabledDate(forSelectedValue.value))
);

const computedTimePickerProps = computed(() => ({
  format: computedFormat.value,
  ...omit(timePickerProps?.value || {}, ['defaultValue']),
  visible: panelVisible.value
}));

const needConfirm = computed(() => showTime.value || showConfirmBtn.value);

const { value: selectedValue, setValue: setSelectedValue } = usePickerState(
  reactive({
    modelValue,
    defaultValue,
    format: parseValueFormat
  })
);

const getReturnValue = useReturnValue(
  reactive({
    format: returnValueFormat
  })
);

const [processValue, setProcessValue] = useState<Dayjs | undefined>();

const [previewValue, setPreviewValue] = useState<Dayjs | undefined>();

const panelValue = computed(
  () => previewValue.value ?? processValue.value ?? selectedValue.value
);

const isDisabledDate = useIsDisabledDate(
  reactive({
    mode,
    disabledDate,
    disabledTime,
    showTime
  })
);

// 生成当前面板内容
const { headerValue, setHeaderValue, headerOperations, resetHeaderValue } =
  useHeaderValue(
    reactive({
      mode,
      value: pickerValue,
      defaultValue: defaultPickerValue,
      selectedValue: panelValue,
      format: parseValueFormat,
      onChange: (newVal: Dayjs) => {
        const returnValue = getReturnValue(newVal);
        const formattedValue = getFormattedValue(
          newVal,
          parseValueFormat.value
        );
        const dateValue = getDateValue(newVal);
        emit('picker-value-change', returnValue, dateValue, formattedValue);
        emit('update:pickerValue', returnValue);
      }
    })
  );

const [timePickerValue, , resetTimePickerValue] = useTimePickerValue(
  reactive({
    timePickerProps,
    selectedValue: panelValue
  })
);

const isDateTime = computed(() => mode.value === 'date' && showTime.value);

const setPanelVisible = (newVisible: boolean) => {
  if (panelVisible.value !== newVisible) {
    setLocalPanelVisible(newVisible);
    emit('popup-visible-change', newVisible);
    emit('update:popupVisible', newVisible);
  }
};

const emitChange = (value: Dayjs | undefined, emitOk?: boolean) => {
  const returnValue = value ? getReturnValue(value) : undefined;
  const formattedValue = getFormattedValue(value, parseValueFormat.value);
  const dateValue = getDateValue(value);
  if (isValueChange(value, selectedValue.value)) {
    emit('update:modelValue', returnValue);
    emit('change', returnValue, dateValue, formattedValue);
  }

  if (emitOk) {
    emit('ok', returnValue, dateValue, formattedValue);
  }
};

const select = (value: Dayjs | undefined, emitSelect?: boolean) => {
  setProcessValue(value);
  setPreviewValue(undefined);
  setInputValue(undefined);
  headerMode.value = undefined;

  if (emitSelect) {
    const returnValue = value ? getReturnValue(value) : undefined;
    const formattedValue = getFormattedValue(value, parseValueFormat.value);
    const dateValue = getDateValue(value);
    emit('select', returnValue, dateValue, formattedValue);
  }
};

const confirm = (
  value: Dayjs | undefined,
  showPanel?: boolean,
  emitOk?: boolean
) => {
  if (isDisabledDate(value)) {
    return;
  }

  emitChange(value, emitOk);
  setSelectedValue(value);
  setProcessValue(undefined);
  setPreviewValue(undefined);
  setInputValue(undefined);
  headerMode.value = undefined;
  if (isBoolean(showPanel)) {
    setPanelVisible(showPanel);
  }
};

const onPanelVisibleChange = (visible: boolean) => {
  if (pickerDisabled.value) return;
  setPanelVisible(visible);
};

const onInputClear = (e: Event) => {
  e.stopPropagation();
  confirm(undefined);
  emit('clear');
};

const onInputChange = (e: any) => {
  setPanelVisible(true);

  const targetValue = e.target.value;
  setInputValue(targetValue);

  if (!isValidInputValue(targetValue, computedFormat.value)) return;

  const newValue = dayjs(targetValue, computedFormat.value);

  if (isDisabledDate(newValue)) return;

  if (needConfirm.value) {
    select(newValue);
  } else {
    confirm(newValue, true);
  }
};

const onInputPressEnter = () => {
  confirm(panelValue.value, false);
};

const onInputBlur = () => {};

const getMergedOpValue = (date: Dayjs, time?: Dayjs) => {
  if (!isDateTime.value && !timePickerProps?.value) return date;
  return mergeValueWithTime(getNow(), date, time);
};

const onPanelSelect = (value: Dayjs) => {
  if (needConfirm.value) {
    select(value, true);
  } else {
    confirm(value, false);
  }
};

const onPanelCellClick = (value: Dayjs) => {
  const newValue = getMergedOpValue(value, timePickerValue.value);
  onPanelSelect(newValue);
};

const onTimePickerSelect = (time: Dayjs) => {
  const newValue = getMergedOpValue(panelValue.value || getNow(), time);
  onPanelSelect(newValue);
};

const onPanelConfirm = () => {
  confirm(panelValue.value, false, true);
};

const onPanelShortcutClick = (value: Dayjs, shortcut: ShortcutType) => {
  emit('select-shortcut', shortcut);
  confirm(value, false);
};

const onPanelShortcutMouseEnter = (value: Dayjs) => {
  clearTimeout(clearPreviewTimer);
  setPreviewValue(value);
  setInputValue(undefined);
};

const onPanelShortcutMouseLeave = () => {
  clearTimeout(clearPreviewTimer);
  clearPreviewTimer = setTimeout(() => {
    setPreviewValue(undefined);
  }, 100);
};

const onPanelHeaderLabelClick = (type: 'year' | 'month') => {
  headerMode.value = type;
};

const onPanelHeaderSelect = (date: Dayjs) => {
  let newValue = headerValue.value;
  newValue = newValue.set('year', date.year());
  if (headerMode.value === 'month') {
    newValue = newValue.set('month', date.month());
  }
  setHeaderValue(newValue);
  if (mode.value === 'quarter' || mode.value === 'month') {
    // 季度选择器特殊处理，月份选完后关闭headerMode
    headerMode.value = undefined;
    return;
  }
  headerMode.value = headerMode.value === 'year' ? 'month' : undefined; // 年选择完后选择月
};

const onMonthHeaderClick = () => {
  headerMode.value = 'year';
};

const focusInput = (index?: number) => {
  refInput.value && refInput.value.focus && refInput.value.focus(index);
};

const onPanelClick = () => {
  if (props.disabledInput) {
    focusInput();
  }
};

const panelProps = computed(() => ({
  ...pick(props, [
    'mode',
    'shortcuts',
    'shortcutsPosition',
    'dayStartOfWeek',
    'disabledDate',
    'disabledTime',
    'showTime',
    'hideTrigger',
    'abbreviation'
  ]),
  size: pickerSize.value,
  showNowBtn: props.showNowBtn && mode.value === 'date',
  format: parseValueFormat.value,
  value: panelValue.value,
  visible: panelVisible.value,
  showConfirmBtn: needConfirm.value,
  confirmBtnDisabled: confirmBtnDisabled.value,
  timePickerProps: computedTimePickerProps.value,
  extra: slots.extra,
  dateRender: slots.cell,
  headerValue: headerValue.value,
  headerIcons: {
    prev: slots['icon-prev'],
    prevDouble: slots['icon-prev-double'],
    next: slots['icon-next'],
    nextDouble: slots['icon-next-double']
  },
  headerOperations: headerOperations.value,
  timePickerValue: timePickerValue.value,
  headerMode: headerMode.value,
  onCellClick: onPanelCellClick,
  onTimePickerSelect,
  onConfirm: onPanelConfirm,
  onShortcutClick: onPanelShortcutClick,
  onShortcutMouseEnter: previewShortcut.value
    ? onPanelShortcutMouseEnter
    : undefined,
  onShortcutMouseLeave: previewShortcut.value
    ? onPanelShortcutMouseLeave
    : undefined,
  onTodayBtnClick: onPanelSelect,
  onHeaderLabelClick: onPanelHeaderLabelClick,
  onHeaderSelect: onPanelHeaderSelect,
  onMonthHeaderClick
}));

watch(panelVisible, (newVisible) => {
  setProcessValue(undefined);
  setPreviewValue(undefined);
  headerMode.value = undefined;

  // open
  if (newVisible) {
    resetHeaderValue();
    resetTimePickerValue();
  }

  // close
  if (!newVisible) {
    setInputValue(undefined);
  }
});

onUnmounted(() => {
  clearTimeout(clearPreviewTimer);
});
</script>
