<template>
  <tu-trigger trigger="click" align-point>
    <div class="demo-trigger-point-area">
      <p>点击此区域</p>
    </div>
    <template #content>
      <div class="demo-trigger-point">这是内容</div>
    </template>
  </tu-trigger>
</template>

<style scoped>
.demo-trigger-point-area {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 260px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
}

.demo-trigger-point {
  padding: 10px;
  width: 200px;
  background-color: var(--vp-c-bg);
  border-radius: 4px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
}
</style>