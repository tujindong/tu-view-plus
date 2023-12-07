<template>
  <div style="width: 100%">
    <br />
    <br />
    <tu-configProvider>
      <tu-button>provider按钮</tu-button>
    </tu-configProvider>
    <br />
    <br />
    <p>tu-select</p>
    <br />
    <br />
    <br />
    <br />
    <tu-select placeholder="请选择" allow-search>
      <tu-select-option>Beijing</tu-select-option>
      <tu-select-option>Shanghai</tu-select-option>
      <tu-select-option>Guangzhou</tu-select-option>
    </tu-select>
    <br />
    <br />
    <tu-select placeholder="请选择" multiple allow-search allow-clear>
      <tu-select-option>Beijing</tu-select-option>
      <tu-select-option>Shanghai</tu-select-option>
      <tu-select-option>Guangzhou</tu-select-option>
    </tu-select>
    <br />
    <br />
    <br />
    <br />
    <tu-select
      :style="{ width: '320px' }"
      :options="options"
      placeholder="Please select ..."
      :virtual-list-props="{ height: 200 }"
    />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div style="height: 800px"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, getCurrentInstance, h } from 'vue';
import { useToggle } from '@vueuse/core';
import {
  CircleClose,
  SuccessFilled,
  Star,
  User,
  Edit,
  Service,
  Search,
  ArrowLeft,
  ArrowRight
} from '@tu-view-plus/icons-vue';

const inputValue = ref('');

const options = Array(100000)
  .fill(null)
  .map((_, index) => `Option ${index}`);
</script>
<style lang="scss">
.demo-button-row {
  align-items: baseline;
  margin-bottom: 20px;
}
</style>
