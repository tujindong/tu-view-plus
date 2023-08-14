<template>
  <tu-slider class="mb-4" :default-value="5" :max="15" :marks="marks" />
</template>

<script lang="ts" setup>
const marks = {
  0: '0km',
  5: '5km',
  10: '10km',
  15: '15km'
};
</script>
