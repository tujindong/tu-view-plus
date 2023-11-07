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
    <br />
    <br />
    <br />
    <br />
    <tu-space>
      <tu-button type="primary">Item1</tu-button>
      <tu-button type="primary">Item2</tu-button>
      <tu-switch />
    </tu-space>
    <br />
    <br />
    <br />
    <br />
    <br />
    <tu-input class="mb-2" placeholder="请输入">
      <template #prepend>Http://</template>
    </tu-input>
    <br />
    <tu-row>
      <span>Animation</span>
      <tu-switch v-model="animation" />
    </tu-row>
    <tu-skeleton :animation="animation">
      <tu-skeleton-line :rows="3" />
      <tu-skeleton-shape />
    </tu-skeleton>
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
import { CircleClose, SuccessFilled, Star } from '@tu-view-plus/icons-vue';

const visible = ref(false);

const animation = ref(true);
</script>
<style lang="scss"></style>
