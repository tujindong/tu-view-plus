<template>
  <tu-space size="large">
    <tu-avatar>A</tu-avatar>
    <tu-avatar :style="{ backgroundColor: '#FFBB66' }">
      <tu-icon>
        <User />
      </tu-icon>
    </tu-avatar>
    <tu-avatar style="background: #ff44aa">tu</tu-avatar>
    <tu-avatar :style="{ backgroundColor: '#00d0b6' }">viewPlus</tu-avatar>
    <tu-avatar>
      <img
        alt="avatar"
        src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
      />
    </tu-avatar>
  </tu-space>
</template>

<script lang="ts" setup>
import { User } from '@tu-view-plus/icons-vue';
</script>

<style lang="scss" scoped></style>
