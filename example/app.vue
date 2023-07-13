<template>
  <div style="padding-bottom: 500px">
    <tu-switch v-model="value1" />

    <br />
    <br />

    <tu-switch
      v-model="value2"
      class="ml-2"
      style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useToggle } from '@vueuse/core';
import { Search, ArrowLeft, ArrowRight } from '@tu-view-plus/icons-vue';
import type { CSSProperties } from 'vue';

const [visible, toggleVisible] = useToggle();

const value1 = ref(true);
const value2 = ref(true);

onMounted(() => {});
</script>
<style lang="scss"></style>
