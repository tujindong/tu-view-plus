<template>
  <tu-breadcrumb class="mb-2" :max-count="2">
    <tu-breadcrumb-item>Home</tu-breadcrumb-item>
    <tu-breadcrumb-item>Categorize</tu-breadcrumb-item>
    <tu-breadcrumb-item>Channel</tu-breadcrumb-item>
    <tu-breadcrumb-item>News</tu-breadcrumb-item>
    <tu-breadcrumb-item>Post</tu-breadcrumb-item>
  </tu-breadcrumb>

  <br />

  <tu-breadcrumb class="mb-2" :max-count="2">
    <template #more-icon>
      <tu-tooltip content="Categorize / Channel / News">
        <tu-icon><MoreFilled /></tu-icon>
      </tu-tooltip>
    </template>
    <tu-breadcrumb-item>Home</tu-breadcrumb-item>
    <tu-breadcrumb-item>Categorize</tu-breadcrumb-item>
    <tu-breadcrumb-item>Channel</tu-breadcrumb-item>
    <tu-breadcrumb-item>News</tu-breadcrumb-item>
    <tu-breadcrumb-item>Post</tu-breadcrumb-item>
  </tu-breadcrumb>
</template>

<script lang="ts" setup>
import { MoreFilled } from '@tu-view-plus/icons-vue';
</script>
