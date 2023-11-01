# Progress

Progress is used to show the progress of current operation, and inform the user the current status.

## Linear progress bar

:::demo src="../examples/progress/lineProgress.vue" title="Use percentage attribute to set the percentage. It is required and must be between 0-100. You can custom text format by setting format."

:::

## Internal percentage

:::demo src="../examples/progress/innerText.vue" title="In this case the percentage takes no additional space. stroke-width attribute decides the width of progress bar, and use text-inside attribute to put description inside the progress bar."

:::

## Custom color

:::demo src="../examples/progress/color.vue" title="You can use color attr to set the progress bar color. it accepts color string, function, or array."

:::

## Circular progress bar

:::demo src="../examples/progress/circle.vue" title="You can specify type attribute to circle to use circular progress bar, and use width attribute to change the size of circle."

:::

## Customized content

:::demo src="../examples/progress/custom.vue" title="Use default slot to add customized content."

:::

## Indeterminate progress

:::demo src="../examples/progress/animation.vue" title="Use indeterminate attribute to set indeterminate progress, with duration to control the animation duration."

:::

## Striped progress

:::demo src="../examples/progress/striped.vue" title="Use striped attribute to set striped progress. You can use striped-flow to get the stripes to flow, with duration to control the animation duration."

:::

## Sizes

:::demo src="../examples/progress/size.vue" title="you can use stroke width to set the width of the progress."

:::

## Progress API

### Progress Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| percentage | percentage (required) | ^[Number] | 0 |
| type | the type of progress bar | ^[line] ^[circle] ^[dashboard] | line |
| stroke-width | the width of progress bar | ^[Number] | 8 |
| text-inside | whether to place the percentage inside progress bar, only works when type is 'line' | ^[Boolean] | false |
| status | the current status of progress bar | ^[success] ^[exception] ^[warning] | - |
| indeterminate | set indeterminate progress | ^[Boolean] | false |
| duration | control the animation duration of indeterminate progress or striped flow progress | ^[Number] | 3 |
| color | background color of progress bar. Overrides status prop | ^[String] ^[Function]`(percentage: number) => string` ^[Array]`{ color: string; percentage: number }[]`  | - |
| width | the canvas width of circle progress bar | ^[Number] | 126 |
| show-text | whether to show percentage | ^[Boolean] | true |
| stroke-linecap | circle type shape at the end path | ^[butt] ^[round] ^[square] | round |
| format | custom text format | ^[Function]`(percentage: number) => string` | - |
| striped | stripe over the progress bar's color | ^[Boolean] | false |
| striped-flow | get the stripes to flow | ^[Boolean] | false |

### Slots

| Name | Description |
| ------ | ---- |
| default | Customized content, parameter is { percentage } | - |
