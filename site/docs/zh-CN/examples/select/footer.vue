<template>
  <tu-select placeholder="请选择" v-model="value">
    <tu-select-option>选项 1</tu-select-option>
    <tu-select-option>选项 2</tu-select-option>
    <tu-select-option>选项 3</tu-select-option>
    <tu-select-option>选项 4</tu-select-option>
    <tu-select-option>选项 5</tu-select-option>
    <tu-select-option>选项 6</tu-select-option>
    <template #footer>
      <div style="padding: 6px 12px; text-align: right">
        <tu-space>
          <tu-button size="small">取消</tu-button>
          <tu-button size="small" type="primary">确定</tu-button>
        </tu-space>
      </div>
    </template>
  </tu-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('');
</script>
