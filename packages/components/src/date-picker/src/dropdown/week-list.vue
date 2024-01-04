<template>
  <div :class="nsPicker.e('week-list')">
    <div
      v-for="key in weekList"
      :key="key"
      :class="nsPicker.e('week-list-item')"
    >
      {{ labelList[key] || '' }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { weekListProps } from './week-list';
import { useNamespace, useLocale } from '@tu-view-plus/hooks';

defineOptions({
  name: 'TuWeekList'
});

defineProps(weekListProps);

const nsPicker = useNamespace('picker');

const { t } = useLocale();

const labelList = computed<string[]>(() => {
  return ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'].map((i) =>
    t(`tu.datepicker.weeks.${i}`)
  );
});
</script>
