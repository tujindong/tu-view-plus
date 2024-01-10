# Rate 评分

用于评分

## 基础用法

:::demo src="../examples/rate/basic.vue" title="评分默认被分为三个等级，可以利用颜色数组对分数及情感倾向进行分级（默认情况下不区分颜色）。 三个等级所对应的颜色用 colors 属性设置，而它们对应的两个阈值则通过 low-threshold 和 high-threshold 设定。"

:::

## 不同尺寸

:::demo src="../examples/rate/size.vue" title="Rate 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的评分尺寸。额外的尺寸： mini 、 small 、 large ，通过设置 size 属性来配置它们。"

:::

## 允许半选

:::demo src="../examples/rate/allow-half.vue" title="属性 allow-half 允许出现半星。"

:::

## 辅助文字

:::demo src="../examples/rate/text.vue" title="用辅助文字直接地表达对应分数。为组件设置 show-text 属性会在右侧显示辅助文字。 通过设置 texts 可以为每一个分值指定对应的辅助文字。 texts 为一个数组，长度应等于最大值 max。"

:::

## 可清空

:::demo src="../examples/rate/clearable.vue" title="当你再次点击相同的值时，可以将值重置为0。"

:::

## 更多种类的图标

:::demo src="../examples/rate/more-icons.vue" title="当有多层评价时，可以用不同类型的图标区分评分层级。设置icons属性可以自定义不同分段的图标。 若传入数组，共有 3 个元素，为 3 个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名。 本例还使用 void-icon 指定了未选中时的图标类名。"

:::

## 只读

:::demo src="../examples/rate/readonly.vue" title="只读的评分用来展示分数， 允许出现半星。为组件设置 disabled 属性表示组件为只读。 此时若设置 show-score，则会在右侧显示目前的分值。 此外，您可以使用属性 score-template 来提供评分模板。 模板为一个包含了 {value} 的字符串，{value} 会被替换为当前分值。"

:::

## 自定义样式

可以为rate组件设置自定义样式。 使用 css/scss 语言来更改全局或局部颜色。 设置了一些全局颜色变量：--rate-void-color、--rate-fill-color、--rate-disabled-void-color 和 --rate-text-color。 可以类似这样使用 :root {  --rate-void-color: red; --rate-fill-color: blue;  } 。

## Rate API

### Rate Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| --------- | ---- | ---- | :----: |
| model-value / v-model | 选中项绑定值 | ^[Number] | 0 |
| max | 最大分值 | ^[Number] | 5 |
| size | 尺寸 | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| disabled | 是否为只读 | ^[Boolean] | false |
| allow-half | 是否允许半选 | ^[Boolean] | false |
| low-threshold | 低分和中等分数的界限值， 值本身被划分在低分中 | ^[Number] | 2 |
| high-threshold | 高分和中等分数的界限值， 值本身被划分在高分中 | ^[Number] | 4 |
| colors | icon 的颜色。 若传入数组，共有 3 个元素，为 3 个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色 | ^[Object]`'string[] \| Record<number, string>'`| ['#F7BA2A', '#F7BA2A', '#F7BA2A'] |
| void-color | 未选中 icon 的颜色 | ^[String] | #C6D1DE |
| disabled-void-color | 只读时未选中 icon 的颜色 | ^[String] | #F0F2F5 |
| icons | 图标组件 若传入数组，则需要传入 3 个元素，分别为 3 个部分所对应的类名；若传入对象，则可自定义分段，键名为分段的界限值，键值为对应的类名 | ^[Object]`'string[] \| Component[] \| Record<number, string>'`| [StarFilled, StarFilled, StarFilled] |
| void-icon | 未被选中的图标组件 | ^[String] ^[Component] | Star |
| disabled-void-icon | 禁用状态的未选择图标 | ^[String] ^[Component] | StarFilled |
| show-text | 是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容 | ^[Boolean] | false |
| show-score | 是否显示当前分数， show-score 和 show-text 不能同时为真 | ^[Boolean] | false |
| text-color | 辅助文字的颜色 | ^[String] | - |
| texts | 辅助文字数组 | ^[Array]`'string[]'`| ['Extremely bad', 'Disappointed', 'Fair', 'Satisfied', 'Surprise'] |
| score-template | 分数显示模板 | ^[String] | - |
| clearable | 是否可以重置值为 0 | ^[Boolean] | false |
| id | 原生id属性 | ^[String] | - |
| label | 和 Rate 的 aria-label 属性保持一致 | ^[String] | - |

### Rate Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| change | 分值改变时触发 | ^[Function]`(value: number) => void` |

### Rate Exposes

| 参数名 | 描述 | 类型 |
| ------ | ---- | ---- |
| setCurrentValue | 设置当前值 | ^[Function]`(value: number) => void` |
| resetCurrentValue | 重置当前值 | ^[Function]`(value: number) => void` |