<template>
  <tu-menu
    style="width: 200px; border-radius: 4px"
    :default-selected-keys="['1']"
  >
    <tu-menu-item key="1">Navigation 1</tu-menu-item>
    <tu-menu-item key="2">Navigation 2</tu-menu-item>
    <tu-sub-menu key="3" title="Navigation 3">
      <tu-menu-item key="3-1">Menu 1</tu-menu-item>
      <tu-menu-item key="3-2">Menu 2</tu-menu-item>
    </tu-sub-menu>
    <tu-menu-item key="4">Navigation 4</tu-menu-item>
  </tu-menu>
</template>
