<template>
  <tu-select
    placeholder="请选择"
    :options="options"
    :virtual-list-props="{ height: 200 }"
  />
</template>

<script lang="ts" setup>
const options = Array(1000)
  .fill(null)
  .map((_, index) => `选项 ${index}`);
</script>
