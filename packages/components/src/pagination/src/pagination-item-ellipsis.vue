<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { paginationItemEllipsisProps } from './pagination-item-ellipsis';
import '../style/pagination.scss';

defineOptions({
  name: 'TuPaginationItemEllipsis'
});

const props = defineProps(paginationItemEllipsisProps);
</script>
