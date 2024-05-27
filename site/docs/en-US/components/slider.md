# Slider

Sliding input device, showing current value and selectable range.

## Basic usage

:::demo src="../examples/slider/basic.vue" title="Basic usage of sliding input bar."

:::

## Disabled

:::demo src="../examples/slider/disabled.vue" title="Disable the slider."

:::

## Step

:::demo src="../examples/slider/steps.vue" title="Set the step size by step, the default step size is 1. It is recommended to set a value that can be divisible by max-min, otherwise, the optional maximum value will be less than max. When show-ticks is set, the step ticks are displayed."

:::

## Marks

:::demo src="../examples/slider/marks.vue" title="You can add text labels by setting marks."

:::

## Range slider

:::demo src="../examples/slider/range.vue" title="Range selection can be turned on by setting range, at this time modelValue is an array."

:::

## Show input

:::demo src="../examples/slider/show-input.vue" title="When show-input is set, the input will be displayed."

:::

## Vertical slider

:::demo src="../examples/slider/direction-vertical.vue" title="Set direction is vertical and a vertical slider will be displayed."

:::

## Custom tooltip

:::demo src="../examples/slider/format-tooltip.vue" title="You can customize the prompt text by setting format-tooltip."

:::

## Sizes

:::demo src="../examples/slider/size.vue" title="Besides default size, tu-slider component provides three additional sizes for you to choose among different scenarios. Use attribute size to set additional sizes with mini, small, large."

:::

## Slider API

### Slider Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| v-model | Binding value  | ^[Number] ^[Array] | - |
| default-value | Default value (uncontrolled state)）| ^[Number] ^[Array] | 0 |
| step | Sliding step | ^[Number] | 1 |
| min | Minimum sliding range | ^[Number] | 0 |
| max | Maximum sliding range | ^[Number] | - |
| marks | Set the displayed label | ^[Object]`Record<number, string>` | - |
| direction | The direction of the slider | ^[String]`'horizontal' \| 'vertical'` | horizontal |
| disabled | Whether Slider is disabled | ^[Boolean] | false |
| show-ticks | Whether Slider is to show ticks | ^[Boolean] | false |
| show-input | Whether Slider is to show input | ^[Boolean] | false |
| range | Whether Slider is to use range selection | ^[Boolean] | false |
| show-tooltip | Whether Slider is to show tooltip | ^[Boolean] | true |

### Slider Events

| Name | Description | Type |
| ------ | ---- | ---- |
| change | Trigger when the value changes | ^[Function]`(value: number \| [number, number]) => void` |
