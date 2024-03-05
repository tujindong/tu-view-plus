# TreeSelect 树选择框

可以对树形结构数据进行选择。

## 基础用法

:::demo src="../examples/tree-select/basic.vue" title="最简单的用法。"

:::

## 双向绑定

:::demo src="../examples/tree-select/control.vue" title="选中值支持双向绑定。"

:::

## 设置 value 格式

:::demo src="../examples/tree-select/label-in-value.vue" title="labelInValue 为 true 时，value 格式为： { label: string, value: string }。"

:::

## 动态加载

:::demo src="../examples/tree-select/load-more.vue" title="可以通过 loadMore 进行动态加载。此时可设置 isLeaf 来标示叶子节点。"

:::

## 搜索

:::demo src="../examples/tree-select/search.vue" title="设置 allow-search 为 true 启用搜索功能。动态加载时候只能在已加载数据中进行搜索。默认的关键字搜索是从value字段匹配。也可以传入 filterTreeNode自定义过滤方式。"

:::

## 远程搜索

:::demo src="../examples/tree-select/search-remote.vue" title="监听 search 事件，在事件处理函数中获取数据并更新 treeData。 自定义搜索逻辑时，建议关闭内部过滤逻（disable-filter 为 true ），以免影响自定义结果。"

:::

## 多选

:::demo src="../examples/tree-select/multiple.vue" title="多选。"

:::

## 复选框多选

:::demo src="../examples/tree-select/checkable.vue" title="可以通过设置 treeCheckable 属性开启复选框勾选。"

:::

## 定制回填方式

:::demo src="../examples/tree-select/checked-strategy.vue" title="可以通过 treeCheckStrategy 属性定制回填方式。"

:::

## 下拉框的页头和页脚

:::demo src="../examples/tree-select/dropdown-slots.vue" title="自定义树选择下拉框的页头和页脚。"

:::

## 自定义触发元素

:::demo src="../examples/tree-select/trigger-element.vue" title="自定义触发元素。"

:::

## 控制下拉框的展开收起

:::demo src="../examples/tree-select/popup-visible.vue" title="通过 popupVisible (支持 v-model) 控制下拉框的展开和收起。"

:::

## 自定义 TreeData 的字段名称

:::demo src="../examples/tree-select/field-names.vue" title="通过 fieldNames 字段可以自定义 TreeData 的字段名。"

:::

## 虚拟列表

:::demo src="../examples/tree-select/virtual.vue" title="通过指定 treeProps.virtualListProps 来开启虚拟列表，在大量数据时获得高性能表现。"

:::

## 回退选项

:::demo src="../examples/tree-select/fallback.vue" title="使用 fallback-option 自定义找不到选项的值的显示效果，默认找不到选项就展示值本身。用户可以将其设定为 false 来隐藏那些没有匹配到节点数据的值。"

:::

## 不同尺寸

:::demo src="../examples/tree-select/size.vue" title="设置 size 可以使用四种尺寸（small, default, large, huge）的选择器。"

:::

## TreeSelect API

### TreeSelect Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| disabled | 是否禁用 |  ^[Boolean] | false |
| loading | 是否为加载中状态 |  ^[Boolean] | false |
| size | 选择框的大小 | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| border | 是否显示边框 |  ^[Boolean] | true |
| allow-search | 是否允许搜索 | ^[Boolean]^[Object]`{ retainInputValue?: boolean }` | false |
| allow-clear | 是否允许清除 | ^[Boolean] | false |
| placeholder | 提示文案 | ^[String] | - |
| max-tag-count | 最多显示的标签数量，仅在多选模式有效 | ^[Number] | - |
| multiple | 是否支持多选 |  ^[Boolean] | false |
| default-value | 默认值 | ^[String]^[Number]^[Array]`<string \| number \| LabelValue>` | - |
| model-value / v-model | 绑定值 | ^[String]^[Number]^[Array]`<string \| number \| LabelValue>` | - |
| field-names | 指定节点数据中的字段名 | ^[Object]`TreeFieldNames` | - |
| data | 数据 | ^[Array]`TreeNodeData[]` | [] |
| label-in-value | 设置value格式。默认是string，设置为true时候，value格式为：'{ label: string, value: string }' | ^[Boolean] | false |
| tree-checkable | 是否展示复选框 | ^[Boolean] | false |
| tree-check-strictly | 父子节点是否关联 |  ^[Boolean] | false |
| tree-checked-strategy | 定制回显方式 | ^[String]`'all' \| 'parent' \| 'child'` | all |
| tree-props | 可以接受所有 [Tree](./tree.md#TreeAttributes) 组件的Props | ^[Object]`Partial<TreeProps>` | - |
| trigger-props | 可以接受所有 [Trigger](./trigger.md#TriggerAttributes) 组件的Props | ^[Object]`Partial<TriggerProps>` | - |
| popup-visible / v-model | 弹出框是否可见 |  ^[Boolean] | - |
| default-popup-visible | 默认弹出框是否可见 |  ^[Boolean] | false |
| dropdown-style | 下拉框样式 | ^[Object]`CSSProperties` | - |
| dropdown-class-name | 下拉框样式 class | ^[String]^[Array]`string[]` | - |
| filter-tree-node | 自定义节点过滤函数 | ^[Function]`(searchKey: string, nodeData: TreeNodeData) => boolean` | - |
| load-more | 动态加载数据 | ^[Function]`(nodeData: TreeNodeData) => Promise<void>` | - |
| disable-filter | 禁用内部过滤逻辑 |  ^[Boolean] | false |
| popup-container | 弹出框的挂载容器 | ^[String]^[HTMLElement] | - |
| fallback-option | 为 value 中找不到匹配项的 key 定义节点数据 |  ^[Boolean]^[Function]`((key: number \| string) => TreeNodeData \| boolean)` | true |
| selectable | 设置可选择的节点，默认全部可选 | ^[Boolean] | true |
| scrollbar | 是否开启虚拟滚动条 | ^[Boolean]^[Object]`ScrollbarProps` | true |
| show-header-on-empty | 空状态时是否显示header |  ^[Boolean] | false |
| show-footer-on-empty | 空状态时是否显示footer |  ^[Boolean] | false |

### TreeSelect Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| change | 值改变时触发 | ^[Function]`(value: string \| number \| LabelValue \| Array<string \| number> \| LabelValue[] \| undefined) => void` |
| popup-visible-change | 下拉框显示状态改变时触发 | ^[Function]`(visible: boolean) => void` |
| search | 搜索值变化时触发 | ^[Function]`(searchKey: string) => void` |
| clear | 点击清除时触发 | - |

### TreeSelect Slots

| 参数名 | 描述 | 参数 |
| ------ | ---- | ---- |
| trigger | 自定义触发元素 | - |
| prefix | 前缀 | - |
| label | 自定义选择框显示 | data: mixed |
| header| 自定义下拉框页头 | - |
| loader | 定制加载中显示的内容 | - |
| empty | 定制空数据展示 | - |
| footer | 自定义下拉框页脚 | - |
| tree-slot-extra | 定制 tree 组件的渲染额外节点内容 | - |
| tree-slot-title | 定制 tree 组件的节点标题 | - |
| tree-slot-icon | 定制 tree 组件的节点图标 | node: TreeNodeData |
| tree-slot-switcher-icon | 定制 tree 组件的 switcher 图标 | - |
