# InputTag 标签输入框

用来输入标签。

## 基础用法

:::demo src="../examples/input-tag/basic.vue" title="标签输入框的基本用法。"

:::

## 输入框状态

:::demo src="../examples/input-tag/status.vue" title="输入框有禁用、只读两种状态。"

:::

## 最多展示标签数量

:::demo src="../examples/input-tag/max-count.vue" title="设置最多展示标签数量。"

:::

## 不同尺寸

:::demo src="../examples/input-tag/size.vue" title="输入框分为 mini、small、medium、large 四种尺寸。"

:::

## InputTag API

### InputTag Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| model-value | 绑定值 | ^[Array]`(string \| number \| TagData)[]`| - |
| default-value | 默认值（非受控状态）| ^[Array]`(string \| number \| TagData)[]`| [] |
| input-value | 输入框的值 | ^[String] | - |
| default-input-value | 输入框的默认值（非受控状态）| ^[String] | '' |
| placeholder | 占位符 |^[String] | - |
| disabled | 是否禁用 | ^[Boolean] | false |
| error | 是否为错误状态 | ^[Boolean] | false |
| readonly | 是否为只读模式 | ^[Boolean] | false |
| allow-clear | 是否允许清空 | ^[Boolean] | false |
| size | 输入框的大小| ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| max-tag-count | 最多展示的标签个数，0 表示不限制 | ^[Number] |`0`|
| retain-input-value | 是否保留输入框的内容 | ^[Boolean] | false |
| format-tag | 格式化标签内容 | ^[Function]`(data: TagData) => string` | - |
| unique-value | 是否仅创建唯一的值 | ^[Boolean] | false |
| field-names | 自定义 TagData 中的字段 |^[InputTagFieldNames] | - |

### InputTag Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| change | 值发生改变时触发 | ^[Function]`(value: (string \| number \| TagData)[]) => void` |
| input-value-change | 输入值发生改变时触发 | ^[Function]`(value: string) => void` |
| press-enter | 按下回车键时触发 | ^[Function]`(value: inputValue, event: KeyboardEvent) => void` |
| remove | 点击标签的删除按钮时触发 | ^[Function]`(value: string \| number, event: Event) => void` |
| clear | 点击清除按钮时触发 | ^[Function]`(event: Event) => void` |
| focus | 输入框获取焦点时触发 | ^[Function]`(event: FocusEvent) => void` |
| blur | 输入框失去焦点时触发 | ^[Function]`(event: FocusEvent) => void` |

### InputTag Slots

| 参数名 | 描述 |
| ------ | ---- |
| tag | 输入框标签的显示内容 |
| prefix | 前缀元素 |
| suffix | 后缀元素 |
