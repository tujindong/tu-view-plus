<template>
  <div>Radio组合</div>
</template>

<script lang="ts" setup>
import { radioGroupProps, radioGroupEmits } from './radio-group';
import '../style/radio-group.scss';

defineOptions({
  name: 'TuRadioGroup'
});

const props = defineProps(radioGroupProps);
const emit = defineEmits(radioGroupEmits);
</script>

<style>
</style>