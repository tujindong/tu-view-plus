# Modal

Informs users while preserving the current page state.

## Methods

- Global method：Tu View Plus has added a global method $modal for app.config.globalProperties. So in a vue instance you can call Modal like what we did in this page.

- Local import：in this case you should call TuMessage(options). We have also registered methods for different types, e.g. TuMessage.success(options). You can call TuMessage.closeAll() to manually close all the instances.

- Use component：use tu-modal component.

## Basic usage

:::demo src="../examples/modal/basic.vue" title="The basic usage of the modal."

:::

## Types

:::demo src="../examples/modal/types.vue" title="There are four types of notice: info, success, warning, error, and only a confirmation button is provided to close the notice. The message defaults to enable simple and hideCancel by default, if you want to cancel, you can set it again."

:::

## Nested

:::demo src="../examples/modal/nested.vue" title="Open a new modal in the modal."

:::

## Async close

:::demo src="../examples/modal/async.vue" title="Asynchronous shutdown can be implemented more concisely through on-before-ok"

:::

## Modal width

:::demo src="../examples/modal/width.vue" title="Set width is auto to make the dialog box adapt to the width"

:::

## Draggable

:::demo src="../examples/modal/draggable.vue" title="Enables the draggable property, which allows the user to drag the dialog."

:::

## Fullscreen

:::demo src="../examples/modal/fullscreen.vue" title="Enable the fullscreen property to make the dialog fill the entire container."

:::

## Sizes

:::demo src="../examples/modal/size.vue" title="Besides default size, tu-modal component provides three additional sizes for you to choose among different scenarios. Use attribute size to set additional sizes with mini, small, large."

:::

## Modal API

### Modal Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| visible(v-model) | whether the modal is visible | ^[Boolean] | - |
| default-visible | whether the modal is visible by default (uncontrolled state) | ^[Boolean] | false |
| width | the width of the dialog box, if not set, the width value in the style will be used | ^[Number] ^[String] | - |
| top | the height from the top of the dialog box. It does not take effect when the center display is turned on. | ^[Number] ^[String] | - |
| mask | whether to show the mask | ^[Boolean] | true |
| title | title | ^[String] | - |
| title-align | horizontal alignment of the title | ^[String]`'start' \| 'center'` | center |
| align-center | whether the dialog box is displayed in the center | ^[Boolean] | true |
| unmount-on-close | whether to uninstall the node when close | ^[Boolean] | false |
| mask-closable | whether to close the modal when click the mask | ^[Boolean] | true |
| hide-cancel | whether to hide the cancel button | ^[Boolean] | false |
| simple | whether to enable simple mode | ^[Boolean] | false |
| closable | whether to show the close button | ^[Boolean] | true |
| ok-text | the content of the confirm button | ^[String] | - |
| cancel-text | the content of the cancel button | ^[String] | - |
| ok-loading | whether the confirm button is in the loading state | ^[Boolean] | false |
| ok-button-props | props of confirm button | ^[ButtonProps] | - |
| cancel-button-props | props of cancel button | ^[ButtonProps] | - |
| footer | whether to show the footer | ^[Boolean] | true |
| render-to-body | whether the modal is mounted under the body element | ^[Boolean] | true |
| popup-container | mount container for modal| ^[String] ^[HTMLElement] | body |
| mask-style | mask style | ^[String] ^[Object]`CSSProperties \| CSSProperties[] \| string[]` | - |
| modal-class | the classname of the modal| ^[String] ^[Array] | - |
| modal-style | modal style | ^[String] ^[Object]`CSSProperties \| CSSProperties[] \| string[]` | - |
| on-before-ok | the callback function before the ok event is triggered. If false is returned, subsequent events will not be triggered, and done can also be used to close asynchronously. | ^[Function]`(done: (closed: boolean) => void) => void \| boolean \| Promise<void \| boolean>` | - |
| on-before-cancel | the callback function before the cancel event is triggered. If it returns false, no subsequent events will be triggered. | ^[Function]`() => boolean` | - |
| esc-to-close | whether to support the ESC key to close the dialog | ^[Boolean] | true |
| draggable | whether to support drag | ^[Boolean] | false |
| fullscreen | whether to enable full screen | ^[Boolean] | false |
| mask-animation-name | mask layer animation name | ^[String] | - |
| modal-animation-name | modal animation name | ^[String]  | - |
| body-class | the classname of the modal | ^[String] ^[Array] | - |
| body-style | modal style | ^[String] ^[Object]`CSSProperties \| CSSProperties[] \| string[]` | - |

### Modal Events

| Name | Description | Type |
| ------ | ---- | ---- |
| ok | triggered when the OK button is clicked | ^[Function]`(event: MouseEvent) => void` |
| cancel | triggered when the cancel/close button is clicked | ^[Function]`(event: MouseEvent \| KeyboardEvent) => void` |
| open | triggered after the modal is opened (the animation ends) | - |
| close | triggered after the modal is closed (the animation ends) | - |
| before-open | triggered before dialog is opened | - |
| before-close | triggered before dialog is closed | - |

### Modal Slots

| Name | Description |
| ------ | ---- |
| title | title | - |
| footer | footer | - |
