<template>
  <div :class="nsTimePicker.e('dropdown')">
    <tu-time-picker-column
      v-if="columns.includes('H') || columns.includes('h')"
      :value="selectedHour"
      :list="hours"
      :visible="visible"
      @select="(value) => onSelect(value, 'hour')"
    />
    <tu-time-picker-column
      v-if="columns.includes('m')"
      :value="selectedMinute"
      :list="minutes"
      :visible="visible"
      @select="(value) => onSelect(value, 'minute')"
    />
    <tu-time-picker-column
      v-if="columns.includes('s')"
      :value="selectedSecond"
      :list="seconds"
      :visible="visible"
      @select="(value) => onSelect(value, 'second')"
    />
    <tu-time-picker-column
      v-if="computedUse12Hours"
      :value="selectedAmpm"
      :list="ampmList"
      :visible="visible"
      @select="(value) => onSelect(value, 'ampm')"
    />
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, computed, ref, watch } from 'vue';
import {
  timePickerDropdownProps,
  timePickerDropdownEmits
} from './time-picker-dropdown';
import { Dayjs } from 'dayjs';
import { useNamespace } from '@tu-view-plus/hooks';
import { isUndefined, dayjs } from '@tu-view-plus/utils';
import { useTimeFormat, useTimeList, useIsDisabledTime } from './hooks';
import TuTimePickerColumn from './time-picker-column.vue';
import '../style/time-picker.scss';

defineOptions({
  name: 'TuTimePickerDropdown'
});

const props = defineProps(timePickerDropdownProps);
const emit = defineEmits(timePickerDropdownEmits);

const {
  value,
  visible,
  format,
  step,
  use12Hours,
  hideDisabledOptions,
  disabledHours,
  disabledMinutes,
  disabledSeconds,
  disabled
} = toRefs(props);

const nsTimePicker = useNamespace('time-picker');

const {
  columns,
  use12Hours: computedUse12Hours,
  format: computedFormat
} = useTimeFormat(
  reactive({
    format,
    use12Hours
  })
);

const selectedValue = ref<Dayjs | undefined>(value?.value);

const setSelectedValue = (value: Dayjs | undefined) => {
  selectedValue.value = value;
};

const selectedHour = computed(() => {
  const _hour = selectedValue.value?.hour();
  if (isUndefined(_hour) || !computedUse12Hours.value) return _hour;
  if (_hour > 12) return _hour - 12;
  if (_hour === 0) return 12;
  return _hour;
});
const selectedMinute = computed(() => selectedValue.value?.minute());

const selectedSecond = computed(() => selectedValue.value?.second());

const selectedAmpm = computed(() => {
  const _hour = selectedValue.value?.hour();
  return !isUndefined(_hour) && _hour >= 12 ? 'pm' : 'am';
});

const { hours, minutes, seconds, ampmList } = useTimeList(
  reactive({
    format: computedFormat,
    step,
    use12Hours: computedUse12Hours,
    hideDisabledOptions,
    disabledHours,
    disabledMinutes,
    disabledSeconds,
    selectedHour,
    selectedMinute,
    selectedSecond,
    selectedAmpm,
    disabled
  })
);

const isDisabledTime = useIsDisabledTime(
  reactive({
    disabledHours,
    disabledMinutes,
    disabledSeconds
  })
);
const confirmBtnDisabled = computed(() => isDisabledTime(selectedValue.value));

function emitConfirm(value: Dayjs | undefined) {
  if (isUndefined(value)) return;
  emit('confirm', value);
}

function emitSelect(value: Dayjs) {
  setSelectedValue(value);
  emit('select', value);
}

// 选中谁就更新谁
function onSelect(
  value: number | string,
  type: 'hour' | 'minute' | 'second' | 'ampm' = 'hour'
) {
  let newValue;
  const hour = selectedHour.value || '00';
  const minute = selectedMinute.value || '00';
  const second = selectedSecond.value || '00';
  const ampm = selectedAmpm.value || 'am';

  switch (type) {
    case 'hour':
      newValue = `${value}:${minute}:${second}`;
      break;
    case 'minute':
      newValue = `${hour}:${value}:${second}`;
      break;
    case 'second':
      newValue = `${hour}:${minute}:${value}`;
      break;
    case 'ampm':
      newValue = `${hour}:${minute}:${second} ${value}`;
      break;
    default:
      newValue = '00:00:00';
  }

  let valueFormat = 'HH:mm:ss';
  if (computedUse12Hours.value) {
    valueFormat = 'HH:mm:ss a';
    if (type !== 'ampm') {
      newValue = `${newValue} ${ampm}`;
    }
  }

  newValue = dayjs(newValue, valueFormat);
  emitSelect(newValue);
}

watch([visible, value], () => {
  if (!visible.value) return;
  setSelectedValue(value?.value);
});
</script>
