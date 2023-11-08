<template>
  <tu-radio-group class="mb-2" v-model="size" type="button">
    <tu-radio label="mini">Mini</tu-radio>
    <tu-radio label="small">Small</tu-radio>
    <tu-radio label="medium">Medium</tu-radio>
    <tu-radio label="large">Large</tu-radio>
  </tu-radio-group>

  <br />

  <tu-space :size="size">
    <tu-button>Button 1</tu-button>
    <tu-button>Button 2</tu-button>
    <tu-button>Button 3</tu-button>
  </tu-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const size = ref('medium');
</script>
