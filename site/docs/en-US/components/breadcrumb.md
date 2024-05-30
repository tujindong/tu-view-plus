# Breadcrumb

A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.

## Basic Usage

:::demo src="../examples/breadcrumb/basic.vue" title="Basic usage of breadcrumb."

:::

## Custom Separator

:::demo src="../examples/breadcrumb/separator.vue" title="Customize the delimiter through the separator attribute or slot. Bread crumb child items can also be customized through the separator attribute or slot delimiter, and the priority is higher than the parent item."

:::

## Custom Size

:::demo src="../examples/breadcrumb/size.vue" title="Customize the breadcrumb size by specifying the style."

:::

## Custom Icon

:::demo src="../examples/breadcrumb/icon.vue" title="You can use custom icons in the content."

:::

## Routes

:::demo src="../examples/breadcrumb/routes.vue" title="Transfer breadcrumb data through routes. If you want to customize bread crumbs, it is recommended to use the a-breadcrumb-item component. the path is bound with the href attribute of the a tag by default, you can customize the rendering through the item slot."

:::

## Dropdown Menu

:::demo src="../examples/breadcrumb/dropdown.vue" title="Use droplist or routes settings dropdown menu"

:::

## Ellipsis

:::demo src="../examples/breadcrumb/ellipsis.vue" title="Use max-count to specify the maximum number of breadcrumbs to render, and the excess will be displayed as an ellipsis."

:::

## Breadcrumb API

### Breadcrumb Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| max-count | Maximum number of breadcrumbs displayed (0 means no limit) | ^[Number] | 0 |
| routes | Setting routes | ^[Array]`BreadcrumbRoute[]` |  - |
| separator | Separator text | ^[String]^[Number] | - |
| custom-url | Custom link address | ^[Function]`(paths: string[]) => string` | - |

### Breadcrumb Slots

| Name | Description |
| ------ | ---- |
| more-icon | Custom more icon |
| item-render | Effective when setting routes, custom render breadcrumbs |
| separator | Custom separator |

### Breadcrumb-Item Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| separator | Separator text | ^[String]^[Number] | - |
| droplist | Dropdown content | ^[Object]`BreadcrumbRoute['children']` | - |
| dropdown-props | Dropdown props | ^[Object]`DropDownProps` | - |

### Breadcrumb-Item Slots

| Name | Description |
| ------ | ---- |
| droplist | Custom droplist |
| separator | Custom separator |

### BreadcrumbRoute

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| label | Breadcrumb name | ^[String] | - |
| path | Jump path (a tag href value) | ^[String] | - |
| children | Dropdown menu items | ^[Array]`{label: string; path: string;}[]`| - |
