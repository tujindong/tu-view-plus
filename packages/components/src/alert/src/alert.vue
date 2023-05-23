<template>
  <div><slot /></div>
</template>

<script lang="ts" setup>
import { alertProps } from './alert';

defineOptions({
  name: 'TuAlert'
});

const props = defineProps(alertProps);

// init here
</script>
