<template>
  <tu-trigger
    v-if="!hideTrigger"
    v-bind="triggerProps"
    trigger="click"
    animation-name="slide-dynamic-origin"
    auto-fit-transform-origin
    :click-to-close="false"
    :popup-offset="10"
    :unmount-on-close="unmountOnClose"
    :position="position"
    :disabled="triggerDisabled || readonly"
    :popup-visible="panelVisible"
    :popup-container="popupContainer"
    @popupVisibleChange="onPanelVisibleChange"
  >
    <slot>
      <range-picker
        ref="refInput"
        v-bind="$attrs"
        v-model:focusedIndex="focusedIndex"
        :size="rangePickerSize"
        :focused="panelVisible"
        :visible="panelVisible"
        :error="error"
        :disabled="disabledArray"
        :readonly="readonly || disabledInput"
        :allow-clear="allowClear && !readonly"
        :placeholder="computedPlaceholder"
        :input-value="inputValue"
        :value="panelValue"
        :format="computedFormat"
        @clear="onInputClear"
        @change="onInputChange"
        @pressEnter="onInputPressEnter"
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
        <template #separator>
          <slot name="separator">
            {{ separator || '-' }}
          </slot>
        </template>
      </range-picker>
    </slot>
    <template #content>
      <tu-range-picker-dropdown v-bind="rangePanelProps" />
    </template>
  </tu-trigger>
  <tu-range-picker-dropdown v-else v-bind="{ ...$attrs, ...rangePanelProps }" />
</template>

<script lang="ts" setup>
import {
  ref,
  toRefs,
  computed,
  reactive,
  useSlots,
  watch,
  onUnmounted,
  nextTick
} from 'vue';
import { Dayjs } from 'dayjs';
import { rangePickerProps, rangePickerEmits } from './range-picker';
import { useFormDisabled, useFormSize } from '../../form';
import {
  isArray,
  dayjs,
  getSortedDayjsArray,
  getDateValue,
  getNow,
  pick,
  omit,
  isValueChange,
  isBoolean
} from '@tu-view-plus/utils';
import { useMergeState, useLocale, useState } from '@tu-view-plus/hooks';
import { Calendar } from '@tu-view-plus/icons-vue';
import {
  useRangePickerState,
  useFormat,
  useIsDisabledDate,
  getReturnRangeValue,
  useRangeHeaderValue,
  useRangeTimePickerValue
} from './hooks';
import { ShortcutType } from './interface';
import {
  getFormattedValue,
  isValidInputValue
} from '../../time-picker/src/utils';
import {
  isCompleteRangeValue,
  isValidRangeValue,
  mergeValueWithTime
} from './utils';
import RangePicker from '../../range-picker';
import TuTrigger from '../../trigger';
import TuIcon from '../../icon';
import TuRangePickerDropdown from './range-picker-dropdown.vue';

defineOptions({
  name: 'TuRangePicker',
  inheritAttrs: false
});

const props = defineProps(rangePickerProps);
const emit = defineEmits(rangePickerEmits);

const slots = useSlots();

const { t } = useLocale();
const {
  mode,
  showTime,
  format,
  modelValue,
  defaultValue,
  popupVisible,
  defaultPopupVisible,
  placeholder,
  timePickerProps,
  disabled,
  disabledDate,
  disabledTime,
  pickerValue,
  defaultPickerValue,
  valueFormat,
  size,
  error,
  exchangeTime,
  previewShortcut,
  showConfirmBtn
} = toRefs(props);

const rangePickerSize = useFormSize();
const rangePickerDisabled = useFormDisabled();

const computedPlaceholder = computed(
  () =>
    placeholder?.value ||
    ({
      date: [
        t('tu.datepicker.rangePlaceholder.dateStart'),
        t('tu.datepicker.rangePlaceholder.dateEnd')
      ],
      month: [
        t('tu.datepicker.rangePlaceholder.monthStart'),
        t('tu.datepicker.rangePlaceholder.monthEnd')
      ],
      year: [
        t('tu.datepicker.rangePlaceholder.yearStart'),
        t('tu.datepicker.rangePlaceholder.yearEnd')
      ],
      week: [
        t('tu.datepicker.rangePlaceholder.weekStart'),
        t('tu.datepicker.rangePlaceholder.weekEnd')
      ],
      quarter: [
        t('tu.datepicker.rangePlaceholder.quarterStart'),
        t('tu.datepicker.rangePlaceholder.quarterEnd')
      ]
    }[mode.value] as unknown as string[]) ||
    ([
      t('tu.datepicker.rangePlaceholder.dateStart'),
      t('tu.datepicker.rangePlaceholder.dateEnd')
    ] as unknown as string[])
);

