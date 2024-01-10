<template>
  <span class="demo-label">超小</span>
  <tu-rate v-model="value" size="mini" />
  <br />

  <span class="demo-label">较小</span>
  <tu-rate v-model="value" size="small" />
  <br />

  <span class="demo-label">默认</span>
  <tu-rate v-model="value" />
  <br />

  <span class="demo-label">大型</span>
  <tu-rate v-model="value" size="large" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref(null);
</script>

<style scoped>
.demo-label {
  font-size: 14px;
  vertical-align: -webkit-baseline-middle;
  margin-right: 5px;
}
</style>
