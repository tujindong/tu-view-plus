<template>
  <tu-radio-group class="mb-2" v-model="align" type="button">
    <tu-radio label="start">Start</tu-radio>
    <tu-radio label="center">Center</tu-radio>
    <tu-radio label="end">End</tu-radio>
    <tu-radio label="baseline">Baseline</tu-radio>
  </tu-radio-group>

  <br />

  <tu-space :align="align">
    <tu-card effect="up">
      <p style="line-height: 1">This is the content.</p>
      <p style="line-height: 1">This is the content.</p>
    </tu-card>
    <tu-button>Button 1</tu-button>
    <tu-button>Button 2</tu-button>
  </tu-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const align = ref('start');
</script>
