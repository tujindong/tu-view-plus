# Descriptions

Display multiple fields in list form

## Basic usage

:::demo src="../examples/descriptions/basic.vue" title=" "

:::

## Sizes

:::demo src="../examples/descriptions/size.vue" title=" "

:::

## Vertical list

:::demo src="../examples/descriptions/vertical.vue" title=" "

:::

## Customized style

:::demo src="../examples/descriptions/customer-style.vue" title=" "

:::

## Descriptions API

### Descriptions Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| border | With or without border | ^[Boolean] | false |
| column | Numbers of Descriptions Item in one line | ^[Number] | 3 |
| direction | Sirection of list | ^[String]`'vertical' \| 'horizontal'` | horizontal |
| size | Size of list | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| title | Title text, display on the top left | ^[String] | - |
| extra | Extra text, display on the top right | ^[String] | - |

### Descriptions Slots

| Name | Description | Default |
| ------ | ---- | :----: |
| default | Customize default content | Descriptions Item |
| title | Custom title, display on the top left | - |
| extra | Custom extra area, display on the top right | - |

## DescriptionsItem API

### DescriptionsItem Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| label | Label text | ^[String] | - |
| span | Colspan of column | ^[Number] | 1 |
| width | Column width, the width of the same column in different rows is set by the max value(If no border, width contains label and content) | ^[String] ^[Number] | - |
| min-width | Column minimum width, columns with width has a fixed width, while columns with min-width has a width that is distributed in proportion(If no border, width contains label and content) | ^[String] ^[Number] | - |
| align | Column content alignment(If no border, effective for both label and content) | ^[String]`'left' \| 'center' \| 'right'` | left |
| label-align | Column label alignment, if omitted, the value of the above align attribute will be applied (If no border, please use align attribute) | ^[String]`'left' \| 'center' \| 'right'` | - |
| class-name | Column content custom class name | ^[String] | - |
| label-class-name | Column label custom class name | ^[String] | - |

### DescriptionsItem Slots

| Name | Description | Default |
| ------ | ---- | :----: |
| default | Customize default content | - |
| label | Custom label | - |
