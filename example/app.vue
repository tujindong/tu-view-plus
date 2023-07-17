<template>
  <div style="padding-bottom: 500px">
    <br />
    <br />
    <tu-switch v-model="value" active-value="100" inactive-value="0" loading />
    <br />
    <br />
    <tu-switch
      class="ml-2"
      v-model="value2"
      :active-icon="Check"
      :inactive-icon="Close"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useToggle } from '@vueuse/core';
import {
  Search,
  ArrowLeft,
  ArrowRight,
  Check,
  Close
} from '@tu-view-plus/icons-vue';
import type { CSSProperties } from 'vue';

const [visible, toggleVisible] = useToggle();

const value = ref('100');
const value1 = ref('0');
const value2 = ref(false);

onMounted(() => {});
</script>
<style lang="scss"></style>
