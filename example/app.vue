<template>
  <div style="padding-bottom: 500px">
    <tu-input v-model="inputValue" disabled placeholder="请输入" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useToggle } from '@vueuse/core';
import { Tools, Search, Calendar } from '@tu-view-plus/icons-vue';

const [visible, toggleVisible] = useToggle();

const radio = ref(1);
const inputValue = ref('');
const inputExceed = ref('exceed');
</script>
<style lang="scss"></style>
