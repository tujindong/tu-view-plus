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
    <tu-select placeholder="请输入" allow-clear>
      <tu-select-option
        v-for="item in options"
        :key="item.value"
        :value="item.value"
        :disabled="item.disabled"
        >{{ item.label }}</tu-select-option
      >
    </tu-select>
    <br />
    <br />
    <tu-select placeholder="请输入" allow-clear multiple :default-value="['1']">
      <tu-select-option
        v-for="item in options"
        :key="item.value"
        :value="item.value"
        :disabled="item.disabled"
        >{{ item.label }}</tu-select-option
      >
    </tu-select>
    <br />
    <br />
    <tu-select
      :default-value="['Beijing', 'Shanghai']"
      placeholder="请选择"
      multiple
    >
      <tu-select-option>Beijing</tu-select-option>
      <tu-select-option>Shanghai</tu-select-option>
      <tu-select-option>Guangzhou</tu-select-option>
      <tu-select-option disabled>Disabled</tu-select-option>
      <tu-select-option>Shenzhen</tu-select-option>
      <tu-select-option>Wuhan</tu-select-option>
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
    value: '1',
    label: 'Option1'
  },
  {
    value: '2',
    label: 'Option2',
    disabled: true
  },
  {
    value: '3',
    label: 'Option3'
  },
  {
    value: '4',
    label: 'Option4'
  },
  {
    value: '5',
    label: 'Option5'
  },
  {
    value: '6',
    label: 'Option6'
  },
  {
    value: '7',
    label: 'Option7'
  },
  {
    value: '8',
    label: 'Option8'
  },
  {
    value: '9',
    label: 'Option9'
  }
];
</script>
<style lang="scss">
.demo-button-row {
  align-items: baseline;
  margin-bottom: 20px;
}
</style>
