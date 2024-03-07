<template>
  <span :class="classes">
    <span v-if="!simple" :class="nsPagination.e('jumper-prepend')">
      <slot name="jumper-prepend">{{ t('tu.pagination.goto') }}</slot>
    </span>

    <tu-input-number
      v-model="inputValue"
      :class="nsPagination.e('jumper-input')"
      :min="1"
      :max="pages"
      :size="size"
      :disabled="disabled"
      :controls="false"
      @change="handleChange"
    />
    <span
      v-if="$slots['jumper-append']"
      :class="nsPagination.e('jumper-append')"
    >
      <slot name="jumper-append" />
    </span>

    <template v-if="simple">
      <span :class="nsPagination.e('jumper-separator')">/</span>
      <span :class="nsPagination.e('jumper-total-page')">{{ pages }}</span>
    </template>
  </span>
</template>

<script lang="ts" setup>
import { ref, computed, nextTick, watch } from 'vue';
import {
  paginationJumperProps,
  paginationJumperEmits
} from './pagination-jumper';
import { useNamespace, useLocale } from '@tu-view-plus/hooks';
import TuInputNumber from '../../input-number';
import '../style/pagination.scss';

defineOptions({
  name: 'TuPaginationJumper'
});

const props = defineProps(paginationJumperProps);
const emit = defineEmits(paginationJumperEmits);

const nsPagination = useNamespace('pagination');

const { t } = useLocale();

const inputValue = ref(props.simple ? props.current : undefined);

const classes = computed(() => ({
  [nsPagination.e('jumper')]: true,
  [nsPagination.is('simple')]: props.simple
}));

watch(
  () => props.current,
  (value) => {
    if (props.simple && value !== inputValue.value) {
      inputValue.value = value;
    }
  }
);

const handleChange = (value: number | undefined) => {
  emit('change', inputValue.value);
  nextTick(() => {
    if (!props.simple) {
      inputValue.value = undefined;
    }
  });
};
</script>
