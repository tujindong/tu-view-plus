<template>
  <tu-trigger position="top" auto-fit-position :unmount-on-close="false">
    <tu-button>Hover Me</tu-button>
    <template #content>
      <div class="demo-trigger-basic">This is trigger content.</div>
    </template>
  </tu-trigger>
  <tu-trigger trigger="click" :unmount-on-close="false">
    <tu-button>Click Me</tu-button>
    <template #content>
      <div class="demo-trigger-basic">This is trigger content.</div>
    </template>
  </tu-trigger>
  <tu-trigger trigger="focus">
    <tu-input placeholder="Focus" style="width: 100px; margin-left: 10px" />
    <template #content>
      <div class="demo-trigger-basic">This is trigger content.</div>
    </template>
  </tu-trigger>
</template>

<style>
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
