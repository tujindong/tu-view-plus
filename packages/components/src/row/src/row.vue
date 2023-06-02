<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { rowProps } from './row'
import '../style/row.scss';

defineOptions({
  name: 'TuRow',
})

const props = defineProps(rowProps)

// init here
</script>
