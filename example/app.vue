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
    <br />
    <br />
    <p>tu-select</p>
    <br />
    <br />
    <tu-select
      placeholder="请选择"
      v-model="value2"
      multiple
      :max-tag-count="2"
    >
      <tu-select-option>选项1</tu-select-option>
      <tu-select-option>选项2</tu-select-option>
      <tu-select-option>选项3</tu-select-option>
      <tu-select-option>选项4</tu-select-option>
      <tu-select-option>选项5</tu-select-option>
      <tu-select-option>选项6</tu-select-option>
    </tu-select>
    <br />
    <br />
    <br />
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
const value2 = ref([]);

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
