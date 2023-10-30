<template>
  <div class="homepage">
    <h1 class="title">Tu View Plus</h1>
    <h2 class="tagline">一款有触觉的 Vue3 组件库</h2>
    <div class="action">
      <tu-button @click="start">开始</tu-button>
      <tu-button @click="linkGithub">在Github上查看</tu-button>
    </div>
    <div class="container">
      <tu-row :gutter="20">
        <tu-col :span="8">
          <tu-card>
            <div class="container__icon">💡</div>
            <div class="container__title">Vue3组件库</div>
            <div class="container__details">基于vite打包和TypeScript开发。</div>
          </tu-card>
        </tu-col>
        <tu-col :span="8">
          <tu-card>
            <div class="container__icon">📦</div>
            <div class="container__title">拟物化</div>
            <div class="container__details">赋予界面UI真实触感。</div>
          </tu-card>
        </tu-col>
        <tu-col :span="8">
          <tu-card>
            <div class="container__icon">🛠️</div>
            <div class="container__title">多主题</div>
            <div class="container__details">多主题动态配置。</div>
          </tu-card>
        </tu-col>
      </tu-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vitepress';

const router = useRouter();

const start = () => {
  router.go(`/tu-view-plus/en-US/guide/quickstart`);
};

const linkGithub = () => {
  window.open('https://github.com/tujindong/tu-view-plus');
};
</script>

<style lang="scss" scoped>
.homepage {
  text-align: center;
  padding-top: 80px;

  .title {
    background: var(--tu-text-shadow-bg);
    text-shadow: var(--tu-text-shadow) 1px 2px 1px;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    font-size: 4rem;
    font-weight: 500;
  }

  .tagline {
    background: var(--tu-text-shadow-bg);
    text-shadow: var(--tu-text-shadow) 1px 1px 1px;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    font-size: 1.6rem;
    font-weight: 500;
  }

  .action {
    padding-top: 24px;
  }

  .container {
    margin: 60px auto 0;
    max-width: 1152px;

    &__icon {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      border-radius: 6px;
      background-color: var(--vp-c-bg-soft-down);
      width: 48px;
      height: 48px;
      font-size: 24px;
      transition: background-color 0.25s;
    }

    &__title {
      background: var(--tu-text-shadow-bg);
      text-shadow: var(--tu-text-shadow) 1px 1px 1px;
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
      font-size: 1.4rem;
      font-weight: 500;
      text-align: left;
    }

    &__details {
      background: var(--tu-text-shadow-bg);
      text-shadow: var(--tu-text-shadow) 1px 1px 1px;
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
      font-size: 1rem;
      font-weight: 500;
      text-align: left;
      margin-top: 30px;
    }
  }
}
</style>
