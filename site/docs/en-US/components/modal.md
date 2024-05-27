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
| visible(v-model) | Whether the modal is visible | ^[Boolean] | - |
| default-visible | Whether the modal is visible by default (uncontrolled state) | ^[Boolean] | false |
| width | The width of the dialog box, if not set, the width value in the style will be used | ^[Number] ^[String] | - |
| top | The height from the top of the dialog box. It does not take effect when the center display is turned on. | ^[Number] ^[String] | - |
| mask | Whether to show the mask | ^[Boolean] | true |
| title | Title | ^[String] | - |
| title-align | Horizontal alignment of the title | ^[String]`'start' \| 'center'` | center |
| align-center | Whether the dialog box is displayed in the center | ^[Boolean] | true |
| unmount-on-close | Whether to uninstall the node when close | ^[Boolean] | false |
| mask-closable | Whether to close the modal when click the mask | ^[Boolean] | true |
| hide-cancel | Whether to hide the cancel button | ^[Boolean] | false |
| simple | Whether to enable simple mode | ^[Boolean] | false |
| closable | Whether to show the close button | ^[Boolean] | true |
| ok-text | The content of the confirm button | ^[String] | - |
| cancel-text | The content of the cancel button | ^[String] | - |
| ok-loading | Whether the confirm button is in the loading state | ^[Boolean] | false |
| ok-button-props | Props of confirm button | ^[ButtonProps] | - |
| cancel-button-props | Props of cancel button | ^[ButtonProps] | - |
| footer | Whether to show the footer | ^[Boolean] | true |
| render-to-body | Whether the modal is mounted under the body element | ^[Boolean] | true |
| popup-container | Mount container for modal| ^[String] ^[HTMLElement] | body |
| mask-style | Mask style | ^[String] ^[Object]`CSSProperties \| CSSProperties[] \| string[]` | - |
| modal-class | The classname of the modal| ^[String] ^[Array] | - |
| modal-style | Modal style | ^[String] ^[Object]`CSSProperties \| CSSProperties[] \| string[]` | - |
| on-before-ok | The callback function before the ok event is triggered. If false is returned, subsequent events will not be triggered, and done can also be used to close asynchronously. | ^[Function]`(done: (closed: boolean) => void) => void \| boolean \| Promise<void \| boolean>` | - |
| on-before-cancel | The callback function before the cancel event is triggered. If it returns false, no subsequent events will be triggered. | ^[Function]`() => boolean` | - |
| esc-to-close | Whether to support the ESC key to close the dialog | ^[Boolean] | true |
| draggable | Whether to support drag | ^[Boolean] | false |
| fullscreen | Whether to enable full screen | ^[Boolean] | false |
| mask-animation-name | Mask layer animation name | ^[String] | - |
| modal-animation-name | Modal animation name | ^[String]  | - |
| body-class | The classname of the modal | ^[String] ^[Array] | - |
| body-style | Modal style | ^[String] ^[Object]`CSSProperties \| CSSProperties[] \| string[]` | - |

### Modal Events

| Name | Description | Type |
| ------ | ---- | ---- |
| ok | Triggered when the OK button is clicked | ^[Function]`(event: MouseEvent) => void` |
| cancel | Triggered when the cancel/close button is clicked | ^[Function]`(event: MouseEvent \| KeyboardEvent) => void` |
| open | Triggered after the modal is opened (the animation ends) | - |
| close | Triggered after the modal is closed (the animation ends) | - |
| before-open | Triggered before dialog is opened | - |
| before-close | Triggered before dialog is closed | - |

### Modal Slots

| Name | Description |
| ------ | ---- |
| title | Title |
| footer | Footer |
