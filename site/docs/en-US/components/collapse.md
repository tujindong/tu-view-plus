# Collapse

Use Collapse to store contents.

## Basic usage

:::demo src="../examples/collapse/basic.vue" title="You can expand multiple panels"

:::

## Accordion

:::demo src="../examples/collapse/accordion.vue" title="In accordion mode, only one panel can be expanded at once. Activate accordion mode using the accordion attribute."

:::

## Custom title

:::demo src="../examples/collapse/custom-title.vue" title="Besides using the title attribute, you can customize panel title with named slots, which makes adding custom content, e.g. icons, possible.。"

:::

## Effects

:::demo src="../examples/collapse/effect.vue" title="Card provide three different themes: up、down and line. Using effect to change, default is line."

:::

## Extra slot

:::demo src="../examples/collapse/extra.vue" title="The extra node on the far right can be set by extra. extra click to set stop modifier to prevent the current item from expanding."

:::

## Sizes

:::demo src="../examples/collapse/size.vue" title="Besides default size, tu-collapse component provides three additional sizes for you to choose among different scenarios. Use attribute size to set additional sizes with mini, small, large."

:::

<!-- Collapse -->

## Collapse API

### Collapse Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| model-value / v-model | currently active panel | ^[String] ^[Array] | - |
| accordion | whether to activate accordion mode | ^[Boolean] | false |
| effect | effect of Collapse | ^[String]`'outset' \| 'inset' \| 'bordered' \| 'outlined' \| 'flat'` | outset |
| size | size of Collapse | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |

### Collapse Events

| Name | Description | Type |
| ------ | ---- | ---- |
| change | triggers when active panels change | ^[Function]`(value: string \| array) => void` |

### Collapse Slots

| Name | Description |
| ------ | ---- |
| default | Collapse Item |

<!-- Collapse-Item -->
## Collapse-Item API

### Collapse-Item Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| name | unique identification of the panel | ^[String] ^[Number] | - |
| title | title of the panel | ^[String] | - |
| extra | extra Content | ^[String] | - |
| disabled | whether to disable | ^[Boolean] | false |

### Collapse-Item Slots

| Name | Description |
| ------ | ---- |
| default | content of Collapse Item |
| title | content of Collapse Item title |
| extra | content of Collapse extra content |
