<template>
  <p>Minimum 1, maximum 3</p>
  <tu-checkbox-group v-model="checkedList" :min="1" :max="3">
    <tu-checkbox v-for="option in options" :key="option" :label="option">
      {{ option }}
    </tu-checkbox>
  </tu-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
const checkedList = ref([] as string[]);
</script>
