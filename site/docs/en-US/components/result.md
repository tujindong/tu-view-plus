# Result

It is used to feed back the processing results of a series of operation tasks. It is used when there are important operations that need to inform the user of the processing results and the feedback content is more complicated.

## Basic usage

:::demo src="../examples/result/basic.vue" title="Show the result status."

:::

## Success

:::demo src="../examples/result/success.vue" title="Show success status."

:::

## Warning

:::demo src="../examples/result/warning.vue" title="Show warning status."

:::

## Error

:::demo src="../examples/result/error.vue" title="Show error status."

:::

## HTTP status code 403

:::demo src="../examples/result/403.vue" title="No access to the current page."

:::

## HTTP status code 404

:::demo src="../examples/result/404.vue" title="Page not found."

:::

## HTTP status code 500

:::demo src="../examples/result/500.vue" title="Server error."

:::

## Custom status

:::demo src="../examples/result/custom.vue" title="Custom Status. You need to set the Icon property."

:::

## All features

:::demo src="../examples/result/complete.vue" title="All features."

:::


## Result API

### Result Attributes

| Name | Description | Type | Default |
| --------- | ---- | ---- | :----: |
| status | the status displayed on the result page | ^[String]`'info' \| 'success' \| 'warning' \| 'error' \| '403' \| '404' \| '500' \| 'custom'` | info |
| title | title  | ^[String] | - |
| subtitle | subtitle | ^[String] | - |

### Result Slots

| Name | Description | Type |
| ------ | ---- | ---- |
| icon | icon | - |
| title | title | - |
| subtitle | subtitle | - |
| extra | extra | - |
| default | default | - |