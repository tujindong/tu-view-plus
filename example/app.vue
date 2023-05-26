<template>
  <div>
    <tu-button type="primary">123</tu-button>
    <br />
    <br />
    <tu-alert>我是alert</tu-alert>

    <br />
    <br />
    <br />
    <tu-icon class="is-loading" color="red" size="20">
      <Loading />
    </tu-icon>
    <br />
    <tu-icon>
      <template #prefix>
        <span>设置</span>
      </template>
      <Edit />
    </tu-icon>
  </div>
</template>

<script lang="ts" setup>
import { Edit, Loading } from '@tu-view-plus/icons-vue';
</script>