# Result 结果页

用于反馈一系列操作任务的处理结果，当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。

## 基础用法

:::demo src="../examples/result/basic.vue" title="展示结果状态。"

:::

## 成功状态

:::demo src="../examples/result/success.vue" title="展示成功状态。"

:::

## 警告状态

:::demo src="../examples/result/warning.vue" title="展示警告状态。"

:::

## 错误状态

:::demo src="../examples/result/error.vue" title="展示错误状态。"

:::

## HTTP状态码 403

:::demo src="../examples/result/403.vue" title="没有当前页面的访问权限。"

:::

## HTTP状态码 404

:::demo src="../examples/result/404.vue" title="页面未找到。"

:::

## HTTP状态码 500

:::demo src="../examples/result/500.vue" title="服务器错误。"

:::

## 自定义状态

:::demo src="../examples/result/custom.vue" title="自定义状态。需要传入指定的图标。"

:::

## 完整功能

:::demo src="../examples/result/complete.vue" title="完整功能。"

:::


## Result API

### Result Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| --------- | ---- | ---- | :----: |
| status | 结果页显示的状态 | ^[String]`'info' \| 'success' \| 'warning' \| 'error' \| '403' \| '404' \| '500' \| 'custom'` | info |
| title | 标题内容  | ^[String] | - |
| subtitle | 子标题内容 | ^[String] | - |

### Result Slots

| 参数名 | 描述 | 类型 |
| ------ | ---- | ---- |
| icon | 图标 | - |
| title | 标题 | - |
| subtitle | 副标题 | - |
| extra | 操作区 | - |
| default | 默认插槽 | - |