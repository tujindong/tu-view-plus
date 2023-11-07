<template>
  <tu-alert title="Alert title" :closable="false" />
  <tu-alert
    title="This is alert description."
    close-text="close"
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
