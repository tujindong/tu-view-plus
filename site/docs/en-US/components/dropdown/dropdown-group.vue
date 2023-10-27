<template>
  <tu-dropdown>
    <tu-button>分组菜单</tu-button>
    <template #content>
      <tu-dropdown-group title="标题1">
        <tu-dropdown-item>选项1</tu-dropdown-item>
        <tu-dropdown-item>选项2</tu-dropdown-item>
        <tu-dropdown-item>选项3</tu-dropdown-item>
      </tu-dropdown-group>
      <tu-dropdown-group title="标题2">
        <tu-dropdown-item>选项4</tu-dropdown-item>
        <tu-dropdown-item>选项5</tu-dropdown-item>
        <tu-dropdown-item>选项6</tu-dropdown-item>
      </tu-dropdown-group>
    </template>
  </tu-dropdown>
</template>