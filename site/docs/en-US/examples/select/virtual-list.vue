<template>
  <tu-select
    placeholder="Please select"
    :options="options"
    :virtual-list-props="{ height: 200 }"
  />
</template>

<script lang="ts" setup>
const options = Array(1000)
  .fill(null)
  .map((_, index) => `Option ${index}`);
</script>
