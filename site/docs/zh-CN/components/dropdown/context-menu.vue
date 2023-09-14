<template>
  <tu-dropdown trigger="contextMenu" alignPoint :style="{ display: 'block' }">
    <div class="demo-dropdown-point-area">
      <p>右键点击此区域</p>
    </div>
    <template #content>
      <tu-dropdown-item>选项1</tu-dropdown-item>
      <tu-dropdown-item>选项2</tu-dropdown-item>
      <tu-dropdown-item>选项3</tu-dropdown-item>
    </template>
  </tu-dropdown>
</template>


<style scoped>
.demo-dropdown-point-area {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 260px;
  box-shadow: 0px 0px 6px var(--vp-c-divider);
}
</style>