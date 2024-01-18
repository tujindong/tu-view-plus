# Date-picker 时间选择框

选择日期。支持年、月、周、日类型，支持范围选择等。

## 基础用法

:::demo src="../examples/date-picker/basic.vue" title="日期选择框的基础使用。"

:::

## 年份选择框

:::demo src="../examples/date-picker/year.vue" title="年份选择框的基础使用。"

:::

## 月份选择框

:::demo src="../examples/date-picker/month.vue" title="月份选择框的基础使用。"

:::

## 季度选择框

:::demo src="../examples/date-picker/quarter.vue" title="季度选择框的基础使用。"

:::

## 周选择框

:::demo src="../examples/date-picker/week.vue" title="周选择框的基础使用。"

:::

## 范围选择器

:::demo src="../examples/date-picker/range.vue" title="范围输入器的基础使用。"

:::

## 带时间的日期选择

:::demo src="../examples/date-picker/show-time.vue" title="使用 showTime 可以使用带时间的日期选择。"

:::

## 默认值

:::demo src="../examples/date-picker/default-value.vue" title="日期输入器有默认值的情况。"

:::

## 不可选取的时间

:::demo src="../examples/date-picker/disabled-date.vue" title="使用 disabledDate 可以禁用某些日期。使用 disabledTime 可以禁用时间，需要配合 showTime 使用。"

:::

## 预设时间快捷选择

:::demo src="../examples/date-picker/shortcuts.vue" title="使用 shortcuts 可以预设时间快捷选择。"

:::

## 定制预设范围位置

:::demo src="../examples/date-picker/shortcuts-position.vue" title="使用 shortcutsPosition 可以将预设时间快捷选择放到左边、右边或者底部。"

:::

## 动态控制选取范围

:::demo src="../examples/date-picker/disabled-date-advance.vue" title="根据选择的值来控制选取的范围，使用 onSelect 配合 disabledDate 来实现。"

:::

## 额外的页脚

:::demo src="../examples/date-picker/extra.vue" title="在浮层中加入额外的页脚，以满足某些定制信息的需求。"

:::

## 禁用

:::demo src="../examples/date-picker/disabled.vue" title="禁用状态。"

:::

## 定制日期单元格

:::demo src="../examples/date-picker/custom-date-render.vue" title="利用具名插槽 cell 可以定制日期单元格。"

:::

## 双向绑定

:::demo src="../examples/date-picker/control.vue" title="通过 v-model 实现值的双向绑定。"

:::

## 自定义触发元素

:::demo src="../examples/date-picker/custom-trigger-element.vue" title="自定义触发元素。"

:::

## 只使用面板

:::demo src="../examples/date-picker/panel-only.vue" title="只用选择面板，不显示输入框。"

:::

## 尺寸

:::demo src="../examples/date-picker/sizes.vue" title="设置 size 可以使用四种尺寸（mini small medium large）的输入框。"

:::

## Common API

### Common Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| locale | 国际化配置，用于覆盖locale中的 datePicker 字段 | ^[Record]`<string, any>`| - |
| hide-trigger | 没有触发元素，只显示选择面板 | ^[Boolean] | false |
| allow-clear | 是否允许清除 |^[Boolean]| true |
| readonly| 是否为只读 | ^[Boolean] | false |
| error | 是否为错误状态 | ^[Boolean] | false |
| size | 日期选择器的尺寸 | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'`| medium |
| shortcuts | 预设时间范围快捷选择 | ^[Array]`ShortcutType[]`| [] |
| shortcuts-position | 预设范围在面板上的位置，默认放在下方，侧边一般用于大量预设时间的场景 | ^[String]`'left' \| 'bottom' \| 'right'` | bottom |
| position | 弹出的框的位置 | ^[String]`'top' \| 'tl' \| 'tr' \| 'bottom' \| 'bl' \| 'br'`| bl |
| popup-visible | 控制弹出框的打开或者关闭状态 | ^[Boolean]| - |
| default-popup-visible | 默认弹出框是打开或者关闭 | ^[Boolean]| false |
| trigger-props|可以传入Trigger 组件的参数| ^[TriggerProps]| - |
| unmount-on-close | 是否在隐藏的时候销毁DOM结构 | ^[Boolean] | false |
| placeholder | 提示文案 | ^[String] | - |
| disabled|是否禁用 | ^[Boolean] | false |
| disabled-date | 不可选取的日期 | ^[Function]`(current?: Date) => boolean` | - |
| disabled-time | 不可选取的时间 | ^[Function]`(current: Date) => DisabledTimeProps` | - |
| picker-value(v-model) | 面板显示的日期 | ^[Date]^[String]^[Number] | - |
| default-picker-value | 面板默认显示的日期 | ^[Date]^[String]^[Number]  | - |
| popup-container | 弹出框的挂载容器 | ^[String]^[HTMLElement]^[Null]^[Undefined] | - |
| value-format | 值的格式，对 value、defaultValue、pickerValue、defaultPickerValue 以及事件中的返回值生效，支持设置为时间戳，Date 和字符串（参考[字符串解析格式](#字符串解析格式)）。如果没有指定，将格式化为字符串，格式同 format。|  ^[Timestamp]^[Date]^[String] | - |
| preview-shortcut | 是否要预览快捷选择的结果 | ^[Boolean] | true |
| show-confirm-btn | 是否显示确认按钮，showTime 为 true 的时候始终显示。| ^[Boolean] | false |
| disabled-input | 是否禁止键盘输入日期 | ^[Boolean] | false |
| abbreviation | 是否启用缩写 | ^[Boolean] | true |

### 字符串解析格式{#字符串解析格式}