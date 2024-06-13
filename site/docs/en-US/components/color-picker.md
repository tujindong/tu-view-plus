# ColorPicker

Used for select and display colors.

## Basic usage

:::demo src="../examples/color-picker/basic.vue" title="Color Picker basic usage."

:::

## Disabled

:::demo src="../examples/color-picker/disabled.vue" title="Set disabled to disable the selector."

:::

## Color format

:::demo src="../examples/color-picker/format.vue" title="Set the format of the color value through format, supporting hex and rgb."

:::

## Preset & History

:::demo src="../examples/color-picker/colors.vue" title="The preset color and history color areas can be opened through `showPreset` and `showHistory`. Historical colors require users to control the display content themselves."

:::

## Trigger

:::demo src="../examples/color-picker/trigger.vue" title="set the properties of the trigger through trigger-props."

:::

## Customize trigger element

:::demo src="../examples/color-picker/trigger-element.vue" title="Customize trigger element."

:::

## Size

:::demo src="../examples/color-picker/size.vue" title="Besides default size, tu-color-picker component provides three additional sizes for you to choose among different scenarios. Use attribute size to set additional sizes with mini, small, large."

:::

## Only panel

:::demo src="../examples/color-picker/only-panel.vue" title="Only use the color selection panel."

:::

## ColorPicker API

### ColorPicker Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| model-value | Value | ^[String] | - |
| default-value | Default value (uncontrolled state) | ^[String] | - |
| format | Color value format | ^[String]`'hex' \| 'rgb'` | - |
| size | Size | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| show-text | Show color value | ^[Boolean] | false |
| show-history | Show history colors | ^[Boolean] | false |
| show-preset | Show preset colors | ^[Boolean] | false |
| disabled | Disabled | ^[Boolean] | false |
| disabled-alpha | Disable transparency channel | ^[Boolean] | false |
| hide-trigger | There is no trigger element, only the color panel is displayed | ^[Boolean] | false |
| trigger-props | Can accept Props of all Trigger components | ^[Object]`Partial<TriggerProps>` | - |
| history-colors | Color array of historical colors | ^[Array]`string[]` | - |
| preset-colors | Color array of preset colors | ^[Array]`string[]` | colors |

### ColorPicker Events

| Name | Description | Type |
| ------ | ---- | ---- |
| change | Triggered when the color value changes | ^[Function]`(value: string) => void` |
| popup-visible-change | Triggered when the color panel is expanded and collapsed | ^[Function]`(visible: boolean, value: string) => void` |
