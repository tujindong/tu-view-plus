<template>
  <span class="demo-label">mini</span>
  <tu-rate v-model="value" size="mini" />
  <br />

  <span class="demo-label">small</span>
  <tu-rate v-model="value" size="small" />
  <br />

  <span class="demo-label">medium</span>
  <tu-rate v-model="value" />
  <br />

  <span class="demo-label">large</span>
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
