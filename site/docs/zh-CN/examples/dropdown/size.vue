<template>
  <tu-dropdown size="mini">
    <tu-button size="mini">下拉菜单</tu-button>
    <template #content>
      <tu-dropdown-item>选项1</tu-dropdown-item>
      <tu-dropdown-item disabled>选项2</tu-dropdown-item>
      <tu-dropdown-item>选项3</tu-dropdown-item>
    </template>
  </tu-dropdown>
  <tu-dropdown size="small">
    <tu-button size="small">下拉菜单</tu-button>
    <template #content>
      <tu-dropdown-item>选项1</tu-dropdown-item>
      <tu-dropdown-item disabled>选项2</tu-dropdown-item>
      <tu-dropdown-item>选项3</tu-dropdown-item>
    </template>
  </tu-dropdown>
  <tu-dropdown>
    <tu-button>下拉菜单</tu-button>
    <template #content>
      <tu-dropdown-item>选项1</tu-dropdown-item>
      <tu-dropdown-item disabled>选项2</tu-dropdown-item>
      <tu-dropdown-item>选项3</tu-dropdown-item>
    </template>
  </tu-dropdown>
  <tu-dropdown size="large">
    <tu-button size="large">下拉菜单</tu-button>
    <template #content>
      <tu-dropdown-item>选项1</tu-dropdown-item>
      <tu-dropdown-item disabled>选项2</tu-dropdown-item>
      <tu-dropdown-item>选项3</tu-dropdown-item>
    </template>
  </tu-dropdown>
</template>