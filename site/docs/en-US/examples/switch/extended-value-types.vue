<template>
  <tu-tooltip :content="`current value is: ${value}`" placement="top">
    <tu-switch v-model="value" active-value="100" inactive-value="0" />
  </tu-tooltip>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('0');
</script>
