<template>
  <tu-menu mode="horizontal" :default-selected-keys="['1']">
    <tu-menu-item key="1">导航一</tu-menu-item>
    <tu-menu-item key="2">导航二</tu-menu-item>
    <tu-sub-menu key="3" title="导航三">
      <tu-menu-item key="3-1">选项一</tu-menu-item>
      <tu-menu-item key="3-2">选项二</tu-menu-item>
    </tu-sub-menu>
    <tu-menu-item key="4">导航四</tu-menu-item>
  </tu-menu>
</template>
