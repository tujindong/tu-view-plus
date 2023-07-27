# Checkbox 复选框

## 何时使用

- 在一组选项中进行多项选择；
- 单独使用可以表示在两个状态之间切换，可以和提交操作结合。

## 基础用法

:::demo src="./basic.vue" title="单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。"

:::

## 受控状态

:::demo src="./controlled.vue" title="通过 v-model (model-value) 属性控制是否选中。"

:::

## 禁用状态

:::demo src="./disabled.vue" title="设置复选框 disabled 属性为不可用状态。"

:::

## 多选框组

:::demo src="./grouping.vue" title="适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。"

在 tu-checkbox 元素中定义 v-model 绑定变量，单一的 checkbox 中，默认绑定变量的值会是 Boolean，选中为 true。 在 tu-checkbox 组件中，label 是选择框的值。 如果该组件下没有被传入内容，那么 label 将会作为 checkbox 按钮后的介绍。 label 也与数组中的元素值相对应。 如果指定的值存在于数组中，就处于选择状态，反之亦然。

:::

## 中间状态

:::demo src="./intermediate.vue" title="设置 indeterminate 属性用来表示 checkbox 的不确定状态，一般用于实现全选的效果。"

:::

## 可选数量限制

:::demo src="./limitation.vue" title="设置 min 和 max 属性能够限制可以被勾选的项目的数量。"

:::

## 复选框组样式

:::demo src="./type.vue" title="复选框组的样式，可设置为按钮或边框样式。"

:::

## 复选框组尺寸

:::demo src="./size.vue" title="tu-checkbox-group 组件提供除了默认值 medium 以外的三种尺寸。"

额外的尺寸：large、small、mini，通过设置 size 属性来配置它们。

:::

## Checkbox API

### Checkbox Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| --------- | ---- | ---- | :----: |
| v-model | 绑定值 | ^[String] ^[Number] ^[Boolean] | - |
| label | 选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）| ^[String] ^[Number] ^[Boolean] ^[Object] | - |
| true-label | 选中时的值 | ^[String] ^[Number] | - |
| false-label | 没有选中时的值 | ^[String] ^[Number] | - |
| disabled | 是否禁用 | ^[Boolean] | false |
| type | 类型 | ^[String]`'border'\|'button'`| - |
| size | 尺寸 | ^[String]`'mini'\|'small'\|'medium'\|'large'` | medium |
| name | 原生属性 | ^[String] | - |
| checked | 当前是否勾选 | ^[Boolean] | false |
| indeterminate | 设置不确定状态，仅负责样式控制 | ^[Boolean] | false |
| validate-event | 输入时是否触发表单的校验 | ^[Boolean] | true |
| tabindex | 输入框的 tabindex | ^[String] ^[Number] | - |
| id | 输入框的 id | ^[String] | - |
| controls | 与 aria-control一致, 当 indeterminate为 true时生效 | ^[Boolean] | - |

### Checkbox Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| change | 当绑定值变化时触发的事件 | ^[Function]`(value: string \| number \| boolean) => void` |

### Checkbox Slots

| 参数名 | 描述 |
| ------ | ---- |
| default | 自定义内容 |

## CheckboxGroup API

### CheckboxGroup Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| --------- | ---- | ---- | :----: |
| v-model | 绑定值 | ^[Object]`'string[]' \| 'number[]'` | - |
| label | 为屏幕阅读器准备的标签 | ^[String] | - |
| type | 类型 | ^[String]`'border' \| 'button'`| - |
| size | 尺寸 | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| disabled | 是否禁用 | ^[Boolean] | false |
| min | 可被勾选的 checkbox 的最小数量 | ^[Number] | - |
| max | 可被勾选的 checkbox 的最大数量 | ^[Number] | - |
| text-color | 当按钮为活跃状态时的字体颜色 | ^[String] | - |
| tag | 复选框组元素标签 | ^[String] | div |
| validate-event | 是否触发表单验证 | ^[Boolean] | true |

### CheckboxGroup Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| change | 当绑定值变化时触发的事件 | ^[Function]`(value: string[] \| number[]) => void` |

### CheckboxGroup Slots

| 参数名 | 描述 | 类型 |
| ------ | ---- | ---- |
| default | 自定义内容 | Checkbox |
