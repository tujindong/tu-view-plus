# Radio 单选框

## 何时使用

用户要从一个数据集中选择单个选项，且能并排查看所有可选项，选项数量在 2~7 之间时，建议使用单选按钮。

## 基础用法

:::demo src="./basic.vue" title="由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。"

要使用 Radio 组件，只需要设置 v-model 绑定变量，选中意味着变量的值为相应 label 属性的值，label 可以是 String、Number 或 Boolean。

:::

## 禁用状态

:::demo src="./disabled.vue" title="单选框不可用的状态。"

只要在 tu-radio 元素中设置 disabled 属性即可，它接受一个 Boolean，true 为禁用。

:::

## 单选框组

:::demo src="./group.vue" title="适用于在多个互斥的选项中选择的场景。"

结合 tu-radio-group 元素和子元素 tu-radio 可以实现单选组，在 tu-radio-group 中绑定v-model，在 tu-radio 中设置好 label 即可，无需再给每一个 tu-radio 绑定变量，另外，还提供了 change 事件来响应变化，它会传入一个参数 value。

:::

## 单选框组样式

:::demo src="./type.vue" title="单选框组的样式，可设置为按钮或边框样式。"

设置 tu-radio-group 元素属性的 type 值为 button 或 border来配置样式。

:::

## 单选框组尺寸

:::demo src="./size.vue" title="tu-radio-group 组件提供除了默认值 medium 以外的三种尺寸。"

额外的尺寸：large、small、mini，通过设置 size 属性来配置它们。

:::

## Radio API

### Radio Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| --------- | ---- | ---- | :----: |
| v-model | 绑定值 | ^[String] ^[Number] ^[Boolean] | - |
| label | Radio 的 value | ^[String] ^[Number] ^[Boolean] | - |
| disabled | 是否禁用 | ^[Boolean] | false |
| type | 类型 | ^[String]`'border'\|'button'`| - |
| size | 尺寸 | ^[String]`'mini'\|'small'\|'medium'\|'large'` | medium |
| name | 原生属性 | ^[String] | - |

### Radio Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| change | 绑定值变化时触发的事件 | ^[Function]`(value: string \| number \| boolean) => void` |

### Radio Slots

| 参数名 | 描述 |
| ------ | ---- |
| default | 自定义内容 |

## RadioGroup API

### RadioGroup Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| --------- | ---- | ---- | :----: |
| v-model | 绑定值 | ^[String] ^[Number] ^[Boolean] | - |
| type | 类型 | ^[String]`'border' \| 'button'`| - |
| size | 尺寸 | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| disabled | 是否禁用 | ^[Boolean] | false |
| text-color | 选中项标签文字颜色 | ^[String]  | - |
| validate-event | 是否进行表单校验 | ^[Boolean] | true |
| label | 同 RadioGroup 的 aria-label | ^[String] | - |
| name | 原生属性 | ^[String] | - |
| id | 原生属性 | ^[String] | - |

### RadioGroup Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| change | 绑定值变化时触发的事件 | ^[Function]`(value: string \| number \| boolean) => void` |

### RadioGroup Slots

| 参数名 | 描述 | 类型 |
| ------ | ---- | ---- |
| default | 自定义内容 | Radio |