const {
  format: computedFormat,
  valueFormat: returnValueFormat,
  parseValueFormat
} = useFormat(
  reactive({
    mode,
    format,
    showTime,
    valueFormat
  })
);

const disabledArray = computed(() => {
  const disabled0 =
    disabled.value === true ||
    rangePickerDisabled.value === true ||
    (isArray(disabled.value) && disabled.value[0] === true);
  const disabled1 =
    disabled.value === true ||
    rangePickerDisabled.value === true ||
    (isArray(disabled.value) && disabled.value[1] === true);
  return [disabled0, disabled1];
});

const triggerDisabled = computed(
  () => !!(disabledArray.value[0] && disabledArray.value[1])
);

const getFocusedIndex = (cur = 0) => {
  return disabledArray.value[cur] ? cur ^ 1 : cur;
};

const refInput = ref();
const focusedIndex = ref(getFocusedIndex());
const nextFocusedIndex = computed(() => {
  const cur = focusedIndex.value;
  const next = cur ^ 1;
  return disabledArray.value[next] ? cur : next;
});
const isNextDisabled = computed(
  () => disabledArray.value[focusedIndex.value ^ 1]
);
// 选中值
const { value: selectedValue, setValue: setSelectedValue } =
  useRangePickerState(
    reactive({
      modelValue,
      defaultValue,
      format: parseValueFormat
    })
  );
// 操作值
const [processValue, setProcessValue] = useState<
  Array<Dayjs | undefined> | undefined
>();
// 预览值
const [previewValue, setPreviewValue] = useState<
  Array<Dayjs | undefined> | undefined
>();
// 待确认的选中值
const forSelectedValue = computed(
  () => processValue.value ?? selectedValue.value
);
// 面板显示的值
const panelValue = computed(
  () => previewValue.value ?? processValue.value ?? selectedValue.value
);

// input 操作的值
const [inputValue, setInputValue] = useState<
  string | Array<string | undefined> | undefined
>();

const startHeaderMode = ref<'year' | 'month' | undefined>();

const endHeaderMode = ref<'year' | 'month' | undefined>();

const [panelVisible, setLocalPanelVisible] = useMergeState(
  defaultPopupVisible?.value,
  reactive({ value: popupVisible })
);
const setPanelVisible = (newVisible: boolean) => {
  if (panelVisible.value !== newVisible) {
    setLocalPanelVisible(newVisible);
    emit('popup-visible-change', newVisible);
    emit('update:popupVisible', newVisible);
  }
};

const {
  startHeaderValue,
  endHeaderValue,
  startHeaderOperations,
  endHeaderOperations,
  resetHeaderValue,
  setHeaderValue
} = useRangeHeaderValue(
  reactive({
    mode,
    startHeaderMode,
    endHeaderMode,
    value: pickerValue,
    defaultValue: defaultPickerValue,
    selectedValue: panelValue,
    format: parseValueFormat,
    onChange: (newVal: Dayjs[]) => {
      const returnValue = getReturnRangeValue(newVal, returnValueFormat.value);
      const formattedValue = getFormattedValue(
        newVal,
        parseValueFormat.value
      ) as string[];
      const dateValue = getDateValue(newVal);
      emit('picker-value-change', returnValue, dateValue, formattedValue);
      emit('update:pickerValue', returnValue);
    }
  })
);

const onStartPanelHeaderLabelClick = (type: 'year' | 'month') => {
  startHeaderMode.value = type;
};

const onEndPanelHeaderLabelClick = (type: 'year' | 'month') => {
  endHeaderMode.value = type;
};

