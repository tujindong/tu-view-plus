<template>
  <tu-checkbox v-model="checked1">选项1(v-model)</tu-checkbox>
  <tu-checkbox :model-value="true">选项2(绑定固定值)</tu-checkbox>
  <tu-checkbox :model-value="checked3"> 选项3(绑定变化值) </tu-checkbox>

  <tu-button class="mt-2" size="small" @click="checked3 = !checked3">
    点击切换选项3
  </tu-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked1 = ref(false);
const checked3 = ref(false);
</script>

<style scoped>
.mt-2 {
  display: block;
}
</style>