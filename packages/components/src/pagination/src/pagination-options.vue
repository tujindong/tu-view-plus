<template>
  <span :class="nsPagination.e('options')">
    <tu-select
      v-bind="selectProps"
      :model-value="pageSize"
      :options="options"
      :size="size"
      :disabled="disabled"
      @change="handleChange"
    />
  </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import {
  paginationOptionsProps,
  paginationOptionsEmits
} from './pagination-options';
import { useNamespace, useLocale } from '@tu-view-plus/hooks';
import TuSelect from '../../select';
import '../style/pagination.scss';

defineOptions({
  name: 'TuPaginationOptions'
});

const props = defineProps(paginationOptionsProps);
const emit = defineEmits(paginationOptionsEmits);

const { t } = useLocale();

const nsPagination = useNamespace('pagination');

const options = computed(() =>
  props.sizeOptions.map((value) => ({
    value,
    label: `${value} ${t('tu.pagination.pagesize')}`
  }))
);

const handleChange = (value: string) => {
  emit('change', value);
};
</script>
