# Dropdown 下拉菜单

## 何时使用

将动作或菜单折叠到下拉菜单中。

## 基础用法

:::demo src="./basic.vue" title="下拉菜单的基本用法。默认情况下，点击触发菜单的元素显示下拉菜单。"

:::

## 弹出方向

:::demo src="./position.vue" title="通过 position 支持指定 6 种弹出方位，分别是：top、 tl、 tr、 bottom、 bl、 br。"

:::

## 触发方式

:::demo src="./trigger.vue" title="通过 trigger 指定触发方式，可悬停或点击方式触发。"

:::

## 按钮下拉菜单

:::demo src="./dropdown-button.vue" title="可以使用 tu-dropdown-button 组件用来展示右边是额外相关功能菜单的按钮。"

:::

## 分组下拉菜单

:::demo src="./dropdown-group.vue" title="可以使用 tu-dropdown-group 元素实现分组效果。"

:::

## 多级菜单

:::demo src="./dropdown-submenu.vue" title="带有多级菜单的下拉框。"

:::

## 右键菜单

:::demo src="./context-menu.vue" title="移入区域后，可点击鼠标右键触发。"

:::

## 弹出框高度

:::demo src="./max-height.vue" title="通过 popupMaxHeight 手动设置弹出框最大高度。默认为 true，当菜单条数较多，弹出框为默认高度并显示滚动条，设置为 false 将完整显示所有菜单选项。"

:::

## 不同尺寸

:::demo src="./size.vue" title="tu-dropdown 组件提供除了默认值 medium 以外的三种尺寸。"

额外的尺寸：large、small、mini，通过设置 size 属性来配置它们。

:::

## Dropdown API

<!-- Dropdown -->

### Dropdown Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :-----: |
| popup-visible(v-model) | 弹出框是否可见 | ^[Boolean] | - |
| default-popup-visible | 弹出框默认是否可见（非受控模式）| ^[Boolean] | false |
| trigger | 触发方式 | ^[String]`'hover' \| 'click' \| 'focus' \| 'contextMenu'` | click |
| position | 弹出位置 | ^[String]`'top' \| 'tl' \| 'tr' \| 'bottom' \| 'bl' \| 'br'` | bottom |
| popup-container | 弹出框的挂载容器 | ^[String] ^[HTMLElement] | - |
| hide-on-select | 是否在用户选择后隐藏弹出框 | ^[Boolean] | true |
| size | 尺寸 | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |

### Dropdown Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| popup-visible-change | 下拉框显示状态发生改变时触发 | ^[Function]`(value: boolean) => void` |
| select | 用户选择时触发 | ^[Function]`(value: string \| number \| Record<string, any> \| undefined) => void`|

### Dropdown Slots

| 参数名 | 描述 |
| ------ | ---- |
| content | 内容 | - |
| footer | 页脚 | - |

<!-- Dropdown-Item -->

### Dropdown-Item Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :-----: |
| value | 选项值 | ^[String] ^[Number] ^[Object] | - |
| disabled | 是否禁用 | ^[Boolean] | false |

### Dropdown-Item Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| click | 点击按钮时触发 | ^[Function]`(evt: MouseEvent) => void` |

### Dropdown-Item Slots

| 参数名 | 描述 |
| ------ | ---- |
| icon | 图标 | - |

<!-- Dropdown-Group -->

### Dropdown-Group Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :-----: |
| title | 分组标题 | ^[String]  | - |

### Dropdown-Group Slots

| 参数名 | 描述 |
| ------ | ---- |
| title | 分组标题 | - |

<!-- Dropdown-Submenu -->
### Dropdown-Submenu Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :-----: |
| value | 选项值 | ^[String] ^[Number] | - |
| disabled | 是否禁用 | ^[Boolean] | false |
| trigger | 触发方式 | ^[String]`'hover' \| 'click'`|`'click'` |
| position | 弹出位置 | ^[String]`'rt' \| 'lt'`|`'rt'` |
| popup-visible(v-model) | 弹出框是否可见 | ^[Boolean] | - |
| default-popup-visible | 弹出框默认是否可见（非受控模式）| ^[Boolean] | false |
| option-props | 自定义选项属性 | ^[Object] | - |

### Dropdown-Submenu Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| popup-visible-change | 下拉框显示状态发生改变时触发 | ^[Function]`(value: boolean) => void` |

### Dropdown-Submenu Slots

| 参数名 | 描述 |
| ------ | ---- |
| icon | 图标 | - |
| content | 子菜单内容 | - |
| footer | 页脚 | - |

<!-- Dropdown-Button -->
### Dropdown-Button Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :-----: |
| popup-visible(v-model) | 弹出框是否可见 | ^[Boolean] | - |
| default-popup-visible | 弹出框默认是否可见（非受控模式）| ^[Boolean] | false |
| trigger | 触发方式 | ^[String]`'hover' \| 'click' \| 'focus' \| 'contextMenu'` | click |
| position | 弹出位置 | ^[String]`'top' \| 'tl' \| 'tr' \| 'bottom' \| 'bl' \| 'br'` | bottom |
| popup-container | 弹出框的挂载容器 | ^[String] ^[HTMLElement] | - |
| disabled | 是否禁用 | ^[Boolean] | false |
| type | 类型 | ^[String]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'text'` | - |
| size | 尺寸 | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| button-props | 按钮属性 | ^[ButtonProps] | - |
| hide-on-select | 是否在用户选择后隐藏弹出框 | ^[Boolean]  | true |

### Dropdown-Button Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| popup-visible-change | 下拉框显示状态发生改变时触发 | ^[Function]`(value: boolean) => void` |
| select | 用户选择时触发 | ^[Function]`(value: string \| number \| Record<string, any> \| undefined) => void`|
| click | 点击按钮时触发 | ^[Function]`(evt: MouseEvent) => void` |

### Dropdown-Submenu Slots

| 参数名 | 描述 |
| ------ | ---- |
| icon | 按钮图标 |
| content | 内容 |
