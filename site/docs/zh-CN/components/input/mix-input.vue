<template>
  <tu-input class="mb-2" v-model="inputValue1" placeholder="请输入">
    <template #prepend>Http://</template>
  </tu-input>

  <tu-input v-model="inputValue2" placeholder="请输入">
    <template #append>Com</template>
  </tu-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const inputValue1 = ref('');
const inputValue2 = ref('');
</script>