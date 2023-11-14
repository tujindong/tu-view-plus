<template>
  <div style="width: 100%">
    <br />
    <br />
    <tu-configProvider :locale="en">
      <tu-button>provider按钮</tu-button>
    </tu-configProvider>
    <br />
    <br />
    <tu-select placeholder="请输入">
      <tu-option>北京</tu-option>
      <tu-option>上海</tu-option>
      <tu-option>广州</tu-option>
      <tu-option disabled>禁用</tu-option>
    </tu-select>
    <br />
    <br />
    <br />
    <tu-pagination layout="prev, pager, next" :total="50" />
    <br />
    <br />
    <br />

    <tu-input-tag
      :default-value="[
        '测试',
        '测试测试',
        '测试测试测试测试测试测测试测试测试测试测试测试测试测试试测试测试',
        '测试'
      ]"
      :style="{ width: '320px' }"
      placeholder="Please Enter"
      allow-clear
    >
    </tu-input-tag>
    <br />
    <br />
    <tu-input-tag
      size="mini"
      :default-value="['测试']"
      :style="{ width: '320px' }"
      placeholder="Please Enter"
      disabled
    />
    <br />
    <br />
    <tu-input-tag
      size="mini"
      :default-value="['测试']"
      :style="{ width: '320px' }"
      placeholder="Please Enter"
    />
    <br />
    <br />
    <tu-input-tag
      size="small"
      :default-value="['测试']"
      :style="{ width: '320px' }"
      placeholder="Please Enter"
    />
    <br />
    <br />
    <tu-input-tag
      :default-value="['测试']"
      :style="{ width: '320px' }"
      placeholder="Please Enter"
    />
    <br />
    <br />
    <tu-input-tag
      size="large"
      :default-value="['测试']"
      :style="{ width: '320px' }"
      placeholder="Please Enter"
    />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <tu-row class="demo-button-row">
      <tu-tag size="mini">Mini Tag</tu-tag>
      <tu-tag size="small">Small Tag</tu-tag>
      <tu-tag>Medium Tag</tu-tag>
      <tu-tag size="large">Large Tag</tu-tag>
    </tu-row>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <tu-pagination layout="prev, pager, next" :total="1000" />
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
</script>
<style lang="scss">
.demo-button-row {
  align-items: baseline;
  margin-bottom: 20px;
}
</style>
