<template>
  <tu-trigger trigger="click">
    <tu-button>Click Me</tu-button>
    <template #content>
      <div class="demo-trigger-arrow">This is trigger content.</div>
    </template>
  </tu-trigger>
  <tu-trigger trigger="click" show-arrow>
    <tu-button>Click Me(Arrow)</tu-button>
    <template #content>
      <div class="demo-trigger-arrow">This is trigger content.</div>
    </template>
  </tu-trigger>
</template>

<style lang="scss">
.demo-trigger-arrow {
  display: flex;
  height: 80px;
  width: 180px;
  align-items: center;
  justify-content: center;
  background-color: var(--vp-c-bg);
  border-radius: 4px;
  box-shadow: 0 2px 6px 0 var(--vp-c-divider);
  font-size: 14px;
}
</style>
