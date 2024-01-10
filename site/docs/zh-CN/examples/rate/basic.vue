<template>
  <div class="demo-block">
    <p>默认不区分颜色</p>
    <tu-rate v-model="value1" />
  </div>
  <div class="demo-block">
    <p>区分颜色</p>
    <tu-rate v-model="value2" :colors="colors" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(null);
const value2 = ref(null);
const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900']); // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
</script>

<style scoped>
.demo-block {
  width: 50%;
  display: inline-block;
}
</style>
