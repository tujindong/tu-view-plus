# InputNumber

Input numerical values with a customizable range.

## Basic usage

:::demo src="../examples/input-number/basic.vue" title="Bind a variable to v-model in <tu-input-number> element and you are set."

:::

## Disabled

:::demo src="../examples/input-number/disabled.vue" title="The disabled attribute accepts a boolean, and if the value is true, the component is disabled. If you just need to control the value within a range, you can add min attribute to set the minimum value and max to set the maximum value. By default, the minimum value is 0."

:::

## Steps

:::demo src="../examples/input-number/steps.vue" title="Allows you to define incremental steps."

:::

## Step strictly

:::demo src="../examples/input-number/step-strictly.vue" title="The step-strictly attribute accepts a boolean. if this attribute is true, input value can only be multiple of step."

:::

## Precision

:::demo src="../examples/input-number/precision.vue" title="Add precision attribute to set the precision of input value."

:::

## Controls Position

:::demo src="../examples/input-number/controls-position.vue" title="Setting the controls-position to decide the position of control buttons."

:::

## Sizes

:::demo src="../examples/input-number/size.vue" title="Besides default size, tu-input-number component provides three additional sizes for you to choose among different scenarios. Use attribute size to set additional sizes with mini, small, large."

:::

## InputNumber API

### InputNumber Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| v-model | binding value | ^[String] ^[Number] | - |
| size | size of input number | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| disabled | whether the component is disabled | ^[Boolean] | - |
| readonly | same as readonly in native input | ^[Boolean] | false |
| min | the minimum allowed value | ^[Number] | -Infinity |
| max | the maximum allowed value | ^[Number] | Infinity |
| step | incremental step | ^[Number]  | 1  |
| step-strictly | whether input value can only be multiple of step | ^[Boolean]  | false |
| precision | precision of input value | ^[Number] | - |
| controls | whether to enable the control buttons | ^[Boolean] | true |
| controls-position | position of the control buttons | ^[String]`'' \| 'right'` | '' |
| name | same as name in native input | ^[String] | - |
| label | same as label in native input | ^[String] | - |
| placeholder | same as placeholder in native input | ^[String] | - |
| id | same as id in native input | ^[String] | - |
| value-on-clear | value should be set when input box is cleared | ^[Number] ^[Null] ^[String]`'min' \| 'max'` | - |
| validate-event | whether to trigger form validation | ^[Boolean]  | true |

### InputNumber Events

| Name | Description | Type |
| ------ | ---- | ---- |
| change | triggers when the value changes | ^[Function]`(currentValue: number \| undefined, oldValue: number \| undefined) => void` |
| blur | triggers when Input blurs | ^[Function]`(event: FocusEvent) => void` |
| focus | triggers when Input focuses | ^[Function]`(event: FocusEvent) => void` |

### InputNumber Exposes

| Name | Description | Type |
| ------ | ---- | ---- |
| focus | get focus the input component | ^[Function]`() => void` |
| blur | remove focus the input component | ^[Function]`() => void` |
