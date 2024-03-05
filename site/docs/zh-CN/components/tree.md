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

### Tree Attributes{#TreeAttributes}

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| size | 尺寸 | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| block-node | 节点是否占据一行 | ^[Boolean] | false |
| default-expand-all | 是否默认展开父节点 | ^[Boolean] | true |
| multiple | 是否支持多选 | ^[Boolean] | false |
| checkable | 是否在节点前添加复选框 | ^[Boolean] | false |
| selectable | 是否支持选择 | ^[Boolean] | true |
| check-strictly | 是否取消父子节点关联 | ^[Boolean] | false |
| checked-strategy | 定制回填方式 <br/> all: 返回所有选中的节点  <br/> parent: 父子节点都选中时只返回父节点 <br/> child: 只返回子节点 | ^[String]`'all' \| 'parent' \| 'child'` | all |
| default-selected-keys | 默认选中的树节点 | ^[Array]`<string \| number>` | - |
| selected-keys / v-model | 选中的树节点 | ^[Array]`<string \| number>` | - |
| default-checked-keys | 默认选中复选框的树节点 | ^[Array]`<string \| number>` | - |
| checked-keys / v-model | 选中复选框的树节点 | ^[Array]`<string \| number>` | - |
| default-expanded-keys | 默认展开的节点 | ^[Array]`<string \| number>` | - |
| expanded-keys / v-model | 展开的节点 | ^[Array]`<string \| number>` | - |
| data | 传入 data, 生成对应的树结构| ^[Array]`TreeNodeData[]`| [] |
| field-names | 指定节点数据中的字段名 | ^[Object]`TreeFieldNames` | - |
| show-line | 是否展示连接线 | ^[Boolean] | false |
| load-more | 异步加载数据的回调，返回一个 Promise | ^[Function]`(node: TreeNodeData) => Promise<void>` | - |
| draggable | 是否可以拖拽 | ^[Boolean] | false |
| allow-drop | 拖拽时是否允许在某节点上释放 | ^[Function]`(options: {  dropNode: TreeNodeData;  dropPosition: -1 \| 0 \| 1;}) => boolean` | - |
| virtual-list-props | 传递虚拟列表属性，传入此参数以开启虚拟滚动，[VirtualListProps](#VirtualListProps)| ^[Object]`VirtualListProps` | - |
| default-expand-selected | 是否默认展开已选中节点的父节点 | ^[Boolean] | false |
| default-expand-checked | 是否默认展开已选中复选框节点的父节点 | ^[Boolean] | false |
| auto-expand-parent | 是否自动展开已展开节点的父节点 | ^[Boolean] | true |
| half-checked-keys / v-model |半选状态的节点.仅在 checkable 且 checkStrictly 时生效| ^[Array]`<string \| number>`| - |
|only-check-leaf | 开启后 checkedKeys 只处理叶子节点，父节点状态由子节点决定（仅在 checkable 且 checkStrictly 为 false 时生效）| ^[Boolean] | false |
| animation | 是否开启展开时的过渡动效 | ^[Boolean]| true |
| action-on-node-click | 点击节点的时候触发的动作 | ^[String] | - |

### Tree Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| select | 点击树节点时触发 | ^[Function]`(selectedKeys: Array<string \| number>, data: { selected?: boolean; selectedNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event; } ) => void` |
| check | 点击树节点复选框时触发。 | ^[Function]`(checkedKeys: Array<string \| number>, data: { checked?: boolean; checkedNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event; halfCheckedKeys: (string \| number)[]; halfCheckedNodes: TreeNodeData[]; } ) => void` |
| expand | 展开/关闭 | ^[Function]`(expandKeys: Array<string \| number>, data: { expanded?: boolean; expandNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event; }) => void` |
| drag-start | 节点开始拖拽 | - |
| drag-end | 节点结束拖拽 | ^[Function]`(ev: DragEvent, node: TreeNodeData) => void` |
| drag-over | 节点被拖拽至可释放目标 | ^[Function]`(ev: DragEvent, node: TreeNodeData) => void` |
| drag-leave |节点离开可释放目标 |  ^[Function]`(ev: DragEvent, node: TreeNodeData) => void` |
| drop | 节点在可释放目标上释放 | ^[Function]`(data: { e: DragEvent; dragNode: TreeNodeData; dropNode: TreeNodeData; dropPosition: number; }) => void` |

### Tree Methods

| 方法名 | 描述 | 参数 | 返回值 |
| ------ | ---- | ---- | ---- |
| scrollIntoView | 虚拟列表滚动某个元素 | ^[Function]`(options: { index?: number; key?: number \| string; align: 'auto' \| 'top' \| 'bottom'}) => void` | - |
| getSelectedNodes | 获取选中的节点 | - | TreeNodeData[] |
| getCheckedNodes | 获取选中复选框的节点。支持传入 checkedStrategy，没有传则取组件的配置。 | ^[Function]`(options: {checkedStrategy?: 'all' \| 'parent' \| 'child'; includeHalfChecked?: boolean;}) => void` |TreeNodeData[] |
| getHalfCheckedNodes | 获取复选框半选的节点 | - | TreeNodeData[] |
| getExpandedNodes | 获取展开的节点 | - | TreeNodeData[] |
| checkAll | 设置全部节点的复选框状态 | ^[Function]`(checked: boolean) => void` | - |
| checkNode | 设置指定节点的复选框状态 | ^[Function]`(key: TreeNodeKey \| TreeNodeKey[], checked: boolean, onlyCheckLeaf: boolean ) => void` | - |
| selectAll | 设置全部节点的选中状态 | ^[Function]`(selected: boolean) => void` | - |
| selectNode | 设置指定节点的选中状态 | ^[Function]`(key: TreeNodeKey \| TreeNodeKey[], selected: boolean ) => void` | - |
| expandAll | 设置全部节点的展开状态 | ^[Function]`(expanded: boolean) => void` | - |
| expandNode | 设置指定节点的展开状态 | ^[Function]`(key: TreeNodeKey \| TreeNodeKey[], expanded: boolean) => void` | - |

### Tree Slots

| 参数名 | 描述 | 参数 |
| ------ | ---- | ---- |
| title | 标题 | - |
| extra | 渲染额外的节点内容 | - |
| drag-icon | 定制 drag 图标 | ^[node]`TreeNodeData` |
| loading-icon | 定制 loading 图标 | - |
| switcher-icon | 定制 switcher 图标 | - |
| icon | 定制节点图标 | ^[node]`TreeNodeData` |

### TreeNodeData

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | ---- |
| key | 唯一标示 | ^[String]^[Number] | - |
| title | 该节点显示的标题 | ^[String] | - |
| selectable | 是否允许选中 | ^[Boolean] | false |
| disabled | 是否禁用节点 | ^[Boolean] | false |
| disableCheckbox | 是否禁用复选框 | ^[Boolean] | false |
| checkable | 是否显示多选框 | ^[Boolean] | false |
| draggable | 是否可以拖拽 | ^[Boolean] | false |
| isLeaf | 是否是叶子节点。动态加载时有效 | ^[Boolean] | false |
| icon | 节点的图标 | ^[Function]`() => VNode` | - |
| switcherIcon | 定制 switcher 图标，优先级大于 tree | ^[Function]`() => VNode` | - |
| loadingIcon | 定制 loading 图标，优先级大于 tree | ^[Function]`() => VNode`| - |
| dragIcon | 定制 drag 图标，优先级大于 tree | ^[Function]`() => VNode` | - |
| children | 子节点 | ^[Array]`TreeNodeData[]` | - |

### TreeFieldNames

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | ---- |
| key | 指定 key 在 TreeNodeData 中的字段名 | ^[String] | key |
| title | 指定 title 在 TreeNodeData 中的字段名 | ^[String] | title |
| disabled | 指定 disabled 在 TreeNodeData 中的字段名 | ^[String] | disabled |
| children | 指定 children 在 TreeNodeData 中的字段名 | ^[String] | children |
| isLeaf | 指定 isLeaf 在 TreeNodeData 中的字段名 |^[String] | isLeaf |
| disableCheckbox | 指定 disableCheckbox 在 TreeNodeData 中的字段名 | ^[String] | disableCheckbox |
| checkable | 指定 checkable 在 TreeNodeData 中的字段名 | ^[String] | checkable |
| icon | 指定 icon 在 TreeNodeData 中的字段名 | ^[String] | checkable |

### VirtualListProps{#VirtualListProps}

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| height | 可视区域高度| ^[Number]^[String] | - |
| threshold | 开启虚拟滚动的元素数量阈值，当数据数量小于阈值时不会开启虚拟滚动。| ^[Number] | - |
| isStaticItemHeight | （已废除）元素高度是否是固定的。 | ^[Boolean] | false |
| fixedSize | 元素高度是否是固定的。| ^[Boolean] | false |
| estimatedSize | 元素高度不固定时的预估高度。| ^[Number] | - |
| buffer | 视口边界外提前挂载的元素数量。| ^[Number] | 10 |
