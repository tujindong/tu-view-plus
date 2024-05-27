# Menu

A versatile menu for navigation.

## Horizontal

:::demo src="../examples/menu/basic.vue" title="By setting mode to horizontal, you can use the horizontal menu."

:::

## Sider

:::demo src="../examples/menu/side.vue" title="Side menu is used in conjunction with the layout component."

:::

## Effects

:::demo src="../examples/menu/effect.vue" title="Menu provide five different themes: outset、inset、bordered、outlined and flat. Using effect to change, default is outset."

:::

## Collapsed

:::demo src="../examples/menu/collapse-control.vue" title="Use collapsed to specify the menu to collapse."

:::

## Responsive Collapsed

:::demo src="../examples/menu/breakpoint.vue" title="set breakpoint for responsive contraction."

:::

## Sub Menu

:::demo src="../examples/menu/sub-menu.vue" title="Multiple sub-items can be embedded in the menu, and the items that are opened by default can be set through openKeys."

:::

## Group Menu

:::demo src="../examples/menu/group.vue" title="using tu-menu-group to group."

:::

## Floating Menu

:::demo src="../examples/menu/pop.vue" title="Specify mode as pop to use floating menu."

:::

## Floating Button Menu

:::demo src="../examples/menu/pop-button.vue" title="By setting mode to popButton, you can use a button group style floating menu."

:::

## Menu API

### Menu Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| theme | Menu theme | ^[String]`'light' \| 'dark'`| light |
| mode | 菜单的模式 | ^[String]`'vertical' \| 'horizontal' \| 'pop' \| 'popButton'` | vertical |
| level-indent | 层级之间的缩进量 | ^[Number] | - |
| auto-open | 默认展开所有多级菜单 | ^[Boolean] | false |
| collapsed | 是否折叠菜单 | ^[Boolean] | - |
| default-collapsed | 默认是否折叠菜单 | ^[Boolean] | false |
| collapsed-width | 折叠菜单宽度 | ^[Number] | - |
| accordion | 开启手风琴效果 | ^[Boolean] | false |
| auto-scroll-into-view | 是否自动滚动选中项目到可见区域 | ^[Boolean] | false |
| show-collapse-button | 是否内置折叠按钮 | ^[Boolean] | false |
| selected-keys | 选中的菜单项 key 数组 | ^[Array] | - |
| default-selected-keys | 默认选中的菜单项 key 数组 | ^[Array]| [] |
| open-keys | 展开的子菜单 key 数组 | ^[Array] | - |
| default-open-keys | 默认展开的子菜单 key 数组 | ^[Array] | [] |
| scroll-config | 滚动到可见区域的配置项 | ^[Object]`{ [key: s tring]: any }` | - |
| trigger-props | 弹出模式下可接受所有 Trigger 的 Props| ^[Object]`TriggerProps` | - |
| tooltip-props | 弹出模式下可接受所有 ToolTip 的 Props | ^[Object] | - |
| auto-open-selected | 默认展开选中的菜单 | ^[Boolean] | false |
| breakpoint | 响应式的断点 | ^[String]`'xxl' \| 'xl' \| 'lg' \| 'md' \| 'sm' \| 'xs'` | - |
| popup-max-height | 弹出框的最大高度 | ^[Boolean]^[Number] | true |

### Menu Events

| Name | Description | Type |
| ------ | ---- | ---- |
| collapse | 折叠状态改变时触发 | ^[Function]`(collapsed: boolean, type: clickTrigger \| responsive) => void` |
| menu-item-click | 点击菜单项时触发 | ^[Function]`(key: string) => void` |
| sub-menu-click | 点击子菜单时触发 | ^[Function]`(key: string, openKeys: string[]) => void` |

### Menu Slots

| Name | Description |
| ------ | ---- |
| collapse-icon | 折叠图标 |
| expand-icon-right | 向右展开的图标 |
| expand-icon-down | 向下展开的图标 |

### Sub-Menu Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| key | 唯一标志 | ^[String] | - |
| title | 子菜单的标题 | ^[String] | - |
| selectable | 弹出模式下，是否将多级菜单头也作为一个菜单项，支持点击选中等状态 | ^[Boolean] | false |
| popup | 是否强制使用弹出模式，level表示当前子菜单的层级 | ^[Boolean]^[Function]`((level: number) => boolean)` | false |
| popup-max-height | 弹出框的最大高度 | ^[Boolean]^[Number] | true |

### Sub-Menu Slots

| Name | Description |
| ------ | ---- |
| title | 标题 |
| expand-icon-right | 向右展开的图标 |
| expand-icon-down | 向下展开的图标 |
| icon | 菜单的图标 |

### Menu-Item-Group Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| title | 菜单组的标题 | ^[String] | - |

### Menu-Item-Group Slots

| Name | Description |
| ------ | ---- |
| title | 标题 |

### Menu-Item Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| key | 唯一标志 | ^[String] | - |
| disabled | 是否禁用 | ^[Boolean] | false |

### Menu-Item Slots

| Name | Description |
| ------ | ---- |
| icon | 菜单的图标 |
