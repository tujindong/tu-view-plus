<template>
  <div style="padding-bottom: 500px">
    ~~{{ inputValue }}
    <tu-textarea
      ref="textarea"
      :autosize="{ minRow: 1, maxRow: 1 }"
      v-model="inputValue"
      clearable
    >
    </tu-textarea>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useToggle } from '@vueuse/core';
import { Search, ArrowLeft, ArrowRight } from '@tu-view-plus/icons-vue';
import type { CSSProperties } from 'vue';

const [visible, toggleVisible] = useToggle();

const radio = ref(1);
const inputValue = ref('123');
const textarea = ref('');

onMounted(() => {});
</script>
<style lang="scss"></style>
