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
| mode | The mode of menu | ^[String]`'vertical' \| 'horizontal' \| 'pop' \| 'popButton'` | vertical |
| effect | Effect of menu | ^[String]`'outset' \| 'inset' \| 'bordered' \| 'outlined' \| 'flat'` | outset |
| level-indent | Indentation between levels | ^[Number] | - |
| auto-open | Expand all multi-level menus by default | ^[Boolean] | false |
| collapsed | Whether to collapse the menu | ^[Boolean] | - |
| default-collapsed | Whether to collapse the menu by default | ^[Boolean] | false |
| collapsed-width | Collapse menu width | ^[Number] | - |
| accordion | Turn on the accordion effect | ^[Boolean] | false |
| auto-scroll-into-view | Whether to automatically scroll the selected item to the visible area | ^[Boolean] | false |
| show-collapse-button | Whether built-in folding button | ^[Boolean] | false |
| selected-keys | The selected menu item key array | ^[Array] | - |
| default-selected-keys | The key array of the menu items selected by default | ^[Array]| [] |
| open-keys | Expanded submenu key array | ^[Array] | - |
| default-open-keys | The default expanded submenu key array | ^[Array] | [] |
| scroll-config | Scroll to the configuration items in the visible area | ^[Object]`{ [key: s tring]: any }` | - |
| trigger-props | Accept all Props of Trigger in pop-up mode | ^[Object]`TriggerProps` | - |
| tooltip-props | Accept all Props of ToolTip in pop-up mode | ^[Object] | - |
| auto-open-selected | Expand the selected menus by default | ^[Boolean] | false |
| breakpoint | Responsive breakpoints | ^[String]`'xxl' \| 'xl' \| 'lg' \| 'md' \| 'sm' \| 'xs'` | - |
| popup-max-height | The maximum height of popover | ^[Boolean]^[Number] | true |

### Menu Events

| Name | Description | Type |
| ------ | ---- | ---- |
| collapse | Triggered when the collapsed state changes | ^[Function]`(collapsed: boolean, type: clickTrigger \| responsive) => void` |
| menu-item-click | Triggered when the menu item is clicked | ^[Function]`(key: string) => void` |
| sub-menu-click | Triggered when the submenu is clicked | ^[Function]`(key: string, openKeys: string[]) => void` |

### Menu Slots

| Name | Description |
| ------ | ---- |
| collapse-icon | Collapse icon |
| expand-icon-right | Icon expand right |
| expand-icon-down | Icon expand down |

### Sub-Menu Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| title | The title of the submenu | ^[String] | - |
| selectable | In the pop-up mode, whether the multi-level menu header is also used as a menu item to support the state such as click to select | ^[Boolean] | false |
| popup | Whether to force the use of pop-up mode, level indicates the level of the current submenu | ^[Boolean]^[Function]`((level: number) => boolean)` | false |
| popup-max-height | The maximum height of popover | ^[Boolean]^[Number] | true |

### Sub-Menu Slots

| Name | Description |
| ------ | ---- |
| title | Title |
| expand-icon-right | Icon expand right |
| expand-icon-down | Icon expand down |
| icon | The icon of menu item |

### Menu-Item-Group Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| title | The title of the menu group | ^[String] | - |

### Menu-Item-Group Slots

| Name | Description |
| ------ | ---- |
| title | Title |

### Menu-Item Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| disabled | Whether to disable | ^[Boolean] | false |

### Menu-Item Slots

| Name | Description |
| ------ | ---- |
| icon | The icon of menu item |
