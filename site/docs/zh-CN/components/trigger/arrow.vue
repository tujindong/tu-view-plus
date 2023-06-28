<template>
  <tu-trigger trigger="click">
    <tu-button>点击</tu-button>
    <template #content>
      <div class="demo-trigger-arrow">这是内容</div>
    </template>
  </tu-trigger>
  <tu-trigger trigger="click" show-arrow>
    <tu-button>点击带箭头</tu-button>
    <template #content>
      <div class="demo-trigger-arrow">这是内容</div>
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
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  font-size: 14px;
}
</style>