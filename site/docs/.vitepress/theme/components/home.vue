<template>
  <div class="homepage">
    <h1 class="title">Tu View Plus</h1>
    <h2 class="tagline">一款有触觉的 Vue3 组件库</h2>
    <div class="action">
      <tu-button @click="start">开始</tu-button>
      <tu-button @click="linkGithub">在Github上查看</tu-button>
    </div>
    <tu-row :gutter="20">
      <tu-col :span="8"> </tu-col>
      <tu-col :span="8"> </tu-col>
      <tu-col :span="8"> </tu-col>
    </tu-row>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vitepress';
import { useLang } from '../../composables/lang';

const router = useRouter();
const lang = useLang();

const start = () => {
  router.go(`/${lang.value}/guide/`);
};

const linkGithub = () => {
  window.open('https://github.com/tujindong/tu-view-plus');
};
</script>

<style lang="scss" scoped>
.homepage {
  text-align: center;

  .title {
    background: #fff;
    text-shadow: #9b9fa8 1px 2px 1px;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    font-size: 4rem;
    font-weight: 500;
  }

  .tagline {
    background: #fff;
    text-shadow: #9b9fa8 1px 2px 1px;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    font-size: 1.4rem;
    font-weight: 500;
  }

  .action {
    padding-top: 24px;
  }
}
</style>