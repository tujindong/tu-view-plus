# Message

Used to show feedback after an activity.

## Methods

- Global method：Tu View Plus has added a global method $message for app.config.globalProperties. So in a vue instance you can call Message like what we did in this page.

- Local import：in this case you should call TuMessage(options). We have also registered methods for different types, e.g. TuMessage.success(options). You can call TuMessage.closeAll() to manually close all the instances.

## Basic usage

:::demo src="../examples/message/basic.vue" title="Displays at the top, and disappears after 3 seconds."

:::

## Types

:::demo src="../examples/message/types.vue" title="Used to show the feedback of Success, Warning, Message and Error activities."

:::

## Closable

:::demo src="../examples/message/closable.vue" title="A default Message cannot be closed manually. If you need a closable message, you can set showClose field. Message has a controllable duration. Default duration is 3000 ms, and it won not disappear when set to 0."

:::

## Centered text

:::demo src="../examples/message/centered-content.vue" title="Use the center attribute to center the text."

:::

## Custom icon

:::demo src="../examples/message/custom-icon.vue" title="Use the icon attribute to set header icon."

:::

## Use HTML string

:::demo src="../examples/message/raw-html.vue" title="Set dangerouslyUseHTMLString to true and message will be treated as an HTML string."

:::

## Grouping

:::demo src="../examples/message/grouping.vue" title="Set grouping to true and the same content of message will be merged."

:::

## Message API

### Message Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| message | Message text | ^[String] ^[VNode] ^[Function]`() => VNode` | - |
| type | Message type | ^[String]`'' \| 'success' \| 'warning' \| 'info' \| 'error'` | '' |
| icon | Custom icon component | ^[String] ^[Component] | - |
| dangerouslyUseHTMLString | Whether message is treated as HTML string | ^[Boolean] | false |
| customClass | Custom class name for Message | ^[String] | '' |
| duration | Display duration, millisecond. If set to 0, it will not turn off automatically | ^[Number] | - |
| showClose | Whether to show a close button | ^[Boolean] | false |
| center | Whether to center the text | ^[Boolean] | false |
| onClose | Callback function when closed with the message instance as the parameter | ^[Function]`() => void` | - |
| offset | Set the distance to the top of viewport | ^[Number] | 16 |
| appendTo | Set the root element for the message, default to document.body | ^[String] ^[HTMLElement] | - |
| grouping | Merge messages with the same content, type of VNode message is not supported | ^[Boolean] | false |
| repeatNum | The number of repetitions, similar to badge, is used as the initial number when used with grouping | ^[Number] | 1 |

### Message Events

Message and this.$message returns the current Message instance. To manually close the instance, you can call close on it.

| Name | Description | Type |
| ------ | ---- | ---- |
| close | Close the Message | ^[Function]`() => void` |