const onStartPanelHeaderSelect = (date: Dayjs) => {
  let newStartValue = startHeaderValue.value;
  newStartValue = newStartValue.set('year', date.year());
  if (startHeaderMode.value === 'month') {
    newStartValue = newStartValue.set('month', date.month());
  }
  setHeaderValue([newStartValue, endHeaderValue.value]);
  startHeaderMode.value = undefined;
};

const onEndPanelHeaderSelect = (date: Dayjs) => {
  let newEndValue = endHeaderValue.value;
  newEndValue = newEndValue.set('year', date.year());
  if (endHeaderMode.value === 'month') {
    newEndValue = newEndValue.set('month', date.month());
  }
  setHeaderValue([startHeaderValue.value, newEndValue]);
  endHeaderMode.value = undefined;
};

const footerValue = ref([
  panelValue.value[0] || getNow(),
  panelValue.value[1] || getNow()
]);
watch(panelValue, () => {
  const [value0, value1] = panelValue.value;
  footerValue.value[0] = value0 || footerValue.value[0];
  footerValue.value[1] = value1 || footerValue.value[1];
});

const [timePickerValue, setTimePickerValue, resetTimePickerValue] =
  useRangeTimePickerValue(
    reactive({
      timePickerProps,
      selectedValue: panelValue
    })
  );

const isDateTime = computed(() => mode.value === 'date' && showTime.value);
const hasTime = computed(() => isDateTime.value || timePickerProps?.value);

const isDisabledDate = useIsDisabledDate(
  reactive({
    mode,
    isRange: true,
    showTime,
    disabledDate,
    disabledTime
  })
);

const needConfirm = computed(() => isDateTime.value || showConfirmBtn.value);
const confirmBtnDisabled = computed(
  () =>
    needConfirm.value &&
    (!isCompleteRangeValue(forSelectedValue.value) ||
      isDisabledDate(forSelectedValue.value[0], 'start') ||
      isDisabledDate(forSelectedValue.value[1], 'end'))
);

watch(panelVisible, (newVisible) => {
  startHeaderMode.value = undefined;
  endHeaderMode.value = undefined;

  setProcessValue(undefined);
  setPreviewValue(undefined);
  // open
  if (newVisible) {
    resetHeaderValue();
    resetTimePickerValue();
    focusedIndex.value = getFocusedIndex(focusedIndex.value);
    nextTick(() => focusInput(focusedIndex.value));
  }
  // close
  if (!newVisible) {
    setInputValue(undefined);
  }
});

watch(focusedIndex, () => {
  if (props.disabledInput) {
    focusInput(focusedIndex.value);
    setInputValue(undefined);
  }
});

