# Tree 树

对于文件夹、分类目录、组织架构等层级较多的内容，树可以清楚显示他们的层级关系，并具有展开、收起、选择等交互功能。

## 基础用法

:::demo src="../examples/tree/basic.vue" title="为每个节点赋予全局唯一的 key（必填项），title 为该节点显示的内容。"

:::

## 节点占一行

:::demo src="../examples/tree/block-node.vue" title="节点占据一整行。"

:::

## 多选

:::demo src="../examples/tree/multiple.vue" title="Tree 设置 multiple 属性为true，可以启用多选。"

:::

## 带复选框的树

:::demo src="../examples/tree/checkable.vue" title="为 Tree 添加 checkable 属性即可使树具有复选框功能，可以用 defaultCheckedKeys 指定复选框默认选中的节点。"

:::

## 双向绑定

:::demo src="../examples/tree/control.vue" title="selectedKeys 、 checkedKeys 、 expandedKeys 属性均可受控，不仅支持 v-model ，还可以在对应的 select / check / expand 事件中自行控制如何更新属性值。"

:::

## 动态加载

:::demo src="../examples/tree/load-more.vue" title="动态加载节点。"

:::

## 拖拽

:::demo src="../examples/tree/draggable.vue" title="可拖拽的树节点。"

:::

## 设置回填方式

:::demo src="../examples/tree/checked-strategy.vue" title="为 Tree 添加 checkedStrategy 可以设置选中时的回填方式。"

:::

## 显示连接线

:::demo src="../examples/tree/show-line.vue" title="为 Tree 添加 showLine 属性即可使树具有连接线。"

:::

## 定制节点图标

:::demo src="../examples/tree/node-icon.vue" title="节点图标可以通过 tree 的 icon 插槽全局指定，也可以通过节点的 icon 属性单独指定。"

:::

## 定制组件图标

:::demo src="../examples/tree/icons.vue" title="节点的图标 loadingIcon, switcherIcon，同时支持在 tree 和 node 两个纬度上定制，其中 node 的优先级较高。"

:::

## 定制额外节点

:::demo src="../examples/tree/render-extra.vue" title="Tree 提供了名为 extra 的 Slot, 可以在节点上定制额外的内容。"

:::

## 虚拟列表

:::demo src="../examples/tree/virtual.vue" title="通过指定 virtualListProps 来开启虚拟列表，在大量数据时获得高性能表现。"

:::

## 搜索树

:::demo src="../examples/tree/search.vue" title="展示如何实现搜索树的效果。"

:::

## 自定义 data 的字段名称

:::demo src="../examples/tree/field-names.vue" title="通过 fieldNames 字段可以自定义 data 的字段名。"

:::

## 不同尺寸

:::demo src="../examples/tree/size.vue" title="不同尺寸的树。"

:::

## Tree API

### Tree Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |