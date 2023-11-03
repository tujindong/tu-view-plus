<template>
  <tu-trigger trigger="click" align-point>
    <div class="demo-trigger-point-area">
      <p>Click Here</p>
    </div>
    <template #content>
      <div class="demo-trigger-point">This is trigger content.</div>
    </template>
  </tu-trigger>
</template>

<style scoped>
.demo-trigger-point-area {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 260px;
  box-shadow: 0px 0px 6px var(--vp-c-divider);
}

.demo-trigger-point {
  padding: 10px;
  width: 200px;
  background-color: var(--vp-c-bg);
  border-radius: 4px;
  box-shadow: 0 2px 6px 0 var(--vp-c-divider);
}
</style>
