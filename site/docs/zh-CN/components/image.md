# Image 图片

展示和预览图片。

## 基础用法

:::demo src="../examples/image/basic.vue" title="需要查看图片的时候，简单的设置 src 属性，就能获得一个有预览图片功能的组件。"

:::

## 显示Caption

:::demo src="../examples/image/caption.vue" title="通过设置 title 和 description 可以将图片的标题和描述显示在图片内部或者底部，显示的位置通过 footerPosition 控制。"

:::

## 额外操作

:::demo src="../examples/image/extra-action.vue" title="组件提供了具名插槽 extra 供用户在页脚定制额外的内容。"

:::

## 错误状态

:::demo src="../examples/image/error.vue" title="当加载图片失败的时候显示的内容。"

:::

## 加载状态

:::demo src="../examples/image/loading.vue" title="默认情况下，加载效果是不显示的，可通过设置 showLoader 为 true 显示默认加载效果。如果默认加载效果不符合需求, 还可以通过 具名插槽 loader 自行设置加载样式。"

:::

## 逐渐加载

:::demo src="../examples/image/progressive-loading.vue" title="大图可通过给 loader 传递一个小一些的图片，让其在原图未被加载成功时显示，以此来模拟渐进加载。"

:::

## 自定义预览操作栏

:::demo src="../examples/image/custom-preview-actions.vue" title="通过设置 actionsLayout 可以调整预览操作栏中功能按钮的顺序，同时可以过滤功能按钮，只有在 actionsLayout 中的按钮才会出现。此外，预览组件 preview 提供了 actions 插槽，支持自定义额外的操作项，同时还提供了操作项组件 preview-action。"

:::

## 多图预览

:::demo src="../examples/image/preview-group.vue" title="用 <preview-group> 包裹 <image> 组件即可进行多图预览。"

:::

## 单独使用预览组件

:::demo src="../examples/image/component-preview.vue" title="preview 可单独使用，需要手动控制 visible。"

:::

## 单独使用多图预览组件

:::demo src="../examples/image/component-preview-group.vue" title="<preview-group> 可单独使用，需控制 visible 。在图片的展示上分为两种场景，一是通过 defaultCurrent 指定第一张展示的图片；二是控制 current 来决定当前显示的是第几张图片。"

:::

## 挂载节点

:::demo src="../examples/image/preview-popup-container.vue" title="可以通过 popupContainer 指定预览挂载的父级节点。"

:::

## Image API

### Image Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| src | 图片获取地址 | ^[String] | - |
| width | 图片显示宽度 | ^[String] ^[Number] | - |
| height | 图片显示高度 | ^[String] ^[Number] | - |
| title | 标题 | ^[String] | - |
| description | 描述，将显示在底部，如果 alt 没有值，则会将其设置给 alt | ^[String] | - |
| fit | 确定图片如何适应容器框 | ^[String]`'contain' \| 'cover' \| 'fill' \| 'none' \| 'scale-down'` | - |
| alt | 图片的文字描述 | ^[String] | - |
| hide-footer | 是否隐藏 footer | ^[Boolean] ^[String]`'never'` | false |
| footer-position | 底部显示的位置 | ^[String]`'inner' \| 'outer'` | inner |
| show-loader | 是否显示加载中效果 | ^[Boolean] | false |
| preview | 是否开启预览 | ^[Boolean] | true |
| preview-visible (v-model) | 控制预览的打开状态，可与 previewVisibleChange 配合使用 | ^[Boolean]  | - |
| default-preview-visible | 预览的默认打开状态 | ^[Boolean]  | false |
| preview-props | 预览的配置项（所有选项都是可选的） ImagePreviewProps | ^[ImagePreviewProps] | - |
| footer-class | 底部显示区域的类名 | ^[String] ^[Array] ^[Object] | - |

### Image Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| preview-visible-change | 预览的打开和关闭事件 | ^[Function]`(visible: boolean) => void` |

### Image Slots

| 参数名 | 描述 |
| ------ | ---- |
| error | 自定义错误状态内容 |
| error-icon | 自定义错误状态的图标 |
| loader | 自定义加载状态效果 |
| extra | 底部额外内容 |

### Preview Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| src | 图片获取地址 | ^[String] | - |
| visible (v-model) | 是否可见 | ^[Boolean] | - |
| default-visible | 默认是否可见，非受控 | ^[Boolean] | false |
| mask-closable | 点击 mask 是否触发关闭 | ^[Boolean] | true |
| closable | 是否显示关闭按钮 | ^[Boolean] | true |
| actions-layout | 操作项的布局 | ^[Array]`<string>` | [ 'fullScreen', 'rotateRight', 'rotateLeft', 'zoomIn', 'zoomOut', 'originalSize'] |
| popup-container | 设置弹出框的挂载点，同 teleport 的 to，初始值是 document.body | ^[HTMLElement ] ^[String] | - |
| esc-to-close | 是否支持 ESC 键关闭预览 | ^[Boolean] | true |
| wheel-zoom | 是否开启滚轮缩放 | ^[Boolean] | true |
| keyboard | 是否开启键盘控制 | ^[Boolean] | true |
| default-scale | 默认缩放比 | ^[Number] | 1 |
| zoom-rate | 缩放速率，仅对滚动缩放生效 | ^[Number] | 1.1 |

### Preview Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| close | 关闭事件 | - |

### Preview Slots

| 参数名 | 描述 |
| ------ | ---- |
| actions | 自定义额外的操作项 |

### Preview Group Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| src-list | 图片列表（设置了本属性之后，将不再收集 a-image 子组件的图片信息） | ^[Array]`<string>` | - |
| current (v-model) | 当前展示的图片的下标 | ^[Number] | - |
| default-current | 第一张展示的图片的下标 | ^[Number] | 0 |
| infinite | 是否无限循环 | ^[Boolean] | false |
| visible (v-model) | 是否可见，受控属性 | ^[Boolean] | - |
| default-visible | 默认是否可见，非受控 | ^[Boolean] | false |
| mask-closable | 点击 mask 是否触发关闭 | ^[Boolean] | true |
| closable | 是否显示关闭按钮 | ^[Boolean] | true |
| actions-layout | 操作项的布局 | ^[Array]`<string>` | [ 'fullScreen', 'rotateRight', 'rotateLeft', 'zoomIn', 'zoomOut', 'originalSize'] |
| popup-container | 设置弹出框的挂载点，同 teleport 的 to，初始值是 document.body | ^[HTMLElement ] ^[String] | - |

### Preview Group Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| change | 切换图片 | - |
| visible-change | 预览的打开和关闭 | - |

### Preview Group Slots

| 参数名 | 描述 |
| ------ | ---- |
| actions | 自定义额外的操作项 |

### Preview Action Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| name | 名称 | ^[String] | - |
| disabled | 是否禁用 | ^[Boolean] | false |

## FAQ

### 关于 preview 的属性说明

1.键盘快捷键 keyboard 设置此属性为 true 后，将根据 actions-layout 操作项来启用相应的快捷键操作。
 - esc：关闭预览
 - left: 切换至上一张图片
 - right: 切换至下一张图片
 - up: 放大图片
 - down: 缩小图片
 - space: 还原至原始大小

2.默认缩放比例 defaultScale 此属性定义了默认的图片缩放比例。例如，当设置为 1.5 时，图片将默认放大到原始大小的 1.5 倍。

3.滚动缩放速率 zoomSate 属性控制了在滚动操作时图片的缩放速率。以 1.3 为例，每次滚动操作都会使图片放大或缩小 1.3 倍。
