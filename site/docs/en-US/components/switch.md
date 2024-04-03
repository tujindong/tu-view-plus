# Switch

Switch is used for switching between two opposing states.

## Basic usage

:::demo src="../examples/switch/basic.vue" title="Bind v-model to a Boolean typed variable. "

:::

## Types

:::demo src="../examples/switch/type.vue" title="There are two types of switches: circle and round."

:::

## Effects

:::demo src="../examples/switch/effect.vue" title="Switch provide five different themes: outset、inset、bordered、outlined and flat. Using effect to change, default is outset."

:::

## Disabled

:::demo src="../examples/switch/disabled.vue" title="Adding the disabled attribute disables Switch."

:::

## Text description

:::demo src="../examples/switch/text-description.vue" title="Adding the active-text and inactive-text attribute to show texts. use inline-prompt attribute to control text is displayed inside dot."

:::

## Display custom icons

:::demo src="../examples/switch/custom-icons.vue" title="Adding the active-icon and inactive-icon attribute to show icons. use inline-prompt attribute to control icon is displayed inside dot."

:::

## Extended value types

:::demo src="../examples/switch/extended-value-types.vue" title="Setting the active-value and inactive-value attributes. They both receive a Boolean, String or Number typed value."

:::

## Loading

:::demo src="../examples/switch/loading.vue" title="Setting the loading attribute to true indicates a loading state on the Switch."

:::

## Prevent switching

:::demo src="../examples/switch/prevent-switching.vue" title="Setting the before-change property, If false is returned or a Promise is returned and then is rejected, will stop switching."

:::

## Sizes

:::demo src="../examples/switch/size.vue" title="Besides default size, tu-switch component provides three additional sizes for you to choose among different scenarios. Use attribute size to set additional sizes with mini, small, large."

:::

## Switch API

### Switch Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| v-model | binding value, it should be equivalent to either active-value or inactive-value, by default it's boolean type | ^[Boolean] ^[String] ^[Number] | false |
| disabled | whether Switch is disabled | ^[Boolean] | false |
| loading | whether Switch is in loading state | ^[Boolean] | false |
| type | type of Switch | ^[String]`'circle' \| 'round'` | circle |
| effect | effect of Switch | ^[String]`'outset' \| 'inset' \| 'bordered' \| 'outlined' \| 'flat'` | outset |
| size | size of Switch | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| width | width of Switch | ^[String] ^[Number] | false |
| inline-prompt | whether icon or text is displayed inside dot, only the first character will be rendered for text | ^[Boolean] | false |
| active-value | switch value when in on state | ^[Boolean] ^[String] ^[Number] | true |
| inactive-value | switch value when in off state | ^[Boolean] ^[String] ^[Number] | false |
| active-icon | component of the icon displayed when in on state, overrides active-text | ^[String] ^[Component] | - |
| inactive-icon | component of the icon displayed when in off state, overrides inactive-text | ^[String] ^[Component] | - |
| active-text | text displayed when in on state | ^[String] | '' |
| inactive-text | text displayed when in off state | ^[String] | '' |
| name | input name of Switch | ^[String] | '' |
| validate-event | input name of Switch | ^[Boolean] | true |
| before-change | before-change hook before the switch state changes. If false is returned or a Promise is returned and then is rejected, will stop switching | ^[Boolean]  ^[Function]`() => Promise<boolean>`  | - |
| id | id for input | ^[String] | - |
| tabindex | tabindex for input | ^[String] ^[Number] | - |

### Switch Events

| Name | Description | Type |
| ------ | ---- | ---- |
| change | triggers when value changes | ^[Function]`(val: boolean \| string \| number) => void` |

### Switch Exposes

| Name | Description | Type |
| ------ | ---- | ---- |
| focus  | manual focus to the switch component | ^[Function]`() => void` |
