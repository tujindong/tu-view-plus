# Radio 单选框

单选框。

## 何时使用

用户要从一个数据集中选择单个选项，且能并排查看所有可选项，选项数量在 2~7 之间时，建议使用单选按钮。

## 基础用法

:::demo src="./basic.vue" title="由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。"

要使用 Radio 组件，只需要设置 v-model 绑定变量，选中意味着变量的值为相应 `label` 属性的值，label 可以是 String、Number 或 Boolean。

:::

## 禁用状态

:::demo src="./disabled.vue" title="单选框不可用的状态。"

只要在 tu-radio 元素中设置 `disabled` 属性即可，它接受一个 Boolean，true 为禁用。

:::
