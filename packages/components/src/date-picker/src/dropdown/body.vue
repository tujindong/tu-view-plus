<template>
  <div>
    body
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { bodyProps } from './body';

defineOptions({
  name: 'Body'
});

const props = defineProps(bodyProps);
</script>
