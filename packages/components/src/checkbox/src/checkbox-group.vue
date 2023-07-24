<template>
  <label :class="classes"> </label>
</template>

<script lang="ts" setup>
import { computed, inject, useSlots } from 'vue';
import { checkboxGroupEmits, checkboxGroupProps } from './checkbox-group';
import { useNamespace } from '@tu-view-plus/hooks';

defineOptions({
  name: 'TuCheckboxGroup'
});

const props = defineProps(checkboxGroupProps);
const emit = defineEmits(checkboxGroupEmits);

const nsCheckboxGroup = useNamespace('checkbox-group');

const classes = computed(() => ({
  [nsCheckboxGroup.b()]: true
}));
</script>