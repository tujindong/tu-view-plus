# Layout

Handling the overall layout of a page.

## Basic Usage

:::demo src="../examples/layout/basic.vue" title="Basic usage of Layout."

:::

## Customize Button

:::demo src="../examples/layout/custom-icon.vue" title="Setting the trigger property of Menu.Sider, the icon of the collapse button can be customized."

:::

## Customize Collapse Button

:::demo src="../examples/layout/collapsed.vue" title="Setting the trigger property of Menu.Sider to null, the built-in trigger of Sider will not be displayed. At this time, you can customize the collapse button."

:::

## Responsive Sider

:::demo src="../examples/layout/breakpoint.vue" title="The Slider on the left can be set to expand/collapse in conjunction with Menu, and set breakpoint for responsive contraction."

:::

## Resize Sider

:::demo src="../examples/layout/resize.vue" title="By resizeDirections, using the mouse to drag the sidebar to zoom in and out."

:::

## Layout API

### Layout Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| has-sider | Indicates that there is a Sider in the sub-element, which generally does not need to be specified. Used to avoid style flicker when rendering on the server side. | ^[Boolean] | false |

### Layout-Header Slots

| Name | Description |
| ------ | ---- |
| default | Content |

### Layout-Content Slots

| Name | Description |
| ------ | ---- |
| default | Content |

### Layout-Footer Slots

| Name | Description |
| ------ | ---- |
| default | Content |

### Layout-Sider Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| theme | Theme | ^[String]`'dark' \| 'light'` | light |
| collapsed | Current collapsed state | ^[Boolean] | - |
| default-collapsed | The default collapsed state | ^[Boolean] | false |
| collapsible | Whether is collapsible | ^[Boolean] | false |
| width | Width | ^[Boolean] | 200 |
| collapsed-width | Collapsed width | ^[Boolean] | 48 |
| reverse-arrow | Flip and fold the direction of the hint arrow, which can be used when Sider is on the right | ^[Boolean] | false |
| breakpoint | Trigger breakpoints for responsive layout. | ^[String]`'xxl' \| 'xl' \| 'lg' \| 'md' \| 'sm' \| 'xs'` | - |
| resize-directions | Can replace the native `aside` tag with ResizeBox. This is the directions parameter of ResizeBox. | ^[Array]`<'left' \| 'right' \| 'top' \| 'bottom'>[]` | - |
| hide-trigger | Whether to hide the bottom fold trigger | ^[Boolean] | false |

### Layout-Sider Events

| Name | Description | Type |
| ------ | ---- | ---- |
| collapse | Events on expand/collapse. There are two ways to trigger click trigger and responsive feedback | ^[Function]`(collapsed: boolean, type: 'clickTrigger'\|'responsive') => void` |
| breakpoint | Events when a responsive layout breakpoint is triggered | ^[Function]`(collapsed: boolean) => void` |

### Layout-Sider Slots

| Name | Description |
| ------ | ---- |
| trigger | Custom bottom folding trigger. |
