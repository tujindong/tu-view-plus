<template>
  <div>
    <p>Button Style</p>
    <tu-radio-group v-model="radio1" type="button">
      <tu-radio :label="1">Option 1</tu-radio>
      <tu-radio :label="2">Option 2</tu-radio>
      <tu-radio :label="3">Option 3</tu-radio>
    </tu-radio-group>
  </div>
  <div>
    <p>Border Style</p>
    <tu-radio-group v-model="radio2" type="border">
      <tu-radio :label="1">Option 1</tu-radio>
      <tu-radio :label="2">Option 2</tu-radio>
      <tu-radio :label="3">Option 3</tu-radio>
    </tu-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radio1 = ref(1);
const radio2 = ref(1);
</script>
