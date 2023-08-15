<template>
  <tu-slider class="mr-2" :default-value="50" direction="vertical" />
  <tu-slider
    class="mr-2"
    :default-value="20"
    :show-ticks="true"
    :step="20"
    direction="vertical"
  />
  <tu-slider direction="vertical" :default-value="5" :max="15" :marks="marks" />
</template>
<script lang="ts" setup>
const marks = {
  5: '5km',
  10: '10km'
};
</script>

