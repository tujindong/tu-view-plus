# Drawer 抽屉

触发命令后，从屏幕一侧滑出的抽屉式的面板。

## 引入方法

- 全局调用：组件为 app.config.globalProperties 添加了全局方法 $drawer。 因此在 vue 实例中可以使用当前页面中的调用方式调用 Drawer。
- 单独调用：此时调用方法为 TuDrawerBox(options)。 定义了打开抽屉的方法，如 TuDrawerBox.open(options)。
- 组件调用：导入 Drawer 组件，通过 Drawer 本身调用。

## 基础用法

:::demo src="../examples/drawer/basic.vue" title="输入框的基本用法。"

:::

## 弹出位置

:::demo src="../examples/drawer/position.vue" title="自定义位置，点击触发按钮抽屉从相应的位置滑出。"

:::

## 自定义节点

:::demo src="../examples/drawer/custom-node.vue" title="通过插槽自定义内容，或者设置相应属性来控制显示或隐藏。"

:::

## 嵌套抽屉

:::demo src="../examples/drawer/nested.vue" title="在抽屉内打开新的抽屉。"

:::

## 挂载位置

:::demo src="../examples/drawer/popup-container.vue" title="通过 popup-container 可以设置弹出层节点的挂载位置。"

:::

## 不同尺寸

:::demo src="../examples/drawer/size.vue" title="组件提供除了默认值 medium 以外的三种尺寸。额外的尺寸：large、small、mini，通过设置 size 属性来配置它们。"

:::

## Drawer API

### Drawer Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| v-model | 抽屉是否可见 | ^[Boolean] | false |
| default-visible | 抽屉默认是否可见（非受控模式）| ^[Boolean]  | false |
| placement | 抽屉放置的位置 | ^[String]`'top' \| 'right' \| 'bottom' \| 'left'`| right |
| title | 标题 | ^[String] | - |
| mask | 是否显示遮罩层 | ^[Boolean] | true |
| mask-closable | 点击遮罩层是否可以关闭 | ^[Boolean] | true |
| closable | 是否展示关闭按钮 | ^[Boolean] | true |
| ok-text | 确认按钮的内容 | ^[String] | - |
| cancel-text | 取消按钮的内容 | ^[String] | - |
| ok-loading | 确认按钮是否为加载中状态 | ^[Boolean] | false |
| ok-button-props | 确认按钮的Props | ^[ButtonProps] | - |
| cancel-button-props | 取消按钮的Props | ^[ButtonProps] | - |
| unmount-on-close | 关闭时是否卸载节点 | ^[Boolean] | false |
| width | 抽屉的宽度（仅在placement为right,left时可用）| ^[Number] ^[String] | 250 |
| height | 抽屉的高度（仅在placement为top,bottom时可用）| ^[Number] ^[String] | 250 |
| popup-container | 弹出框的挂载容器 | ^[String] ^[HTMLElement] | body |
| drawer-style | 抽屉的样式 | ^[String] ^[Object]`CSSProperties \| CSSProperties[] \| string[]` | - |
| on-before-ok|触发 ok 事件前的回调函数。如果返回 false 则不会触发后续事件，也可使用 done 进行异步关闭。| ^[Function]`(done: (closed: boolean) => void) => void \| boolean \| Promise<void \| boolean>` | - |
| on-before-cancel|触发 cancel 事件前的回调函数。如果返回 false 则不会触发后续事件。| ^[Function]`(done: (closed: boolean) => void) => void \| boolean \| Promise<void \| boolean>` | - |
| esc-to-close | 是否支持 ESC 键关闭抽屉 | ^[Boolean] | true |
| render-to-body | 抽屉是否挂载在 body 元素下| ^[Boolean] | true |
| header | 是否展示头部内容 | ^[Boolean] | true |
| footer | 是否展示底部内容 | ^[Boolean] | true |
| hide-cancel | 是否隐藏取消按钮 | ^[Boolean] | false |

### Drawer Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| ok | 点击确定按钮时触发 | ^[Function]`(event: MouseEvent) => void` |
| cancel | 点击取消、关闭按钮时触发 | ^[Function]`(event: MouseEvent \| KeyboardEvent) => void` |
| open | 抽屉打开后（动画结束）触发 | - |
| close | 抽屉关闭后（动画结束）触发 | - |
| before-open | 对话框打开前触发 | - |
| before-close | 对话框关闭前触发 | - |

### Modal Slots

| 参数名 | 描述 |
| ------ | ---- |
| header | 页眉 | - |
| title | 标题 | - |
| footer | 页脚 | - |
