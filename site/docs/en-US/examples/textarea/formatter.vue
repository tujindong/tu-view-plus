<template>
  <tu-textarea
    v-model="textareaValue"
    placeholder="Please input"
    :formatter="(value: string | number) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
    :parser="(value: string) => value.replace(/\$\s?|(,*)/g, '')"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const textareaValue = ref('');
</script>
