<div align="center">
  <a href="https://tujindong.github.io/tu-view-plus" target="_blank">
    <img alt="Tu View Plus Logo" width="100" src="https://github.com/tujindong/tu-view-plus/raw/main/site/docs/assets/logo.svg"/>
  </a>
</div>

<div align="center">
  <h1>Tu View Plus</h1>
</div>

<div align="center">

A vue 3.x neumorphic UI design for web. Written in typeScript with composition Api.

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/tujindong/tu-view-plus/blob/main/LICENSE)

</div>

<div align="center">

English | [简体中文](./README.zh-CN.md)

</div>

# Features

Tu View for vue 2.x is [here](https://github.com/tujindong/tu-view)!

## Comprehensive

With more than 20 crafted components that you can use out of the box(more components are under development..).

## Customizable theme

Extensive theme settings can be customized to build your own theme:

* [Theme Settings](https://tujindong.github.io/tu-view-plus/zh-CN/guide/theme.html)

## TypeScript friendly

All components are written in TypeScript so it's type friendly.

# Installation

Available as an [npm package](https://www.npmjs.com/package/tu-view-plus)

```bash
// with npm
npm install tu-view-plus

// with yarn
yarn add tu-view-plus
```

# Examples

```typescript
import { createApp } from 'vue'
import App from './App.vue';
import TuViewPlus from 'tu-view-plus';

const app = createApp(App);
app.use(TuViewPlus);
app.mount('#app');
```

## Development

1. Use `pnpm install -g` to install basic packages such as `lerna` and `yarn`.

2. Use `yarn install` to install the dependencies of each package in `workspaces` (If you encounter a `YN0018` error, you can use `YARN_CHECKSUM_BEHAVIOR=update yarn` to install).

3. Use `pnpm run init` to initialize the project.

# License

[MIT 协议](./LICENSE)
