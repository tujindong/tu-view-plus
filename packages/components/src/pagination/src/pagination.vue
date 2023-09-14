<template>
  <div>
    pagination
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { paginationProps } from './pagination';
import '../style/pagination.scss';

defineOptions({
  name: 'TuPagination'
});

const props = defineProps(paginationProps);
</script>
s