<template>
  <div v-show="type !== 'hidden'">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { inputProps } from './input';
import '../style/input.scss';

defineOptions({
  name: 'TuInput'
});

const props = defineProps(inputProps);
</script>
