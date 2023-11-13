<template>
  <tu-descriptions title="Customized style list" :column="3" border>
    <tu-descriptions-item
      label="Username"
      label-align="right"
      align="center"
      label-class-name="my-label"
      class-name="my-content"
      width="150px"
    >
      Tom
    </tu-descriptions-item>
    <tu-descriptions-item label="Telephone" label-align="right" align="center">
      18100000000
    </tu-descriptions-item>
    <tu-descriptions-item label="Place" label-align="right" align="center">
      Hefei
    </tu-descriptions-item>
    <tu-descriptions-item label="Remarks" label-align="right" align="center">
      <tu-tag size="medium">School</tu-tag>
    </tu-descriptions-item>
    <tu-descriptions-item label="Address" label-align="right" align="center">
      High tech District, Hefei, Anhui Province
    </tu-descriptions-item>
  </tu-descriptions>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
</script>

<style lang="scss" scoped>
:deep(.my-label) {
  background: #f0f9eb !important;
}
:deep(.my-content) {
  background: #fef0f0;
}
</style>
