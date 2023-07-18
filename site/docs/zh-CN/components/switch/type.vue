<template>
  <tu-switch v-model="value1" />

  <tu-switch class="ml-2" v-model="value2" type="round" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(false);
const value2 = ref(false);
</script>
