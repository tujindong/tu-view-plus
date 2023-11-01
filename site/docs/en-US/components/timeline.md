# Timeline

Display information content in chronological or reverse order.

## Basic usage

:::demo src="../examples/timeline/basic.vue" title="Timeline basic usage"

:::

## Custom dot

:::demo src="../examples/timeline/custom-dot.vue" title="When the dotType is solid or hollow, can add colors to dot by setting this attribute dotColor. At the same time, you can directly pass in DOM node to customize node styles through slot#dot. Priority is higher than dotColor and dotType"

:::

## Custom axis

:::demo src="../examples/timeline/custom-dot-line.vue" title="Timeline provide three different axis: solid、dashed and dotted.default is solid."

:::

## Pending

:::demo src="../examples/timeline/ghost-dot.vue" title="When the task state is happening and the recording is still in progress, ghost nodes can be used to represent the current time node."

:::

## Custom pending

:::demo src="../examples/timeline/custom-ghost-dot.vue" title="Timeline pivot point can be customized through slot#pending-dot."

:::

## Label Position

:::demo src="../examples/timeline/label-position.vue" title="The position of the label text can be set by labelPosition."

:::

## Vertical

:::demo src="../examples/timeline/vertical-timeline.vue" title="The vertical time axis."

:::

## Horizontal

:::demo src="../examples/timeline/horizontal-timeline.vue" title="The horizontal time axis."

:::

## Custom Label

:::demo src="../examples/timeline/custom-label.vue" title="You can customize labels through the label slot"

:::

## Timeline API

### Timeline Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| reverse | whether reverse order | ^[Boolean] | false |
| direction | timeline direction | ^[String]`'horizontal' \| 'vertical'`| vertical |
| mode | the display mode of Timeline | ^[String]`'left' \| 'right' \| 'top' \| 'bottom'\| 'alternate'`| left |
| pending | Whether to display ghost nodes. When set to true, only ghost nodes are displayed. When passed to ReactNode, it will be displayed as node content. | ^[Boolean] ^[String] | - |
| label-position | position of label text | ^[String]`'relative' \| 'same'`| same |

### Timeline Slots

| Name | Description |
| ------ | ---- |
| dot | custom dot | - |

<!-- Timeline-Item -->
## Timeline-Item API

### Timeline-Item Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| dot-color | dot color | ^[String] | - |
| dot-type | dot type | ^[String]`'default' \| 'hollow' \| 'solid'`| default |
| line-type | line type | ^[String]`'solid' \| 'dashed' \| 'dotted'`| solid |
| line-color | line Color | ^[String] | - |
| label | label text | ^[String] | - |
| position | item position | ^[String]`'left' \| 'right' \| 'top' \| 'bottom'` | - |

### Timeline-Item Slots

| Name | Description |
| ------ | ---- |
| dot | custom dot | - |
| label | custom label | - |
