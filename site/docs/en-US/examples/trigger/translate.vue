<template>
  <tu-trigger>
    <tu-button>Default</tu-button>
    <template #content>
      <div class="demo-trigger-translate">This is trigger content.</div>
    </template>
  </tu-trigger>
  <tu-trigger :popup-translate="[100, 20]">
    <tu-button>Bottom offset [100, 20]</tu-button>
    <template #content>
      <div class="demo-trigger-translate">This is trigger content.</div>
    </template>
  </tu-trigger>
  <tu-trigger :popup-translate="[-100, 20]">
    <tu-button>Bottom offset [-100, 20]</tu-button>
    <template #content>
      <div class="demo-trigger-translate">This is trigger content.</div>
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
