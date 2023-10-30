<template>
  <tu-switch v-model="value" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref(false);
</script>
