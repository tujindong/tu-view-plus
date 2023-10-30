<template>
  <tu-trigger>
    <tu-button>正下方</tu-button>
    <template #content>
      <div class="demo-trigger-translate">这是内容</div>
    </template>
  </tu-trigger>
  <tu-trigger :popup-translate="[100, 20]">
    <tu-button>下方偏移 [100, 20]</tu-button>
    <template #content>
      <div class="demo-trigger-translate">这是内容</div>
    </template>
  </tu-trigger>
  <tu-trigger :popup-translate="[-100, 20]">
    <tu-button>下方偏移 [-100, 20]</tu-button>
    <template #content>
      <div class="demo-trigger-translate">这是内容</div>
    </template>
  </tu-trigger>
</template>

<style scoped>
.demo-trigger-translate {
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