<template>
  <div style="height: 160px; overflow-y: scroll">
    <div style="height: 300px; text-align: center">
      <tu-trigger trigger="click" update-at-scroll>
        <tu-button style="margin-top: 60px">点击</tu-button>
        <template #content>
          <div class="demo-trigger-basic">这是内容</div>
        </template>
      </tu-trigger>
    </div>
  </div>
</template>

<style scoped>
.demo-trigger-basic {
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