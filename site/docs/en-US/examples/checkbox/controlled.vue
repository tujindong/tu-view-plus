<template>
  <tu-checkbox v-model="checked1"> Option 1(v-model)</tu-checkbox>
  <tu-checkbox :model-value="true"> Option 2(Binding Constants)</tu-checkbox>
  <tu-checkbox :model-value="checked3"> Option 3(Bind Variable) </tu-checkbox>

  <tu-button class="mt-2" @click="checked3 = !checked3">
    Switch to option 3
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
