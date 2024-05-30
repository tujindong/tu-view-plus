<template>
  <tu-breadcrumb class="mb-2" :routes="routes" />

  <br />

  <tu-breadcrumb>
    <tu-breadcrumb-item>主页</tu-breadcrumb-item>
    <tu-breadcrumb-item :droplist="droplist">频道</tu-breadcrumb-item>
    <tu-breadcrumb-item>新闻</tu-breadcrumb-item>
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
    label: '频道',
    children: [
      {
        path: '/live',
        label: '直播'
      },
      {
        path: '/video',
        label: '视频'
      }
    ]
  },
  {
    path: '/news',
    label: '新闻'
  }
];

const droplist = [
  {
    path: '/live',
    label: '直播'
  },
  {
    path: '/video',
    label: '视频'
  }
];
</script>
