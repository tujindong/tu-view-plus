<template>
  <div style="width: 100%">
    <br />
    <br />
    <tu-configProvider>
      <tu-button>provider按钮</tu-button>
    </tu-configProvider>
    <br />
    <br />
    <tu-select placeholder="请输入">
      <tu-select-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </tu-select>
    <br />
    <br />
    <br />
    <p>tu-select-view</p>
    <br />
    <tu-select-view
      clearable
      :modelValue="[{ value: '1', label: '测试', closable: true }]"
    >
      <template #prefix>
        <tu-icon><Search /></tu-icon>
      </template>
    </tu-select-view>
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

const options = [
  {
    value: 'Option1',
    label: 'Option1'
  },
  {
    value: 'Option2',
    label: 'Option2'
  },
  {
    value: 'Option3',
    label: 'Option3'
  },
  {
    value: 'Option4',
    label: 'Option4'
  },
  {
    value: 'Option5',
    label: 'Option5'
  }
];
</script>
<style lang="scss">
.demo-button-row {
  align-items: baseline;
  margin-bottom: 20px;
}
</style>
