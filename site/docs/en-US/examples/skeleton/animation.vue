<template>
  <tu-switch v-model="animation" class="mb-2" />

  <tu-skeleton :animation="animation">
    <tu-skeleton-shape />
    <tu-skeleton-line :rows="3" />
  </tu-skeleton>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const animation = ref(false);
</script>
