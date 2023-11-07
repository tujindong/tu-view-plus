# Notification

Displays a global notification message at a corner of the page.

## Methods

- Global method：Tu View Plus has added a global method $notification。 for app.config.globalProperties. So in a vue instance you can call Notification。 like what we did in this page.

- Local import：in this case you should call TuNotification(options). We have also registered methods for different types, e.g. TuNotification.success(options). You can call TuNotification.closeAll() to manually close all the instances.

## Basic usage

:::demo src="../examples/notification/basic.vue" title="Basic usage of notification."

:::

## Types

:::demo src="../examples/notification/types.vue" title="The message type of the notification."

:::

## Position

:::demo src="../examples/notification/position.vue" title="The position attribute defines which corner Notification slides in. It can be top-right, top-left, bottom-right or bottom-left. Defaults to top-right."

:::

## With offset

:::demo src="../examples/notification/offsetting.vue" title="Set the offset attribute to customize Notification is offset from the edge of the screen. Note that every Notification instance of the same moment should have the same offset."

:::

## Closable

:::demo src="../examples/notification/manual-close.vue" title="By default, the notification automatically closes after 4500ms, but by setting duration you can control its duration. Specifically, if set to 0, it will not close automatically. Note that duration receives a Number in milliseconds."

:::

## Hide close button

:::demo src="../examples/notification/hide-close.vue" title="Set the showClose attribute to false so the notification cannot be closed by the user."

:::

## Use HTML

:::demo src="../examples/notification/raw-html.vue" title="Set dangerouslyUseHTMLString to true and message will be treated as an HTML string."

:::

## Notification API

### Notification Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| title | title | ^[String] | - |
| message | description text | ^[String] ^[VNode] | - |
| dangerouslyUseHTMLString | whether message is treated as HTML string | ^[Boolean] | false |
| type | notification type | ^[String]`'success' \| 'warning' \| 'info' \| 'error' \| ''` | - |
| icon | custom icon component. It will be overridden by type | ^[string] ^[Component] | - |
| custom-class | custom class name for Notification | ^[String] | '' |
| duration | duration before close. It will not automatically close if set 0 | ^[Number] | - |
| position | custom position | ^[String]`'tr' \| 'tl' \| 'br' \| 'bl'` | tr |
| show-close | whether to show a close button | ^[Boolean] | true |
| on-close | callback function when closed | ^[Function]`() => void` | - |
| on-click | callback function when notification clicked | ^[Function]`() => void` | - |
| offset | offset from the top edge of the screen. Every Notification instance of the same moment should have the same offset | ^[Number] | 0 |
| appendTo | set the root element for the notification, default to document.body | ^[string] ^[HTMLElement] | - |
| zIndex | initial zIndex | ^[Number] | - |

### Notification Events

| Name | Description | Type |
| ------ | ---- | ---- |
| close | close the Notification | ^[Function]`() => void` |
