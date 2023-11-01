# Collapse 折叠面板

通过折叠面板收纳内容区域

## 基础用法

:::demo src="../examples/collapse/basic.vue" title="可同时展开多个面板，面板之间不影响。"

:::

## 手风琴效果

:::demo src="../examples/collapse/accordion.vue" title="每次只能展开一个面板，通过 accordion 属性来设置是否以手风琴模式显示。"

:::

## 自定义面板标题

:::demo src="../examples/collapse/custom-title.vue" title="除了可以通过 title 属性以外，还可以通过具名 slot 来实现自定义面板的标题内容，以实现增加图标等效果。"

:::

## 主题

:::demo src="../examples/collapse/effect.vue" title="组件提供了3种不同的主题：up、down、line。通过设置 effect 属性来改变主题，默认为 line。"

:::

## 额外节点

:::demo src="../examples/collapse/extra.vue" title="通过 extra 可以设置额外节点。extra 单击可以设置 stop 修饰符，以阻止当前项目展开。"

:::

## 不同尺寸

:::demo src="../examples/collapse/size.vue" title="组件提供除了默认值 medium 以外的三种尺寸。额外的尺寸：large、small、mini，通过设置 size 属性来配置它们。"

:::

<!-- Collapse -->

## Collapse API

### Collapse Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| model-value / v-model | 当前激活的面板 | ^[String] ^[Array] | - |
| accordion | 是否手风琴模式 | ^[Boolean] | false |
| effect | 主题 | ^[String]`'line' \| 'up' \| 'down'` | line |
| size | 尺寸 | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |

### Collapse Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| change | 当前激活面板改变时触发 | ^[Function]`(value: string \| array) => void` |

### Collapse Slots

| 参数名 | 描述 |
| ------ | ---- |
| default | Collapse Item |

<!-- Collapse-Item -->
## Collapse-Item API

### Collapse-Item Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| name | 唯一标志符 | ^[String] ^[Number] | - |
| title | 面板标题 | ^[String] | - |
| extra | 右上角的操作区域 | ^[String] | - |
| disabled | 是否禁用 | ^[Boolean] | false |

### Collapse-Item Slots

| 参数名 | 描述 |
| ------ | ---- |
| default | Collapse Item 内容 |
| title | Collapse Item 标题 |
| extra | Collapse Item 额外内容 |
