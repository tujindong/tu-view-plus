<template>
  <tu-radio-group class="mb-2" v-model="size" type="button">
    <tu-radio label="mini">超小</tu-radio>
    <tu-radio label="small">较小</tu-radio>
    <tu-radio label="medium">中等</tu-radio>
    <tu-radio label="large">较大</tu-radio>
  </tu-radio-group>

  <br />

  <tu-space :size="size">
    <tu-button>按钮1</tu-button>
    <tu-button>按钮2</tu-button>
    <tu-button>按钮3</tu-button>
  </tu-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const size = ref('medium');
</script>
