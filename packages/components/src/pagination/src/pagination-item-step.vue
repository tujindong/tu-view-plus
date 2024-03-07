<template>
  <component :is="simple ? 'span' : 'li'" :class="classes" @click="handleClick">
    <slot :type="isNext ? 'next' : 'previous'">
      <tu-icon v-if="isNext"><ArrowRight /></tu-icon>
      <tu-icon v-else><ArrowLeft /></tu-icon>
    </slot>
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import {
  paginationItemStepProps,
  paginationItemStepEmits
} from './pagination-item-step';
import { useNamespace } from '@tu-view-plus/hooks';
import { ArrowLeft, ArrowRight } from '@tu-view-plus/icons-vue';
import { getLegalPage } from './utils';
import TuIcon from '../../icon';
import '../style/pagination.scss';

defineOptions({
  name: 'TuPaginationItemStep'
});

const props = defineProps(paginationItemStepProps);
const emit = defineEmits(paginationItemStepEmits);

const nsPagination = useNamespace('pagination');

const isNext = props.type === 'next';

const computedDisabled = computed(() => {
  if (props.disabled) {
    return props.disabled;
  }
  if (!props.pages) {
    return true;
  }
  if (isNext && props.current === props.pages) {
    return true;
  }
  return !isNext && props.current <= 1;
});

const nextPage = computed(() =>
  getLegalPage(props.current + (isNext ? 1 : -1), {
    min: 1,
    max: props.pages
  })
);

const classes = computed(() => ({
  [nsPagination.e('item')]: true,
  [nsPagination.em('item', props.type)]: props.type,
  [nsPagination.is('disabled')]: computedDisabled.value
}));

const handleClick = (e: MouseEvent) => {
  if (!computedDisabled.value) {
    emit('click', nextPage.value);
  }
};
</script>
