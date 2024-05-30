<template>
  <tu-breadcrumb class="mb-2" :routes="routes" />

  <br />

  <tu-breadcrumb :routes="routes">
    <template #item-render="{ route, paths }">
      <tu-link :href="paths.join('/')">
        {{ route.label }}
      </tu-link>
    </template>
  </tu-breadcrumb>
</template>

<script lang="ts" setup>
const routes = [
  {
    path: '/',
    label: '主页'
  },
  {
    path: '/channel',
    label: '频道'
  },
  {
    path: '/news',
    label: '新闻'
  }
];
</script>