const emitChange = (
  value: Array<Dayjs | undefined> | undefined,
  emitOk?: boolean
) => {
  const returnValue = value
    ? getReturnRangeValue(value, returnValueFormat.value)
    : undefined;
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

const getSortedDayjsArrayByExchangeTimeOrNot = (newValue: Dayjs[]) => {
  let sortedValue = getSortedDayjsArray(newValue);
  if (hasTime.value && !exchangeTime.value) {
    sortedValue = [
      getMergedOpValue(sortedValue[0], newValue[0]),
      getMergedOpValue(sortedValue[1], newValue[1])
    ];
  }
  return sortedValue;
};

const confirm = (
  value: Array<Dayjs | undefined> | undefined,
  showPanel?: boolean,
  emitOk?: boolean
) => {
  if (
    isDisabledDate(value?.[0], 'start') ||
    isDisabledDate(value?.[1], 'end')
  ) {
    return;
  }

  let newValue = value ? [...value] : undefined;

  if (isCompleteRangeValue(newValue)) {
    newValue = getSortedDayjsArrayByExchangeTimeOrNot(newValue);
  }

  emitChange(newValue, emitOk);
  setSelectedValue(newValue || []);
  setProcessValue(undefined);
  setPreviewValue(undefined);
  setInputValue(undefined);
  startHeaderMode.value = undefined;
  endHeaderMode.value = undefined;

  if (isBoolean(showPanel)) {
    setPanelVisible(showPanel);
  }
};

const emitSelectEvent = (value: Array<Dayjs | undefined>) => {
  const returnValue = getReturnRangeValue(value, returnValueFormat.value);
  const formattedValue = getFormattedValue(value, parseValueFormat.value);
  const dateValue = getDateValue(value);
  emit('select', returnValue, dateValue, formattedValue);
};

const select = (
  value: Array<Dayjs | undefined>,
  options?: {
    emitSelect?: boolean;
    updateHeader?: boolean;
  }
) => {
  const { emitSelect = false, updateHeader = false } = options || {};

  let newValue = [...value];
  if (isCompleteRangeValue(newValue)) {
    newValue = getSortedDayjsArrayByExchangeTimeOrNot(newValue);
  }

  setProcessValue(newValue);
  setPreviewValue(undefined);
  setInputValue(undefined);
  startHeaderMode.value = undefined;
  endHeaderMode.value = undefined;

  if (emitSelect) {
    emitSelectEvent(newValue);
  }

  if (updateHeader) {
    resetHeaderValue();
  }
};

const preview = (
  value: Array<Dayjs | undefined>,
  options?: {
    emitSelect?: boolean;
    updateHeader?: boolean;
  }
) => {
  const { updateHeader = false } = options || {};
  setPreviewValue(value);
  setInputValue(undefined);

  if (updateHeader) {
    resetHeaderValue();
  }
};

const focusInput = (index?: number) => {
  refInput.value && refInput.value.focus && refInput.value.focus(index);
};

const getMergedOpValue = (date: Dayjs, time?: Dayjs) => {
  if (!hasTime.value) return date;
  return mergeValueWithTime(getNow(), date, time);
};

const onPanelVisibleChange = (visible: boolean) => {
  setPanelVisible(visible);
};

const onPanelCellMouseEnter = (date: Dayjs) => {
  if (
    processValue.value &&
    panelValue.value[nextFocusedIndex.value] &&
    (!needConfirm.value || !isCompleteRangeValue(processValue.value))
  ) {
    const newValue = [...panelValue.value];
    const mergedOpValue = getMergedOpValue(
      date,
      timePickerValue.value[focusedIndex.value]
    );
    newValue[focusedIndex.value] = mergedOpValue;

    preview(newValue);
  }
};

const getValueToModify = (isTime = false) => {
  if (isNextDisabled.value) return [...selectedValue.value];
  if (processValue.value) {
    return isTime || !isCompleteRangeValue(processValue.value)
      ? [...processValue.value]
      : [];
  }
  return isTime ? [...selectedValue.value] : [];
};

const onPanelCellClick = (date: Dayjs) => {
  const newValue = getValueToModify();
  const mergedOpValue = getMergedOpValue(
    date,
    timePickerValue.value[focusedIndex.value]
  );
  newValue[focusedIndex.value] = mergedOpValue;

  emitSelectEvent(newValue);
  if (!needConfirm.value && isCompleteRangeValue(newValue)) {
    confirm(newValue, false);
  } else {
    select(newValue);
    if (!isCompleteRangeValue(newValue)) {
      focusedIndex.value = nextFocusedIndex.value;
    } else {
      focusedIndex.value = 0;
    }
  }
};

const onTimePickerSelect = (time: Dayjs, type: 'start' | 'end') => {
  const updateIndex = type === 'start' ? 0 : 1;
  const mergedOpValue = getMergedOpValue(
    timePickerValue.value[updateIndex],
    time
  );
  const newTimeValue = [...timePickerValue.value];
  newTimeValue[updateIndex] = mergedOpValue;
  setTimePickerValue(newTimeValue);

  const newValue = getValueToModify(true);
  if (newValue[updateIndex]) {
    newValue[updateIndex] = mergedOpValue;
    select(newValue, { emitSelect: true });
  }
};

let clearShortcutPreviewTimer: any;
onUnmounted(() => {
  clearTimeout(clearShortcutPreviewTimer);
});

const onPanelShortcutMouseEnter = (value: Array<Dayjs | undefined>) => {
  clearTimeout(clearShortcutPreviewTimer);
  preview(value, { updateHeader: true });
};

const onPanelShortcutMouseLeave = () => {
  clearTimeout(clearShortcutPreviewTimer);
  clearShortcutPreviewTimer = setTimeout(() => {
    setPreviewValue(undefined);
    setInputValue(undefined);
    resetHeaderValue();
  }, 100);
};

const onPanelShortcutClick = (
  value: Array<Dayjs | undefined>,
  shortcut: ShortcutType
) => {
  emit('select-shortcut', shortcut);
  confirm(value, false);
};

const onPanelConfirm = () => {
  confirm(panelValue.value, false, true);
};

const onInputClear = (e: Event) => {
  e.stopPropagation();
  confirm(undefined);
  emit('clear');
};

const onInputChange = (e: any) => {
  setPanelVisible(true);

  const targetValue = e.target.value;

  if (!targetValue) {
    setInputValue(undefined);
    return;
  }

  const formattedPanelValue = getFormattedValue(
    panelValue.value,
    computedFormat.value
  ) as Array<string | undefined>;

  const newInputValue = isArray(inputValue.value)
    ? [...inputValue.value]
    : formattedPanelValue || [];

  newInputValue[focusedIndex.value] = targetValue;

  setInputValue(newInputValue);

  if (!isValidInputValue(targetValue, computedFormat.value)) return;

  const targetValueDayjs = dayjs(targetValue, computedFormat.value);

  if (
    isDisabledDate(targetValueDayjs, focusedIndex.value === 0 ? 'start' : 'end')
  )
    return;

  const newValue = isArray(panelValue.value) ? [...panelValue.value] : [];
  newValue[focusedIndex.value] = targetValueDayjs;

  select(newValue, { updateHeader: true });
};

const onInputPressEnter = () => {
  if (isValidRangeValue(panelValue.value)) {
    confirm(panelValue.value, false);
  } else {
    focusedIndex.value = nextFocusedIndex.value;
  }
};

const computedTimePickerProps = computed(() => ({
  format: computedFormat.value,
  ...omit(timePickerProps?.value || {}, ['defaultValue']),
  visible: panelVisible.value
}));

const headerIcons = computed(() => ({
  prev: slots['icon-prev'],
  prevDouble: slots['icon-prev-double'],
  next: slots['icon-next'],
  nextDouble: slots['icon-next-double']
}));

const startHeaderProps = reactive({
  headerValue: startHeaderValue,
  headerOperations: startHeaderOperations,
  headerIcons
});

const endHeaderProps = reactive({
  headerValue: endHeaderValue,
  headerOperations: endHeaderOperations,
  headerIcons
});

const rangePanelProps = computed(() => ({
  ...pick(props, [
    'mode',
    'showTime',
    'shortcuts',
    'shortcutsPosition',
    'dayStartOfWeek',
    'disabledDate',
    'disabledTime',
    'hideTrigger',
    'abbreviation'
  ]),
  size: rangePickerSize.value,
  format: parseValueFormat.value,
  value: panelValue.value,
  showConfirmBtn: needConfirm.value,
  confirmBtnDisabled: confirmBtnDisabled.value,
  timePickerValue: timePickerValue.value,
  timePickerProps: computedTimePickerProps.value,
  extra: slots.extra,
  dateRender: slots.cell,
  startHeaderProps,
  endHeaderProps,
  footerValue: footerValue.value,
  disabled: disabledArray.value,
  visible: panelVisible.value,
  onCellClick: onPanelCellClick,
  onCellMouseEnter: onPanelCellMouseEnter,
  onShortcutClick: onPanelShortcutClick,
  onShortcutMouseEnter: previewShortcut.value
    ? onPanelShortcutMouseEnter
    : undefined,
  onShortcutMouseLeave: previewShortcut.value
    ? onPanelShortcutMouseLeave
    : undefined,
  onConfirm: onPanelConfirm,
  onTimePickerSelect,
  startHeaderMode: startHeaderMode.value,
  endHeaderMode: endHeaderMode.value,
  onStartHeaderLabelClick: onStartPanelHeaderLabelClick,
  onEndHeaderLabelClick: onEndPanelHeaderLabelClick,
  onStartHeaderSelect: onStartPanelHeaderSelect,
  onEndHeaderSelect: onEndPanelHeaderSelect
}));
</script>
