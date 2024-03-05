<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { paginationItemStepProps } from './pagination-item-step';
import '../style/pagination.scss';

defineOptions({
  name: 'TuPaginationItemStep'
});

const props = defineProps(paginationItemStepProps);
</script>
