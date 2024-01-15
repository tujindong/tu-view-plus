# TimePicker 时间选择框

在弹出面板上选择时间，以便捷完成时间输入的控件。

## 基础用法

:::demo src="../examples/time-picker/basic.vue" title="输入框的基本用法。"

:::

## 范围选择器

:::demo src="../examples/time-picker/range-picker.vue" title="时间输入器的范围选择器。"

:::

## 双向绑定

:::demo src="../examples/time-picker/control.vue" title="支持 v-model 进行数据的双向绑定。"

:::

## 允许清除

:::demo src="../examples/time-picker/allow-clear.vue" title="通过设置 allow-clear，显示清除按钮。"

:::

## 默认值

:::demo src="../examples/time-picker/default-value.vue" title="只有默认值的情况，可通过 defaultValue 传递。"

:::

## 禁用

:::demo src="../examples/time-picker/disabled.vue" title="禁用状态。"

:::

## 禁用部分时间选项

:::demo src="../examples/time-picker/disabled-time.vue" title="通过设置 disabledHours、disabledMinutes、disabledSeconds，可以禁用 时 / 分 / 秒的部分选项。"

:::

## 跳过确认

:::demo src="../examples/time-picker/disabled-confirm.vue" title="跳过确认步骤，直接点击选择时间。"

:::

## 定制格式

:::demo src="../examples/time-picker/format.vue" title="通过设置 format，可以定制需要显示的时、分、秒。"

:::

## 定制步长

:::demo src="../examples/time-picker/step.vue" title="通过设置 step，可以定制需要显示的时、分、秒的步长。"

:::

## 附加内容

:::demo src="../examples/time-picker/extra.vue" title="选择框底部显示自定义的内容。"

:::

## 十二小时制

:::demo src="../examples/time-picker/use-12-hours.vue" title="通过设置 use12Hours，可以定制需要显示的时、分、秒。"

:::

## 不同尺寸

:::demo src="../examples/time-picker/size.vue" title="tu-time-picker 组件提供除了默认值 medium 以外的三种尺寸。额外的尺寸：large、small、mini，通过设置 size 属性来配置它们。"

:::

## Time-Picker API

### Time-Picker Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| type | 选择器类型 | ^[String]`'time' \| 'time-range'` | time |
| model-value / v-model | 绑定值 | ^[String] ^[Number] ^[Date] ^[Array]`<string \| number \| Date>` | - |
| default-value | 默认值 | ^[String] ^[Number] ^[Date] ^[Array]`<string \| number \| Date>` | - |
| disabled | 是否禁用 | ^[Boolean] | false |
| allow-clear | 是否允许清除 | ^[Boolean] | false |
| readonly | 是否为只读模式 | ^[Boolean] | false |
| format | 展示日期的格式，参考[字符串解析格式](#字符串解析格式) | ^[String] | HH:mm:ss |
| placeholder | 提示文案 | ^[String] | - |
| size | 输入框尺寸 | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'`| medium |
| popup-container | 弹出框的挂载容器 | ^[String] ^[HTMLElement] | - |
| use12-hours | 12 小时制 | ^[Boolean] | false |
| step |设置 时/分/秒 的选择间隔| ^[Object]`{hour?: number; minute?: number; second?: number;}` | - |
| disabled-hours | 禁用的部分小时选项 | ^[Function]`() => number[]` | - |
| disabled-minutes | 禁用的部分分钟选项 | ^[Function]`(selectedHour?: number) => number[]` | - |
| disabled-seconds | 禁用的部分秒数选项 | ^[Function]`(selectedHour?: number, selectedMinute?: number) => number[]` | - |
| hide-disabled-options | 隐藏禁止选择的选项 | ^[Boolean] | false |
| disable-confirm | 禁用确认步骤，开启后直接点选时间不需要点击确认按钮 | ^[Boolean] | false |
| position | 弹出的位置 | ^[String]`'top' \| 'tl' \| 'tr' \| 'bottom' \| 'bl' \| 'br'` | bl |
| popup-visible | 控制弹出框打开或者关闭 | ^[Boolean] | - |
| default-popup-visible | 弹出框默认打开或者关闭 | ^[Boolean] | false |
| trigger-props | 可以传入 Trigger 组件的参数 | ^[TriggerProps] | - |
| unmount-on-close | 是否在关闭后销毁 dom 结构| ^[Boolean] | false |

### Time-Picker Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| change | 组件值发生改变 | ^[Function]`(timeString: string \| Array<string \| undefined> \| undefined, time: date \| Array<date \| undefined> \| undefined) => void` |
| select | 选择时间但未触发组件值变化 | ^[Function]`(timeString: string \| Array<string \| undefined> \| undefined, time: date \| Array<date \| undefined> \| undefined) => void` |
| clear | 点击清除按钮 | - |
| popup-visible-change | 弹出框展开和收起 | ^[Function]`(visible: boolean) => void` |

### Time-Picker Slots

| 参数名 | 描述 |
| ------ | ---- |
| prefix | 输入框前缀 | - |
| suffix-icon | 输入框后缀图标 | - |
| extra | 额外的页脚 | - |

### 字符串解析格式{#字符串解析格式}

| 格式 | 输出 | 描述 |
| ------ | ---- | ---- |
| YY | 21 | 两位数的年份 |
| YYYY | 2021 | 四位数年份 |
| M | 1-12 | 月份，从 1 开始 |
| MM | 01-12 | 月份，两位数 |
| MMM | Jan-Dec | 缩写的月份名称 |
| MMMM | January-December | 完整的月份名称 |
| D | 1-31 | 月份里的一天 |
| DD | 01-31 | 月份里的一天，两位数 |
| d | 0-6 | 一周中的一天，星期天是 0 |
| dd | Su-Sa | 最简写的一周中一天的名称 |
| ddd | Sun-Sat | 简写的一周中一天的名称 |
| dddd | Sunday-Saturday | 一周中一天的名称 |
| H | 0-23 | 小时 |
| HH | 00-23 | 小时，两位数 |
| h | 1-12 | 小时, 12 小时制 |
| hh | 01-12 | 小时, 12 小时制, 两位数 |
| m | 0-59 | 分钟 |
| mm | 00-59 | 分钟，两位数 |
| s | 0-59 | 秒 |
| ss | 00-59 | 秒，两位数 |
| S | 0-9 | 数百毫秒，一位数 |
| SS | 00-99 | 几十毫秒，两位数 |
| SSS | 000-999 | 毫秒，三位数字 |
| Z | -5:00 | UTC 的偏移量 |
| ZZ | -0500 | UTC 的偏移量，数字前面加上 0 |
| A | AM PM | - |
| a | am pm | - |
| Do | 1st... 3st | 带序号的月份中的某天 |
| X | 1410715640.579 | Unix 时间戳 |
| x | 1410715640579 | Unix 毫秒时间戳 |
