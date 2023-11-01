<template>
  <tu-textarea v-model="textarea1" autosize placeholder="Please input" />

  <div style="margin: 20px 0" />

  <tu-textarea
    v-model="textarea2"
    :autosize="{ minRows: 2, maxRows: 4 }"
    placeholder="Please input"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const textarea1 = ref('');
const textarea2 = ref('');
</script>
