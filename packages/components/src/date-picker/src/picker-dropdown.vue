<template>
  <div :class="classes">
    <tu-shortcuts
      v-if="showShortcuts && shortcutsPosition === 'left'"
      v-bind="shortcutsProps"
    />
    <div :class="nsPicker.e('dropdown-content')">
      <template v-if="headerMode">
        <tu-year
          v-if="headerMode === 'year'"
          :header-value="headerPanelHeaderValue"
          :header-icons="headerIcons"
          :header-operations="headerPanelHeaderOperations"
          @select="onHeaderPanelSelect"
        />
        <tu-month
          v-else-if="headerMode === 'month'"
          :header-value="headerPanelHeaderValue"
          :header-icons="headerIcons"
          :header-operations="headerPanelHeaderOperations"
          :abbreviation="abbreviation"
          @select="onHeaderPanelSelect"
          @header-label-click="onMonthHeaderLabelClick"
        />
      </template>
      <template v-else>
        <tu-week
          v-if="mode === 'week'"
          v-bind="commonPanelProps"
          :day-start-of-week="dayStartOfWeek"
        />

        <tu-month
          v-else-if="mode === 'month'"
          :abbreviation="abbreviation"
          v-bind="commonPanelProps"
        />

        <tu-year v-else-if="mode === 'year'" v-bind="commonPanelProps" />

        <tu-quarter v-else-if="mode === 'quarter'" v-bind="commonPanelProps" />

        <tu-date
          v-else
          v-bind="commonPanelProps"
          mode="date"
          :show-time="showTime"
          :time-picker-props="timePickerProps"
          :day-start-of-week="dayStartOfWeek"
          :footer-value="footerValue"
          :time-picker-value="timePickerValue"
          :disabled-time="disabledTime"
          @timePickerSelect="onTimePickerSelect"
        />

        <tu-footer
          :size="size"
          :show-today-btn="
            showNowBtn && !(showConfirmBtn || showShortcutsInBottom)
          "
          :show-confirm-btn="showConfirmBtn"
          :confirm-btn-disabled="confirmBtnDisabled"
          @todayBtnClick="onTodayBtnClick"
          @confirmBtnClick="onConfirmBtnClick"
        >
          <template v-if="extra" #extra>
            <RenderFunction v-if="extra" :render-func="extra" />
          </template>
          <template v-if="showShortcutsInBottom" #button>
            <tu-shortcuts v-bind="shortcutsProps" />
          </template>
        </tu-footer>
      </template>
    </div>
    <tu-shortcuts
      v-if="showShortcuts && shortcutsPosition === 'right'"
      v-bind="shortcutsProps"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, toRefs, reactive, watch } from 'vue';
import { Dayjs } from 'dayjs';
import { pickerDropdownProps, pickerDropdownEmits } from './picker-dropdown';
import { useNamespace } from '@tu-view-plus/hooks';
import { RenderFunction } from '@tu-view-plus/constants';
import { getNow, getDayjsValue, isFunction } from '@tu-view-plus/utils';
import { useHeaderValue } from './hooks';
import TuYear from './dropdown/year/year.vue';
import TuQuarter from './dropdown/quarter/quarter.vue';
import TuMonth from './dropdown/month/month.vue';
import TuWeek from './dropdown/week/week.vue';
import TuDate from './dropdown/date/date.vue';
import TuShortcuts from './dropdown/shortcuts.vue';
import TuFooter from './dropdown/footer.vue';

import type { CalendarValue, ShortcutType } from './interface';

defineOptions({
  name: 'PickerDropdown'
});

const props = defineProps(pickerDropdownProps);
const emit = defineEmits(pickerDropdownEmits);

const nsPicker = useNamespace('picker');

const {
  shortcuts,
  shortcutsPosition,
  format,
  value,
  disabledDate,
  hideTrigger,
  showNowBtn,
  dateRender,
  showConfirmBtn,
  headerValue,
  headerIcons,
  headerOperations,
  headerMode,
  size
} = toRefs(props);

const hasShortcuts = computed(() =>
  Boolean(shortcuts.value && shortcuts.value.length)
);

const showShortcutsNowBtn = computed(
  () => showNowBtn?.value && showConfirmBtn?.value && !hasShortcuts.value
);

const showShortcuts = computed(
  () => showShortcutsNowBtn.value || hasShortcuts.value
);

const showShortcutsInLeft = computed(
  () => showShortcuts.value && shortcutsPosition.value === 'left'
);

const showShortcutsInRight = computed(
  () => showShortcuts.value && shortcutsPosition.value === 'right'
);

const footerValue = computed(() => value?.value || getNow());

const showShortcutsInBottom = computed(
  () => showShortcuts.value && shortcutsPosition.value === 'bottom'
);

const classes = computed(() => ({
  [nsPicker.e('dropdown')]: true,
  [nsPicker.em('dropdown', size?.value as string)]: size?.value,
  [nsPicker.em('dropdown', 'dropdown-only')]: hideTrigger?.value,
  [nsPicker.em('dropdown', 'shortcuts-placement-left')]:
    showShortcutsInLeft.value,
  [nsPicker.em('dropdown', 'shortcuts-placement-right')]:
    showShortcutsInRight.value
}));

const {
  headerValue: headerPanelHeaderValue,
  setHeaderValue: setHeaderPanelHeaderValue,
  headerOperations: headerPanelHeaderOperations
} = useHeaderValue(
  reactive({
    mode: headerMode,
    format
  })
);

const onPanelSelect = (date: Dayjs) => {
  emit('cell-click', date);
};

const onPanelHeaderLabelClick = (type: 'year' | 'month') => {
  emit('header-label-click', type);
};

const onTimePickerSelect = (time: Dayjs) => {
  emit('time-picker-select', time);
};

const onHeaderPanelSelect = (date: Dayjs) => {
  emit('header-select', date);
};

const onMonthHeaderLabelClick = () => {
  emit('month-header-click');
};

const onTodayBtnClick = () => {
  emit('today-btn-click', getNow());
};

const onConfirmBtnClick = () => {
  emit('confirm');
};

const getShortcutValue = (shortcut: ShortcutType) => {
  const { value } = shortcut;
  return getDayjsValue(
    (isFunction(value) ? value() : value) as CalendarValue,
    shortcut.format || format.value
  );
};

const onShortcutClick = (shortcut: ShortcutType) => {
  emit('shortcut-click', getShortcutValue(shortcut), shortcut);
};

const onShortcutMouseEnter = (shortcut: ShortcutType) => {
  emit('shortcut-mouse-enter', getShortcutValue(shortcut));
};

const onShortcutMouseLeave = (shortcut: ShortcutType) => {
  emit('shortcut-mouse-leave', getShortcutValue(shortcut));
};

const commonPanelProps = reactive({
  value,
  headerValue,
  headerIcons,
  headerOperations,
  disabledDate,
  dateRender,
  onSelect: onPanelSelect,
  onHeaderLabelClick: onPanelHeaderLabelClick
});

const shortcutsProps = reactive({
  shortcuts,
  showNowBtn: showShortcutsNowBtn,
  onItemClick: onShortcutClick,
  onItemMouseEnter: onShortcutMouseEnter,
  onItemMouseLeave: onShortcutMouseLeave,
  onNowClick: onTodayBtnClick
});

watch(headerValue, (val) => {
  setHeaderPanelHeaderValue(val);
});
</script>
