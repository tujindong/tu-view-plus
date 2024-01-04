<template>
  <div>
    month
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { monthProps, monthEmits } from './month';
import { useNamespace } from '@tu-view-plus/hooks';

defineOptions({
  name: 'TuMonth'
});

const props = defineProps(monthProps);

const nsPicker = useNamespace('picker');
</script>
