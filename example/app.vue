
<template>
  <tu-trigger position="top" auto-fit-position :unmount-on-close="false">
    <span>Hover Me</span>
    <template #content>
      <div class="demo-basic">占位文字</div>
    </template>
  </tu-trigger>
  <tu-trigger trigger="click" :unmount-on-close="false">
    <tu-button>Click Me</tu-button>
    <template #content>
      <div class="demo-basic">占位文字</div>
    </template>
  </tu-trigger>
  <tu-trigger trigger="focus">
    <input placeholder="Focus on me" />
    <template #content>
      <div class="demo-basic">占位文字</div>
    </template>
  </tu-trigger>
</template>
  
<script lang="ts" setup>
</script>
<style lang="scss">
</style>
  