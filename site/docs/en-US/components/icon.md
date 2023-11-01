# Icon

Tu view plus provides a set of common icons.

## Icon Usage

- If you want to use directly like the example, you need to globally register the components before using it.
- If you want to see all available SVG icons please check [@tu-view-plus/icons-vue](https://github.com/tujindong/tu-view-plus-icons)，or the source [Icon Collection](#icon-collection)。

## Installation

```shell
# NPM
$ npm install @tu-view-plus/icons-vue
# Yarn
$ yarn add @tu-view-plus/icons-vue
# pnpm
$ pnpm install @tu-view-plus/icons-vue
```

### Using packaging manager

You need import all icons from @tu-view-plus/icons-vue and register them globally.

```ts
// main.ts
import * as TuViewPlusIconsVue from '@tu-view-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(TuViewPlusIconsVue)) {
  app.component(key, component)
}
```

### Basic Usage

:::demo src="../examples/icon/basic.vue" title="tu-icon provides extra attributes for raw SVG icon."

:::

### Description Icon

:::demo src="../examples/icon/description.vue" title="Use prefix and suffix to set the pre and post content of icons"

:::

## Icon Collection {#icon-collection}

<icon-list />
