<template>
  <tu-trigger position="top" auto-fit-position :unmount-on-close="false">
    <span>Hover</span>
    <template #content>
      <div class="demo-basic">占位文字</div>
    </template>
  </tu-trigger>
</template>
<style>
.demo-basic {
  padding: 10px;
  width: 200px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
}
</style>