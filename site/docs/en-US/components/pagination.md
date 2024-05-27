# Pagination

If you have too much data to display in one page, use pagination.

## Basic usage

:::demo src="../examples/pagination/basic.vue" title="Basic usage of pagination, total attribute is required."

:::

## Ellipsis pager

:::demo src="../examples/pagination/ellipsis.vue" title="When the page number is larger, the pagination style with more page numbers will be used."

:::

## PageSize options

:::demo src="../examples/pagination/page-size.vue" title="By setting show-page-size, the number of items per page selector is displayed."

:::

## Page jumper

:::demo src="../examples/pagination/jumper.vue" title="By setting show-jumper, the page number jump input box is displayed."

:::

## Total

:::demo src="../examples/pagination/total.vue" title="Display the total number of data by setting the show-total property."

:::

## Show all

:::demo src="../examples/pagination/all.vue" title="Show all configuration."

:::

## Button

:::demo src="../examples/pagination/button.vue" title="Open the button mode by setting the button property."

:::

## Simple

:::demo src="../examples/pagination/simple.vue" title="Open the simple mode by setting the simple property."

:::

## Custom page item

:::demo src="../examples/pagination/custom.vue" title="The content of the paging button can be customized through the slot"

:::

## Pagination size

:::demo src="../examples/pagination/size.vue" title="The pagination is divided into four sizes: mini, small, medium, and large."

:::

## Pagination API

### Pagination Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| total | Total number of data | ^[Number] | - |
| current / v-model | Current page number | ^[Number] | - |
| default-current | The default number of pages (uncontrolled state) | ^[Number] | 1 |
| page-size / v-model | Number of data items displayed per page | ^[Number] | - |
| default-page-size | The number of data items displayed per page by default (uncontrolled state) | ^[Number] | 10 |
| disabled | Whether to disable | ^[Boolean] | false |
| hide-on-single-page | Whether to hide pagination when single page | ^[Boolean] | false |
| simple | Whether it is simple mode | ^[Boolean] | false |
| button | Whether it is button style | ^[Boolean] | false |
| show-total | Whether to display the total number of data | ^[Boolean] | false |
| show-more | Whether to show more buttons | ^[Boolean] | false |
| show-jumper | Whether to show jump | ^[Boolean] | false |
| show-page-size | Whether to display the data number selector | ^[Boolean] | false |
| page-size-options | Selection list of data number selector | ^[Array]`number[]` | [10, 20, 30, 40, 50] |
| page-size-props | Props of data number selector | ^[Object]`SelectProps` | - |
| size | The size of the page selector | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| page-item-style | The style of the paging button | ^[Object]`CSSProperties` | - |
| active-page-item-style | The style of the current paging button | ^[Object]`CSSProperties` | - |
| base-size | Calculate and display the number of omitted bases. Display the omitted number as baseSize + 2 * bufferSize | ^[Number] | 6 |
| buffer-size | When the ellipsis is displayed, the number of page numbers displayed on the left and right of the current page number | ^[Number] | 2 |
| auto-adjust | Whether to adjust the page number when changing the number of data | ^[Boolean] | true |

### Pagination Events

| Name | Description | Type |
| ------ | ---- | ---- |
| change | Triggered when page number changes | ^[Function]`(current: number) => void` |
| page-size-change | Triggered when the number of data items changes | ^[Function]`(pageSize: number) => void` |

### Pagination Slots

| Name | Description | Params |
| ------ | ---- | ---- |
| total | Total | total: ^[number] |
| page-item-ellipsis | Page item (ellipsis) | - |
| page-item-step | Page item (step) | type: ^[String]`'previous'\|'next'` |
| page-item | Page item | page: ^[number] |
