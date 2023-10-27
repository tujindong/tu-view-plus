<template>
  <tu-switch v-model="value1" disabled />
  <tu-switch v-model="value2" disabled class="ml-2" />
  <tu-switch v-model="value3" disabled type="round" class="ml-4" />
  <tu-switch v-model="value4" disabled type="round" class="ml-2" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(false);
const value2 = ref(true);
const value3 = ref(false);
const value4 = ref(true);
</script>
