<template>
  <tu-textarea
    v-model="textareaValue"
    placeholder="请输入"
    :formatter="(value: string | number) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
    :parser="(value: string) => value.replace(/\$\s?|(,*)/g, '')"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const textareaValue = ref('');
</script>