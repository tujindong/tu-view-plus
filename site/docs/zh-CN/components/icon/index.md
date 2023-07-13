# Icon 图标

Tu view plus 提供一套通用的图标设置。

## 使用方法

- 如果你想和用例一样直接使用，你需要全局注册组件，才能够直接在项目里使用。
- 若想查看所有的组件，请访问 [@tu-view-plus/icons-vue](https://github.com/tujindong/tu-view-plus-icons)，或者 SVG [图标集合](#icon-collection)。

## 安装图标

```shell
# NPM
$ npm install @tu-view-plus/icons-vue
# Yarn
$ yarn add @tu-view-plus/icons-vue
# pnpm
$ pnpm install @tu-view-plus/icons-vue
```

### 引入所有图标

从 @tu-view-plus/icons-vue 引入所有图标并全局注册。

```ts
// main.ts
import * as TuViewPlusIconsVue from '@tu-view-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(TuViewPlusIconsVue)) {
  app.component(key, component)
}
```

### 基础用法

:::demo src="./basic.vue" title="可以使用 tu-icon 为svg提供属性。"

:::

### 附带描述信息

:::demo src="./description.vue" title="利用 prefix 和 suffix 可分别设置图标的前置和后置内容。"

:::

## 图标集合{#icon-collection}

<icon-list />
