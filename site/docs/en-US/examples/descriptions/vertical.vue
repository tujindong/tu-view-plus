<template>
  <tu-radio-group v-model="size">
    <tu-radio label="mini">Mini</tu-radio>
    <tu-radio label="small">Small</tu-radio>
    <tu-radio label="medium">Medium</tu-radio>
    <tu-radio label="large">Large</tu-radio>
  </tu-radio-group>

  <tu-descriptions
    class="mt-2"
    title="With border"
    direction="vertical"
    border
    :column="4"
    :size="size"
  >
    <tu-descriptions-item label="Username">Tom</tu-descriptions-item>
    <tu-descriptions-item label="Telephone">18100000000</tu-descriptions-item>
    <tu-descriptions-item label="Place" :span="2">Hefei</tu-descriptions-item>
    <tu-descriptions-item label="Remarks">School</tu-descriptions-item>
    <tu-descriptions-item label="Address">
      High tech District, Hefei, Anhui Province
    </tu-descriptions-item>
  </tu-descriptions>

  <tu-descriptions
    class="mt-2"
    title="Without border"
    :column="4"
    :size="size"
    direction="vertical"
  >
    <tu-descriptions-item label="Username">Tom</tu-descriptions-item>
    <tu-descriptions-item label="Telephone">18100000000</tu-descriptions-item>
    <tu-descriptions-item label="Place" :span="2">Hefei</tu-descriptions-item>
    <tu-descriptions-item label="Remarks">School</tu-descriptions-item>
    <tu-descriptions-item label="Address">
      High tech District, Hefei, Anhui Province
    </tu-descriptions-item>
  </tu-descriptions>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const size = ref('medium');
</script>
