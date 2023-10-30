<template>
  <tu-dropdown>
    <tu-button>点击触发</tu-button>
    <template #content>
      <tu-dropdown-item>选项1</tu-dropdown-item>
      <tu-dropdown-item>选项2</tu-dropdown-item>
      <tu-dropdown-item>选项3</tu-dropdown-item>
    </template>
  </tu-dropdown>
  <tu-dropdown trigger="hover">
    <tu-button>悬停触发</tu-button>
    <template #content>
      <tu-dropdown-item>选项1</tu-dropdown-item>
      <tu-dropdown-item>选项2</tu-dropdown-item>
      <tu-dropdown-item>选项3</tu-dropdown-item>
    </template>
  </tu-dropdown>
</template>