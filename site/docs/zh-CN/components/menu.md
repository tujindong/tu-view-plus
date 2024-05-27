# Menu 菜单

提供导航功能的菜单。

## 顶部菜单

:::demo src="../examples/menu/basic.vue" title="设置 mode 为 horizontal 时，使用水平菜单。"

:::

## 侧边菜单

:::demo src="../examples/menu/side.vue" title="侧边菜单。"

:::

## 主题

:::demo src="../examples/menu/effect.vue" title="Menu 组件提供不同主题：outset、inset、bordered、outlined 和 flat。通过设置 effect 属性来改变主题，默认为 outset"

:::

## 可折叠菜单

:::demo src="../examples/menu/collapse-control.vue" title="通过 collapsed 来指定菜单收起。"

:::

## 响应式收缩

:::demo src="../examples/menu/breakpoint.vue" title="设置 breakpoint 可触发响应式收缩。"

:::

## 子菜单

:::demo src="../examples/menu/sub-menu.vue" title="菜单内可以嵌入多个子项，通过 openKeys 可以设置默认打开的子项。"

:::

## 菜单分组

:::demo src="../examples/menu/group.vue" title="多个子项，使用 tu-menu-group 标签进行分组。"

:::

## 悬浮菜单

:::demo src="../examples/menu/pop.vue" title="指定 mode 为 pop 可以使用悬浮菜单。"

:::

## 悬浮按钮菜单

:::demo src="../examples/menu/pop-button.vue" title="指定 mode 为 popButton 使用按钮组样式的悬浮菜单。"

:::

## Menu API

### Menu Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| theme | 菜单的主题 | ^[String]`'light' \| 'dark'`| light |
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

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| collapse | 折叠状态改变时触发 | ^[Function]`(collapsed: boolean, type: clickTrigger \| responsive) => void` |
| menu-item-click | 点击菜单项时触发 | ^[Function]`(key: string) => void` |
| sub-menu-click | 点击子菜单时触发 | ^[Function]`(key: string, openKeys: string[]) => void` |

### Menu Slots

| 参数名 | 描述 |
| ------ | ---- |
| collapse-icon | 折叠图标 |
| expand-icon-right | 向右展开的图标 |
| expand-icon-down | 向下展开的图标 |

### Sub-Menu Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| key | 唯一标志 | ^[String] | - |
| title | 子菜单的标题 | ^[String] | - |
| selectable | 弹出模式下，是否将多级菜单头也作为一个菜单项，支持点击选中等状态 | ^[Boolean] | false |
| popup | 是否强制使用弹出模式，level表示当前子菜单的层级 | ^[Boolean]^[Function]`((level: number) => boolean)` | false |
| popup-max-height | 弹出框的最大高度 | ^[Boolean]^[Number] | true |

### Sub-Menu Slots

| 参数名 | 描述 |
| ------ | ---- |
| title | 标题 |
| expand-icon-right | 向右展开的图标 |
| expand-icon-down | 向下展开的图标 |
| icon | 菜单的图标 |

### Menu-Item-Group Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| title | 菜单组的标题 | ^[String] | - |

### Menu-Item-Group Slots

| 参数名 | 描述 |
| ------ | ---- |
| title | 标题 |

### Menu-Item Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| key | 唯一标志 | ^[String] | - |
| disabled | 是否禁用 | ^[Boolean] | false |

### Menu-Item Slots

| 参数名 | 描述 |
| ------ | ---- |
| icon | 菜单的图标 |
