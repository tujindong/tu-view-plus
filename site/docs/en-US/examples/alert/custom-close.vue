<template>
  <tu-alert title="渭城朝雨浥轻尘，客舍青青柳色新。" :closable="false" />
  <tu-alert
    title="渭城朝雨浥轻尘，客舍青青柳色新。"
    close-text="关闭"
    @close="close"
  />
</template>

<script lang="ts" setup>
const close = () => {
  console.log('close');
};
</script>

<style>
.tu-alert:not(:last-child) {
  margin-bottom: 20px;
}
</style>