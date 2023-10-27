<div align="center">
  <a href="https://tujindong.github.io/tu-view-plus" target="_blank">
    <img alt="Tu View Plus Logo" width="100" src="https://github.com/tujindong/tu-view-plus/raw/main/site/docs/assets/logo.svg"/>
  </a>
</div>

<div align="center">
  <h1>Tu View Plus</h1>
</div>

<div align="center">

一款 vue 3.x 新拟物风格的组件库。使用 typescript 及组合式 Api 编写。

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/tujindong/tu-view-plus/blob/main/LICENSE)

</div>

<div align="center">

English | [简体中文](./README.zh-CN.md)

</div>

# 特性

vue 2.x 版本 [Tu View](https://github.com/tujindong/tu-view)

## 全面

20多个开箱即用的高质量组件（更多组件正在开发中..）, 可以覆盖绝大部份的业务场景。

## 主题配置

支持全局以及组件级别的主题配置:

* [Theme Settings](https://tujindong.github.io/tu-view-plus/zh-CN/guide/theme.html)

## TypeScript 友好

所有组件都是用 TypeScript 编写的，所以天然的类型友好。

# 安装

[npm package](https://www.npmjs.com/package/tu-view-plus)

```bash
// with npm
npm install tu-view-plus

// with yarn
yarn add tu-view-plus
```

# 示例

```typescript
import { createApp } from 'vue'
import App from './App.vue';
import TuViewPlus from 'tu-view-plus';

const app = createApp(App);
app.use(TuViewPlus);
app.mount('#app');
```

## 开发

1. 使用 `pnpm install -g` 安装 `lerna` 和 `yarn` 等基础包。

2. 使用 `yarn install` 安装 `workspaces` 中各个包的依赖（如果遇到 `YN0018` 错误，可以使用 `YARN_CHECKSUM_BEHAVIOR=update yarn` 进行安装）。

3. 使用 `pnpm run dev` 初始化项目。

# 协议

[MIT 协议](./LICENSE)
