<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { paginationItemProps } from './pagination-item';
import '../style/pagination.scss';

defineOptions({
  name: 'TuPaginationItem'
});

const props = defineProps(paginationItemProps);
</script>
