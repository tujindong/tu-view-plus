<template>
  <tu-switch v-model="value1" loading />
  <tu-switch v-model="value2" loading type="round" class="ml-2" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(false);
const value2 = ref(false);
</script>
