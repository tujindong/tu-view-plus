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
| border | with or without border | ^[Boolean] | false |
| column | numbers of Descriptions Item in one line | ^[Number] | 3 |
| direction | direction of list | ^[String]`'vertical' \| 'horizontal'` | horizontal |
| size | size of list | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| title | title text, display on the top left | ^[String] | - |
| extra | extra text, display on the top right | ^[String] | - |

### Descriptions Slots

| Name | Description | Default |
| ------ | ---- | :----: |
| default | customize default content | Descriptions Item |
| title | custom title, display on the top left | - |
| extra | custom extra area, display on the top right | - |

## DescriptionsItem API

### DescriptionsItem Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| label | label text | ^[String] | - |
| span | colspan of column | ^[Number] | 1 |
| width | column width, the width of the same column in different rows is set by the max value(If no border, width contains label and content) | ^[String] ^[Number] | - |
| min-width | column minimum width, columns with width has a fixed width, while columns with min-width has a width that is distributed in proportion(If no border, width contains label and content) | ^[String] ^[Number] | - |
| align | column content alignment(If no border, effective for both label and content) | ^[String]`'left' \| 'center' \| 'right'` | left |
| label-align | column label alignment, if omitted, the value of the above align attribute will be applied (If no border, please use align attribute) | ^[String]`'left' \| 'center' \| 'right'` | - |
| class-name | column content custom class name | ^[String] | - |
| label-class-name | column label custom class name | ^[String] | - |

### DescriptionsItem Slots

| Name | Description | Default |
| ------ | ---- | :----: |
| default | customize default content | - |
| label | custom label | - |
