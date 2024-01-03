<template>
  <div :class="classes">
    picker-dropdown
    <div :class="nsPicker.e('dropdown-content')">
      <template v-if="headerMode"></template>
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
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import { pickerDropdownProps } from './picker-dropdown';
import { useNamespace } from '@tu-view-plus/hooks';
import TuYear from './dropdown/year/year.vue';
import TuQuarter from './dropdown/quarter/quarter.vue';
import TuMonth from './dropdown/month/month.vue';
import TuWeek from './dropdown/week/week.vue';
import TuDate from './dropdown/date/date.vue';
import TuShortcuts from './dropdown/shortcuts.vue';
import TuFooter from './dropdown/footer.vue';

defineOptions({
  name: 'PickerDropdown'
});

const props = defineProps(pickerDropdownProps);

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
  headerMode
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

const classes = computed(() => ({
  [nsPicker.e('dropdown')]: true,
  [nsPicker.em('dropdown', 'dropdown-only')]: hideTrigger?.value,
  [nsPicker.em('dropdown', 'shortcuts-placement-left')]:
    showShortcutsInLeft.value,
  [nsPicker.em('dropdown', 'shortcuts-placement-right')]:
    showShortcutsInRight.value
}));
</script>
