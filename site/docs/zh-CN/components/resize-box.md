# ResizeBox 伸缩框

伸缩框组件。

## 基础用法

:::demo src="../examples/resize-box/basic.vue" title="通过设置 directions，可以指定四条边中的哪几条边可以进行伸缩。"

:::

## 受控的宽高

:::demo src="../examples/resize-box/control.vue" title="ResizeBox 的 width 和 height 都支持 v-model。"

:::

## ResizeBox API

### ResizeBox Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| width / v-model | 宽度 | ^[Number] | - |
| height / v-model | 高度 | ^[Number] | - |
| component | 伸缩框的 html 标签 | ^[String] | div |
| directions | 可以进行伸缩的边，有上、下、左、右可以使用 | ^[Array]`'left' \| 'right' \| 'top' \| 'bottom')[]`| ['right'] |

### ResizeBox Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| moving-start | 拖拽开始时触发 | ^[Function]`(ev: MouseEvent ) => void` |
| moving | 拖拽时触发 | ^[Function]`( size: { width: number; height: number; }, ev: MouseEvent) => void`|
| moving-end | 拖拽结束时触发 | ^[Function]`((ev: MouseEvent ) => void)` |
