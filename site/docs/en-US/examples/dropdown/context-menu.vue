<template>
  <tu-dropdown trigger="contextMenu" alignPoint :style="{ display: 'block' }">
    <div class="demo-dropdown-point-area">
      <p>Click here by right mouse</p>
    </div>
    <template #content>
      <tu-dropdown-item>Option 1</tu-dropdown-item>
      <tu-dropdown-item>Option 2</tu-dropdown-item>
      <tu-dropdown-item>Option 3</tu-dropdown-item>
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
