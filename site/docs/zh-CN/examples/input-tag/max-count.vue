<template>
  <tu-input-tag v-model="inputTagValue" placeholder="请输入" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const inputTagValue = ref('');
</script>
