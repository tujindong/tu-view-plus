<template>
  <tu-row>
    <span>Animation</span>
    <tu-switch v-model="animation" />
  </tu-row>
  <tu-skeleton :animation="animation">
    <tu-skeleton-line :rows="3" />
    <tu-skeleton-shape />
  </tu-skeleton>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const animation = ref(true);
</script>
