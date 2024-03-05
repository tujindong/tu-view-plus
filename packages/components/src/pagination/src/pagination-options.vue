<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { paginationOptionsProps } from './pagination-options';
import '../style/pagination.scss';

defineOptions({
  name: 'TuPaginationOptions'
});

const props = defineProps(paginationOptionsProps);
</script>
