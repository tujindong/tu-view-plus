<template>
  <tu-input-number
    placeholder="Please input"
    v-model="num"
    :min="1"
    :max="10"
    controls-position="right"
    @change="handleChange"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const num = ref(1);

const handleChange = (value: number) => {
  console.log(value);
};
</script>
