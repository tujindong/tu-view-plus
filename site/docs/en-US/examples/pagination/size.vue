<template>
  <tu-radio-group class="mb-2" v-model="size" type="button">
    <tu-radio label="mini">超小</tu-radio>
    <tu-radio label="small">较小</tu-radio>
    <tu-radio label="medium">中等</tu-radio>
    <tu-radio label="large">较大</tu-radio>
  </tu-radio-group>

  <tu-pagination
    show-total
    show-jumper
    show-page-size
    button
    :total="50"
    :size="size"
  />

  <tu-pagination
    show-total
    show-jumper
    show-page-size
    :total="50"
    :size="size"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const size = ref('medium');
</script>
