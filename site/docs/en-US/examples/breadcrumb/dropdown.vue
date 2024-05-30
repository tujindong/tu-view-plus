<template>
  <tu-breadcrumb class="mb-2" :routes="routes" />

  <br />

  <tu-breadcrumb>
    <tu-breadcrumb-item>Home</tu-breadcrumb-item>
    <tu-breadcrumb-item :droplist="droplist">Channel</tu-breadcrumb-item>
    <tu-breadcrumb-item>News</tu-breadcrumb-item>
  </tu-breadcrumb>
</template>

<script lang="ts" setup>
const routes = [
  {
    path: '/',
    label: 'Home'
  },
  {
    path: '/channel',
    label: 'Channel',
    children: [
      {
        path: '/live',
        label: 'Live'
      },
      {
        path: '/video',
        label: 'Video'
      }
    ]
  },
  {
    path: '/news',
    label: 'News'
  }
];

const droplist = [
  {
    path: '/live',
    label: 'Live'
  },
  {
    path: '/video',
    label: 'Video'
  }
];
</script>
