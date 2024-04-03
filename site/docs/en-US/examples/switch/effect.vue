<template>
  <tu-switch v-model="value1" />

  <tu-switch class="ml-2" v-model="value2" effect="inset" />

  <tu-switch class="ml-2" v-model="value3" effect="bordered" />

  <tu-switch class="ml-2" v-model="value4" effect="outlined" />

  <tu-switch class="ml-2" v-model="value5" effect="flat" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(false);
const value2 = ref(false);
const value3 = ref(false);
const value4 = ref(false);
const value5 = ref(false);
</script>
