# Select 选择器

当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法

:::demo src="../examples/select/basic.vue" title="输入框的基本用法。"

:::

## 禁用状态

:::demo src="../examples/select/disabled.vue" title="为 tu-select 设置 disabled  属性，则整个选择器不可用。"

:::

## 多选选择器

:::demo src="../examples/select/multiple.vue" title="通过设置 multiple，可以让选择器支持多选。此外通过 max-tag-count 可以设置最多显示的标签个数。"

:::

## 允许清除

:::demo src="../examples/select/allow-clear.vue" title="通过设置 allow-clear，显示清除按钮。"

:::

## 加载中

:::demo src="../examples/select/loading.vue" title="选择框和下拉菜单显示加载中状态。"

:::

## 选择器页头

:::demo src="../examples/select/header.vue" title="自定义下拉菜单的页头。"

:::

## 选择器页脚

:::demo src="../examples/select/footer.vue" title="自定义下拉菜单的页脚。"

:::

## 允许创建

:::demo src="../examples/select/allow-create.vue" title="通过设置 allow-create ，让选择器可以创建选项中不存在的条目。"

:::

## 允许搜索

:::demo src="../examples/select/allow-search.vue" title="通过设置 allow-search ，可以让选择器支持对选项的搜索，配合 filter-option 可以自定义搜索。"

:::

## 下拉菜单滚动

:::demo src="../examples/select/scroll.vue" title="可以通过 dropdown-scroll 监听下拉菜单的滚动事件。或者通过 dropdown-reach-bottom 监听下拉菜单滚动到底部的事件。"

:::

## 远程搜索

:::demo src="../examples/select/remote.vue" title="使用 search 事件进行远程搜索，并改变选项。"

:::

## 分组

:::demo src="../examples/select/group.vue" title="使用 select-group 组件添加分组选项。"

:::

## 自定义选择框展示内容

:::demo src="../examples/select/label.vue" title="通过 #label 插槽可以自定义选择框展示内容。"

:::

## 联动选择框

:::demo src="../examples/select/linkage.vue" title="展示联动选择框的实现方法。"

:::

## 自定义字段名

:::demo src="../examples/select/field-names.vue" title="可以通过 field-names 属性自定义 options 中数据的格式。"

:::

## 虚拟列表

:::demo src="../examples/select/virtual-list.vue" title="虚拟列表的使用方法。"

:::

## 不同尺寸

:::demo src="../examples/select/size.vue" title="选择框分为 mini、small、medium、large 四种尺寸。"

:::

## Select API

### Select Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| multiple | 是否开启多选模式（多选模式默认开启搜索）| ^[Boolean] | false |
| model-value/v-model | 绑定值 | ^[String] ^[Number] ^[Boolean] ^[Object]`Record<string, any>\| (string \| number \| boolean \| Record<string, any>)[]`| - |
| default-value | 默认值（非受控模式）| ^[String] ^[Number] ^[Boolean] ^[Object]`Record<string, any>\| (string \| number \| boolean \| Record<string, any>)[]`| - |
| input-value | 输入框的值 | ^[String] | - |
| default-input-value | 输入框的默认值（非受控模式）| ^[String] | '' |
| size | 选择框的大小 | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| placeholder | 占位符 | ^[String] | - |
| loading | 是否为加载中状态 | ^[Boolean] | false |
| disabled | 是否禁用 | ^[Boolean] | false |
| allow-clear | 是否允许清空 | ^[Boolean] | false |
| allow-search | 是否允许搜索 | ^[Boolean] ^[Object]`{ retainInputValue?: boolean }` | false (single) \| true (multiple) |
| allow-create | 是否允许创建 | ^[Boolean] | false |
| max-tag-count | 多选模式下，最多显示的标签数量。0 表示不限制 | ^[Number] | 0 |
| popup-container | 弹出框的挂载容器 | ^[String] ^[HTMLElement] | - |
| default-active-first-option | 是否在无值时默认选择第一个选项 | ^[Boolean] | true |
| popup-visible | 是否显示下拉菜单 | ^[Boolean] | - |
| default-popup-visible | 弹出框默认是否可见（非受控模式）| ^[Boolean] | false |
| unmount-on-close | 是否在下拉菜单关闭时销毁元素 |  ^[Boolean]  | false |
| filter-option | 是否过滤选项 | ^[Boolean] ^[Function]`((inputValue: string, option: SelectOptionData) => boolean)`|true |
| options | 选项数据 | ^[Array]`(string \| number \| boolean \| SelectOptionData \| SelectOptionGroup)[]` | [] |
| virtual-list-props | 传递虚拟列表属性，传入此参数以开启虚拟滚动 [VirtualListProps](#VirtualListProps)| ^[VirtualListProps] | - |
| trigger-props | 下拉菜单的触发器属性 | ^[TriggerProps] | - |
| format-label | 格式化显示内容 | ^[Function]`(data: SelectOptionData) => string` | - |
| show-extra-options | 是否在下拉菜单中显示额外选项 | ^[Boolean] | true |
| value-key | 用于确定选项键值的属性名 | ^[String] | value |
| search-delay | 触发搜索事件的延迟时 | ^[Number] | 500 |
| limit | 多选时最多的选择个数 | ^[Number] | 0 |
| field-names | 自定义 SelectOptionData 中的字段| ^[SelectFieldNames] | -|
| scrollbar | 是否开启虚拟滚动条 | ^[Boolean] ^[ScrollbarProps] | true |
| show-header-on-empty | 空状态时是否显示header | ^[boolean] | false |
| show-footer-on-empty | 空状态时是否显示footer | ^[boolean] | false |
