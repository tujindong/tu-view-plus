<template>
  <tu-textarea v-model="textarea1" autosize placeholder="请输入" />

  <div style="margin: 20px 0" />

  <tu-textarea
    v-model="textarea2"
    :autosize="{ minRows: 2, maxRows: 4 }"
    placeholder="请输入"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const textarea1 = ref('');
const textarea2 = ref('');
</script>