<template>
  <div>select-option</div>
</template>

<script lang="ts" setup>
import { selectOptionProps } from './select-option';
import { useNamespace } from '@tu-view-plus/hooks';

defineOptions({
  name: 'TuSelectOption'
});

const props = defineProps(selectOptionProps);
</script>
