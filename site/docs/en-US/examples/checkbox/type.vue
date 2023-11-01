<template>
  <div>
    <p>Button Style</p>
    <tu-checkbox-group v-model="checked1" type="button">
      <tu-checkbox :label="1"> Option 1</tu-checkbox>
      <tu-checkbox :label="2"> Option 2</tu-checkbox>
      <tu-checkbox :label="3"> Option 3</tu-checkbox>
    </tu-checkbox-group>
  </div>
  <div>
    <p>Border Style</p>
    <tu-checkbox-group v-model="checked2" type="border">
      <tu-checkbox :label="1"> Option 1</tu-checkbox>
      <tu-checkbox :label="2"> Option 2</tu-checkbox>
      <tu-checkbox :label="3"> Option 3</tu-checkbox>
    </tu-checkbox-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked1 = ref([]);
const checked2 = ref([]);
</script>
