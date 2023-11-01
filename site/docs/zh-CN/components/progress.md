# Progress 进度条

用于展示操作进度，告知用户当前状态和预期。

## 线性进度条

:::demo src="../examples/progress/lineProgress.vue" title="Progress 组件设置 percentage 属性即可，表示进度条对应的百分比。 该属性必填，并且必须在 0-100 的范围内。 你可以通过设置 format 来自定义文字显示的格式。"

:::

## 百分比内显

:::demo src="../examples/progress/innerText.vue" title="百分比不占用额外控件，适用于文件上传等场景。可通过 stroke-width 属性更改进度条的高度，并可通过 text-inside 属性来改变进度条内部的文字。"

:::

## 自定义颜色

:::demo src="../examples/progress/color.vue" title="可通过 color 设置进度条的颜色，color 可以接受颜色字符串，函数和数组。"

:::

## 环形进度条

:::demo src="../examples/progress/circle.vue" title="可通过 type 属性来指定使用环形进度条，在环形进度条中，还可以通过 width 属性来设置其大小。"

:::

## 自定义内容

:::demo src="../examples/progress/custom.vue" title="可通过默认插槽添加自定义内容。"

:::

## 动画进度条

:::demo src="../examples/progress/animation.vue" title="可通过 intermediate 属性来设置不确定的进度， duration 来控制动画持续时间"

:::

## 条纹进度条

:::demo src="../examples/progress/striped.vue" title="可通过 striped 属性获取条纹进度条。 也可以使用 striped-flow 属性来使条纹流动起来。 使用 duration 属性来控制条纹流动的速度。"

:::

## 进度条大小

:::demo src="../examples/progress/size.vue" title="可通过 stroke-width 设置进度条的宽度。"

:::

## Progress API

### Progress Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| percentage | 百分比（必填） | ^[Number] | 0 |
| type | 进度条类型 | ^[line] ^[circle] ^[dashboard] | line |
| stroke-width | 进度条的宽度 | ^[Number] | 8 |
| text-inside | 进度条显示文字内置在进度条内（仅 type 为 line 时可用） | ^[Boolean] | false |
| status | 进度条当前状态 | ^[success] ^[exception] ^[warning] | - |
| indeterminate | 是否为动画进度条 | ^[Boolean] | false |
| duration | 控制动画进度条速度和条纹进度条流动速度 | ^[Number] | 3 |
| color | 进度条背景色 进度条背景色（会覆盖 status 状态颜色） | ^[String] ^[Function]`(percentage: number) => string` ^[Array]`{ color: string; percentage: number }[]`  | - |
| width | 环形进度条画布宽度（只在 type 为 circle 时可用） | ^[Number] | 126 |
| show-text | 是否显示进度条文字内容 | ^[Boolean] | true |
| stroke-linecap | circle/dashboard 类型路径两端的形状 | ^[butt] ^[round] ^[square] | round |
| format | 指定进度条文字内容 | ^[Function]`(percentage: number) => string` | - |
| striped | 在进度条上增加条纹 | ^[Boolean] | false |
| striped-flow | 让进度条上的条纹流动起来 | ^[Boolean] | false |

### Slots

| 参数名 | 描述 |
| ------ | ---- |
| default | 自定义内容，参数为 percentage | - |
