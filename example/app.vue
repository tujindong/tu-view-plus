<template>
  <div style="padding-bottom: 500px">
    <tu-switch
      v-model="value2"
      class="mb-2"
      active-text="Pay by month"
      inactive-text="Pay by year"
    />
    <br />
    <br />
    <tu-switch
      v-model="value3"
      inline-prompt
      active-text="是"
      inactive-text="否"
    />
    <br />
    <br />
    <tu-switch
      v-model="value4"
      class="ml-2"
      inline-prompt
      active-text="Y"
      inactive-text="N"
    />
    <br />
    <br />
    <tu-switch
      v-model="value6"
      class="ml-2"
      width="60"
      inline-prompt
      active-text="超出省略"
      inactive-text="超出省略"
    />
    <br />
    <br />
    <tu-switch
      v-model="value5"
      class="ml-2"
      inline-prompt
      style="--tu-switch-on-color: #13ce66; --tu-switch-off-color: #ff4949"
      active-text="完整展示多个内容"
      inactive-text="多个内容"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useToggle } from '@vueuse/core';
import { Search, ArrowLeft, ArrowRight } from '@tu-view-plus/icons-vue';
import type { CSSProperties } from 'vue';

const [visible, toggleVisible] = useToggle();
const textareaValue = ref('1233');
const value1 = ref(true);
const value2 = ref(false);
const value3 = ref(true);
const value4 = ref(true);
const value5 = ref(true);
const value6 = ref(true);

onMounted(() => {});
</script>
<style lang="scss"></style>
