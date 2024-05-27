# ResizeBox

Telescopic frame components.

## Basic usage

:::demo src="../examples/resize-box/basic.vue" title="Basic usage of ResizeBox. By setting directions, you can specify which of the four sides can be stretched."

:::

## V-model

:::demo src="../examples/resize-box/control.vue" title="Both width and height of ResizeBox support v-model."

:::

## ResizeBox API

### ResizeBox Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| width / v-model | Width | ^[Number] | - |
| height / v-model | Height | ^[Number] | - |
| component | The html tag of the telescopic box | ^[String] | div |
| directions | Can be stretched side, there are up, down, left and right can be used | ^[Array]`'left' \| 'right' \| 'top' \| 'bottom')[]`| ['right'] |

### ResizeBox Events

| Name | Description | Type |
| ------ | ---- | ---- |
| moving-start | Triggered when dragging starts | ^[Function]`(ev: MouseEvent ) => void` |
| moving | Triggered when dragging | ^[Function]`( size: { width: number; height: number; }, ev: MouseEvent) => void`|
| moving-end | Triggered when the drag ends | ^[Function]`((ev: MouseEvent ) => void)` |
