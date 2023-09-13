<template>
  <tu-dropdown @select="handleSelect">
    <tu-button>基础下拉菜单</tu-button>
    <template #content>
      <tu-dropdown-item>选项1</tu-dropdown-item>
      <tu-dropdown-item disabled>选项2</tu-dropdown-item>
      <tu-dropdown-item :value="3">选项3</tu-dropdown-item>
    </template>
  </tu-dropdown>
</template>

<script lang="ts" setup>
const handleSelect = (v) => {
  console.log(v);
};
</script>