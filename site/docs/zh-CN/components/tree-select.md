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

### TreeSelect Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |

### TreeSelect Slots

| 参数名 | 描述 |
| ------ | ---- |