<template>
  <tu-image
    width="200px"
    :src="src"
    :title="title"
    :description="description"
  />
  <tu-image
    width="200px"
    :src="src"
    :title="title"
    :description="description"
    footerPosition="outer"
    style="margin-left: 67px; vertical-align: top"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const src = ref(
  'https://cdn.pixabay.com/photo/2020/04/04/03/42/paperwork-5000691_640.png'
);
const title = ref('Keyboard and Mouse');
const description = ref('Present by Tu View Plus');
</script>
