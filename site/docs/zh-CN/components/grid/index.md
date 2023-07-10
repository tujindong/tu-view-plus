# Grid 栅格

通过基础的 24 分栏，迅速简便地创建布局。

:::tip
组件默认采用了 flex 布局，无需手动设置 type="flex"。

请注意父容器避免使用 inline 相关样式，会导致组件宽度不能撑满。
:::

## 基础布局

:::demo src="./basic.vue" title="使用单一分栏创建基础的栅格布局。"

通过 tu-row 和 tu-col 组件，并通过 tu-col 组件的 `span` 属性来自由地组合布局。

:::

## 分栏间隔

:::demo src="./spacing.vue" title="子元素分栏之间存在间隔。"

tu-row 组件提供 `gutter` 属性来指定每一栏之间的间隔，默认间隔为 0。

:::

## 混合布局

:::demo src="./hybrid.vue" title="通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。"

tu-row 组件提供 `gutter` 属性来指定每一栏之间的间隔，默认间隔为 0。

:::

## 分栏偏移

:::demo src="./offset.vue" title="支持偏移指定的栏数。"

通过制定 col 组件的 `offset` 属性可以指定分栏偏移的栏数。

:::

## 对齐方式

:::demo src="./alignment.vue" title="默认使用 flex 布局来对分栏进行灵活的对齐。"

可通过 justify 属性来指定 `start`, `center`, `end`, `space-between`, `space-around` 其中的值来定义子元素的排版方式。

:::

## 响应式布局

:::demo src="./responsive.vue" title="预设了五个响应尺寸：xs、sm、md、lg 和 xl。"

:::

## Row API

### Row Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| gutter | 栅格间隔 | ^[Number] | 0 |
| justify | flex 布局下的水平排列方式 | ^[String]`'start' \| 'end' \| 'center' \| 'space-around'\|'space-between' \| 'space-evenly'` | start |
| align | flex 布局下的垂直排列方式 | ^[String]`'top' \| 'middle' \| 'bottom'` | top |
| tag | 自定义元素标签 | ^[String] | div |

### Row Slots

| 参数名 | 描述 | 类型 |
| ------ | ---- | ---- |
| default | 自定义内容 | Col |

## Col API

### Col Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| span | 栅格占据的列数 | ^[Number] | 24 |
| offset | 栅格左侧的间隔格数 | ^[Number] | 0 |
| push | 栅格向右移动格数 | ^[Number] | 0 |
| pull | 栅格向左移动格数 | ^[Number] | 0 |
| xs | `<768px` 响应式栅格数或者栅格属性对象 | ^[Number] ^[Object]`{span?: number, offset?: number, pull?: number, push?: number}` | - |
| sm | `≥768px` 响应式栅格数或者栅格属性对象 | ^[Number] ^[Object]`{span?: number, offset?: number, pull?: number, push?: number}` | - |
| md | `≥992px` 响应式栅格数或者栅格属性对象 | ^[Number] ^[Object]`{span?: number, offset?: number, pull?: number, push?: number}` | - |
| lg | `≥1200px` 响应式栅格数或者栅格属性对象 | ^[Number] ^[Object]`{span?: number, offset?: number, pull?: number, push?: number}` | - |
| xl | `≥1920px` 响应式栅格数或者栅格属性对象 | ^[Number] ^[Object]`{span?: number, offset?: number, pull?: number, push?: number}` | - |
| tag | 自定义元素标签 | ^[String] | div |

### Col Slots

| 参数名 | 描述 | 类型 |
| ------ | ---- | ---- |
| default | 自定义内容 | Col |
