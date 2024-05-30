<template>
  <tu-breadcrumb class="mb-2" :max-count="2">
    <tu-breadcrumb-item>主页</tu-breadcrumb-item>
    <tu-breadcrumb-item>分类</tu-breadcrumb-item>
    <tu-breadcrumb-item>频道</tu-breadcrumb-item>
    <tu-breadcrumb-item>新闻</tu-breadcrumb-item>
    <tu-breadcrumb-item>文章</tu-breadcrumb-item>
  </tu-breadcrumb>

  <br />

  <tu-breadcrumb class="mb-2" :max-count="2">
    <template #more-icon>
      <tu-tooltip content="分类 / 频道 / 新闻">
        <tu-icon><MoreFilled /></tu-icon>
      </tu-tooltip>
    </template>
    <tu-breadcrumb-item>主页</tu-breadcrumb-item>
    <tu-breadcrumb-item>分类</tu-breadcrumb-item>
    <tu-breadcrumb-item>频道</tu-breadcrumb-item>
    <tu-breadcrumb-item>新闻</tu-breadcrumb-item>
    <tu-breadcrumb-item>文章</tu-breadcrumb-item>
  </tu-breadcrumb>
</template>

<script lang="ts" setup>
import { MoreFilled } from '@tu-view-plus/icons-vue';
</script>
