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
      :default-value="['test']"
      :style="{ width: '320px' }"
      placeholder="Please Enter"
      allow-clear
    >
    </tu-input-tag>
    <br />
    <br />
    <br />
    <br />
    <tu-descriptions title="用户信息">
      <tu-descriptions-item label="姓名">汤姆</tu-descriptions-item>
      <tu-descriptions-item label="手机号">18100000000</tu-descriptions-item>
      <tu-descriptions-item label="地点">合肥</tu-descriptions-item>
      <tu-descriptions-item label="备注">学校</tu-descriptions-item>
      <tu-descriptions-item label="住址">
        安徽省合肥市高新区
      </tu-descriptions-item>
    </tu-descriptions>
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
  Service
} from '@tu-view-plus/icons-vue';
</script>
<style lang="scss"></style>
