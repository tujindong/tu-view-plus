<template>
  <li :class="classes" :style="styles" @click="handleClick">
    <slot :page="pageNumber">
      {{ pageNumber }}
    </slot>
  </li>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { paginationItemProps, paginationItemEmits } from './pagination-item';
import { useNamespace } from '@tu-view-plus/hooks';
import '../style/pagination.scss';

defineOptions({
  name: 'TuPaginationItem'
});

const props = defineProps(paginationItemProps);
const emit = defineEmits(paginationItemEmits);

const nsPagination = useNamespace('pagination');

const isActive = computed(() => props.current === props.pageNumber);

const classes = computed(() => ({
  [nsPagination.e('item')]: true,
  [nsPagination.is('active')]: isActive.value
}));

const styles = computed(() =>
  isActive.value ? props.activeStyle : props.style
);

const handleClick = (e: MouseEvent) => {
  if (!props.disabled) {
    emit('click', props.pageNumber, e);
  }
};
</script>
