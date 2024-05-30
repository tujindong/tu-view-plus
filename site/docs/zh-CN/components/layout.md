# Layout 布局

页面的基础布局框架，常与组件嵌套使用，构建页面整体布局。

## 基础用法

:::demo src="../examples/layout/basic.vue" title="典型的页面布局。"

:::

## 自定义按钮

:::demo src="../examples/layout/custom-icon.vue" title="通过设置 Menu.Sider 的 trigger 属性，实现自定义收起按钮的图标。"

:::

## 自定义收起按钮

:::demo src="../examples/layout/collapsed.vue" title="设置 Menu.Sider 的hide-trigger属性为true后，Sider 内置的缩起按钮不会显示。此时可自定义收起按钮。"

:::

## 响应式侧边栏

:::demo src="../examples/layout/breakpoint.vue" title="左侧 Slider 可以结合 Menu 设置为展开/收起状态, 设置breakpoint可触发响应式收缩。"

:::

## 可伸缩侧边栏

:::demo src="../examples/layout/resize.vue" title="可以用鼠标进行拖拽放大缩小的侧边栏，需要用到的参数：resizeDirections。"

:::

## Layout API

### Layout Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| has-sider | 表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动 | ^[Boolean] | false |

### Layout-Header Slots

| 参数名 | 描述 |
| ------ | ---- |
| default | 内容 |

### Layout-Content Slots

| 参数名 | 描述 |
| ------ | ---- |
| default | 内容 |

### Layout-Footer Slots

| 参数名 | 描述 |
| ------ | ---- |
| default | 内容 |

### Layout-Sider Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| theme | 主题颜色 | ^[String]`'dark' \| 'light'` | light |
| collapsed | 当前收起状态 | ^[Boolean] | - |
| default-collapsed | 默认的收起状态 | ^[Boolean] | false |
| collapsible | 是否可收起 | ^[Boolean] | false |
| width | 宽度 | ^[Boolean] | 200 |
| collapsed-width | 收缩宽度 | ^[Boolean] | 48 |
| reverse-arrow | 翻转折叠提示箭头的方向，当 Sider 在右边时可以使用 | ^[Boolean] | false |
| breakpoint | 触发响应式布局的断点 | ^[String]`'xxl' \| 'xl' \| 'lg' \| 'md' \| 'sm' \| 'xs'` | - |
| resize-directions | 可以用 ResizeBox 替换原生的 `aside` 标签，这个参数即 ResizeBox的 `directions` 参数。 | ^[Array]`<'left' \| 'right' \| 'top' \| 'bottom'>[]` | - |
| hide-trigger | 隐藏底部折叠触发器 | ^[Boolean] | false |

### Layout-Sider Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| collapse | 展开-收起时的事件，有点击 trigger 以及响应式反馈两种方式可以触发 | ^[Function]`(collapsed: boolean, type: 'clickTrigger'\|'responsive') => void` |
| breakpoint | 触发响应式布局断点时的事件 | ^[Function]`(collapsed: boolean) => void` |

### Layout-Sider Slots

| 参数名 | 描述 |
| ------ | ---- |
| trigger | 自定义底部折叠触发器 |
