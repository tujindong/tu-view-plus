<template>
  <div style="padding-bottom: 500px">
    <tu-textarea
      v-model="textarea1"
      show-word-limit
      maxlength="3"
      placeholder="Please input"
      clearable
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useToggle } from '@vueuse/core';
import { Search, ArrowLeft, ArrowRight } from '@tu-view-plus/icons-vue';

const [visible, toggleVisible] = useToggle();

const radio = ref(1);
const inputValue = ref('');
const textarea1 = ref('textarea');
const textarea2 = ref('');
const inputExceed = ref('exceed');
</script>
<style lang="scss"></style>
