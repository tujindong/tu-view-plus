<template>
  <div style="width: 100%">
    <br />
    <br />
    <tu-configProvider>
      <tu-button>provider按钮</tu-button>
    </tu-configProvider>
    <br />
    <br />
    <br />
    <br />
    <tu-color-picker v-model="value" />
    <!-- <br />
    <br />
    <tu-color-picker v-model="value" disabled />
    <br />
    <br />
    <tu-color-picker size="mini" v-model="value" />
    <br />
    <br />
    <tu-color-picker size="small" v-model="value" />
    <br />
    <br />
    <tu-color-picker size="large" v-model="value" />
    <br />
    <br />
    <tu-color-picker defaultValue="#165DFF" showText disabledAlpha /> -->
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, getCurrentInstance, h, reactive } from 'vue';
import { useToggle } from '@vueuse/core';
import dayjs from 'dayjs';
import {
  CircleClose,
  SuccessFilled,
  Star,
  User,
  Edit,
  Service,
  Search,
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  Menu,
  Fold,
  Expand,
  Tools,
  UploadFilled,
  Promotion,
  House
} from '@tu-view-plus/icons-vue';
import type { FormInstance, FormRules } from '../packages/components/src/form';

const value = ref('#165DFF');

setTimeout(() => {
  value.value = '#56df58';
}, 2000);
</script>
<style lang="scss"></style>
