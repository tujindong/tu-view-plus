# Modal 模态框

## 何时使用

在当前页面打开一个浮层，承载相关操作。

## 引入方法

- 全局调用：组件为 app.config.globalProperties 添加了全局方法 $modal。 因此在 vue 实例中可以使用当前页面中的调用方式调用 Modal。
- 单独调用：此时调用方法为 TuModalBox(options)。 每个类型定义了各自的方法，如 TuModalBox.success(options)。
- 组件调用：导入Modal组件，通过Modal本身调用。

## 基础用法

:::demo src="../examples/modal/basic.vue" title="输入框的基本用法。"

:::

## 消息提示

:::demo src="../examples/modal/types.vue" title="有info, success, warning, error四种类型的消息提示，仅提供一个确认按钮用于关闭消息提示对话框。消息默认会默认开启 simple 和 hideCancel，如果想要取消可以再次设置。"

:::

## 嵌套的模态框

:::demo src="../examples/modal/nested.vue" title="嵌套的模态框的基本用法。"

:::

## 异步关闭

:::demo src="../examples/modal/async.vue" title="可以通过 on-before-ok 实现异步关闭功能。"

:::

## 自适应宽度

:::demo src="../examples/modal/width.vue" title="设置 width 为 auto 可以让对话框自适应宽度"

:::

## 可拖动

:::demo src="../examples/modal/draggable.vue" title="开启 draggable 属性，允许用户拖动对话框。"

:::

## 全屏显示

:::demo src="../examples/modal/fullscreen.vue" title="开启 fullscreen 属性，可以让对话框占满整个容器。"

:::

## 不同尺寸

:::demo src="../examples/modal/size.vue" title="组件提供除了默认值 medium 以外的三种尺寸。"

额外的尺寸：large、small、mini，通过设置 size 属性来配置它们。

:::

## Modal API

### Modal Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| visible(v-model) | 对话框是否可见 | ^[Boolean] | - |
| default-visible | 对话框默认是否可见（非受控状态）| ^[Boolean] | false |
| width | 对话框的宽度，不设置的情况下会使用样式中的宽度值 | ^[Number] ^[String] | - |
| top | 对话框的距离顶部的高度，居中显示开启的情况下不生效| ^[Number] ^[String] | - |
| mask | 是否显示遮罩层 | ^[Boolean] | true |
| title | 标题 | ^[String] | - |
| title-align | 标题的水平对齐方向 | ^[String]`'start' \| 'center'` | center |
| align-center | 对话框是否居中显示 | ^[Boolean] | true |
| unmount-on-close | 关闭时是否卸载节点 | ^[Boolean] | false |
| mask-closable | 是否点击遮罩层可以关闭对话框 | ^[Boolean] | true |
| hide-cancel | 是否隐藏取消按钮| ^[Boolean] | false |
| simple | 是否开启简单模式 | ^[Boolean] | false |
| closable | 是否显示关闭按钮 | ^[Boolean] | true |
| ok-text | 确认按钮的内容 | ^[String] | - |
| cancel-text | 取消按钮的内容 | ^[String] | - |
| ok-loading | 确认按钮是否为加载中状态 | ^[Boolean] | false |
| ok-button-props | 确认按钮的Props | ^[ButtonProps] | - |
| cancel-button-props | 取消按钮的Props | ^[ButtonProps] | - |
| footer | 是否展示页脚部分 | ^[Boolean] | true |
| render-to-body | 对话框是否挂载在 body 元素下 | ^[Boolean] | true |
| popup-container | 弹出框的挂载容器| ^[String] ^[HTMLElement] | body |
| mask-style | 蒙层的样式 | ^[String] ^[Object]`CSSProperties \| CSSProperties[] \| string[]` | - |
| modal-class | 对话框的类名| ^[String] ^[Array] | - |
| modal-style | 对话框的样式| ^[String] ^[Object]`CSSProperties \| CSSProperties[] \| string[]` | - |
| on-before-ok | 触发 ok 事件前的回调函数。如果返回 false 则不会触发后续事件，也可使用 done 进行异步关闭。| ^[Function]`(done: (closed: boolean) => void) => void \| boolean \| Promise<void \| boolean>` | - |
| on-before-cancel | 触发 cancel 事件前的回调函数。如果返回 false 则不会触发后续事件。| ^[Function]`() => boolean` | - |
| esc-to-close | 是否支持 ESC 键关闭对话框 | ^[Boolean] | true |
| draggable | 是否支持拖动 | ^[Boolean] | false |
| fullscreen | 是否开启全屏 | ^[Boolean] | false |
| mask-animation-name | 遮罩层动画名字 | ^[String] | - |
| modal-animation-name | 对话框动画名字 | ^[String]  | - |
| body-class | 对话框内容部分的类名 | ^[String] ^[Array] | - |
| body-style | 对话框内容部分的样式 | ^[String] ^[Object]`CSSProperties \| CSSProperties[] \| string[]` | - |

### Modal Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| ok | 点击确定按钮时触发 | ^[Function]`(event: MouseEvent) => void` |
| cancel | 点击取消、关闭按钮时触发 | ^[Function]`(event: MouseEvent \| KeyboardEvent) => void` |
| open | 对话框打开后（动画结束）触发 | - |
| close | 对话框关闭后（动画结束）触发 | - |
| before-open | 对话框打开前触发 | - |
| before-close | 对话框关闭前触发 | - |

### Modal Slots

| 参数名 | 描述 |
| ------ | ---- |
| title | 标题 | - |
| footer | 页脚 | - |
