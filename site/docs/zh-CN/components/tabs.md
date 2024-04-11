# Tabs 标签

分隔内容上有关联但属于不同类别的数据集合。

## 基础用法

:::demo src="../examples/tabs/basic.vue" title="标签页的基本使用方法。"

:::

## 带图标的标签

:::demo src="../examples/tabs/with-icon.vue" title="通过 title 插槽来实现自定义标签页的内容。"

:::

## 标签页的位置

:::demo src="../examples/tabs/position.vue" title="通过 position 属性可以自定义标签栏的位置。"

:::

## 不同类型

:::demo src="../examples/tabs/types.vue" title="通过 type 可以设置标签的类型。"

:::

## 懒加载

:::demo src="../examples/tabs/lazy-load.vue" title="通过设置 lazy-load 属性，可以让面板在首次激活时渲染。"

:::

## 附加内容

:::demo src="../examples/tabs/extra.vue" title="通过 extra 插槽可以自定义额外显示内容。"

:::

## 动态增减标签页

:::demo src="../examples/tabs/editable.vue" title="通过设置 editable 为 true 可以开启动态增减标签页。"

:::

## 触发方式

:::demo src="../examples/tabs/trigger.vue" title="通过 trigger 指定触发方式。"

:::

## Tabs API

### Tabs Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| active-key/v-model | 当前选中的标签的 key | ^[String] ^[Number] | - |
| default-active-key |默认选中的标签的 key（非受控状态，为空时选中第一个标签页）| ^[String] ^[Number] | - |
| position | 标签页的位置 | ^[String]`'left' \| 'right' \| 'top' \| 'bottom'`| top |
| type | 标签页的类型 | ^[String]`'default' \| 'flat' \| 'card-outset' \| 'card-inset' \| 'slider-outset' \| 'slider-inset' \| 'text' \| 'button' \| 'button-round'` | default |
| direction | 标签页的方向 | ^[String]`'horizontal' \| 'vertical'`| horizontal |
| editable | 是否开启可编辑模式 | ^[Boolean] | false |
| show-add-button | 是否显示增加按钮（仅在可编辑模式可用）| ^[Boolean] | false |
| destroy-on-hide | 是否在不显示标签时销毁内容 | ^[Boolean] | false |
| lazy-load | 是否在首次展示标签时挂载内容 | ^[Boolean] | false |
| justify | 高度撑满容器，只在水平模式下生效。| ^[Boolean] | false |
| animation | 是否开启选项内容过渡动画 | ^[Boolean] | false |
| header-padding | 标签页头部是否存在水平边距。| ^[Boolean] | true |
| auto-switch | 创建标签后是否切换到新标签（最后一个）| ^[Boolean] | false |
| hide-content | 是否隐藏内容 | ^[Boolean]  | false |
| trigger | 触发方式 | ^[String]`'hover' \| 'click'` | click |

### Tabs Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| change | 当前标签值改变时触发 | ^[Function]`(value: string \| number) => void` |
| tab-click | 用户点击标签时触发 | ^[Function]`(value: string \| number) => void` |
| add | 用户点击增加按钮时触发 | - |
| delete | 用户点击删除按钮时触发 | ^[Function]`(value: string \| number) => void` |

### Tabs Slots

| 参数名 | 描述 |
| ------ | ---- |
| extra | 标签页额外内容 |

<!-- Tab-Pane -->
## Tab-Pane API

### Tab-Pane Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| title | 选项卡的标题 | ^[String] | - |
| disabled | 是否禁用 | ^[Boolean] | false |
| closable | 是否允许关闭此选项卡（仅在可编辑模式生效）| ^[Boolean] | true |
| destroy-on-hide | 是否在不显示标签时销毁内容 | ^[Boolean] | false |

### Tab-Pane Slots

| 参数名 | 描述 |
| ------ | ---- |
| title | 选项卡标题 |
