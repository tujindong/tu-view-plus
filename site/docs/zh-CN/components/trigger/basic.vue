<template>
  <tu-trigger position="top" auto-fit-position :unmount-on-close="false">
    <span>123</span>
    <tu-button>Hover</tu-button>
    <template #content>
      <div class="demo-basic">占位文字</div>
    </template>
  </tu-trigger>
</template>
<style>
.demo-basic {
  padding: 10px;
  width: 200px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
}
</style>