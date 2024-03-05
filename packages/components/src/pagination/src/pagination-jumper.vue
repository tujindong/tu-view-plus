<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { paginationJumperProps } from './pagination-jumper';
import '../style/pagination.scss';

defineOptions({
  name: 'TuPaginationJumper'
});

const props = defineProps(paginationJumperProps);
</script>
