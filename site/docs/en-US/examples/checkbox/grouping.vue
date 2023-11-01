<template>
  <tu-checkbox-group v-model="checkList">
    <tu-checkbox label="1"> Option 1</tu-checkbox>
    <tu-checkbox label="2"> Option 2</tu-checkbox>
    <tu-checkbox label="3"> Option 3</tu-checkbox>
    <tu-checkbox label="4" disabled> Option 4</tu-checkbox>
    <tu-checkbox label="5" disabled> Option 5</tu-checkbox>
  </tu-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checkList = ref(['1', '5']);
</script>
