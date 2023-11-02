# Drawer

The floating layer panel that slides out from the screen edge.

## Methods

- Global method：Tu View Plus has added a global method $drawer for app.config.globalProperties. So in a vue instance you can call Drawer like what we did in this page.

- Local import：in this case you should call TuDrawerBox(options). We have also registered methods for TuDrawerBox, e.g. TuDrawerBox.open(options).

- Use component：use tu-drawer component.

## Basic usage

:::demo src="../examples/drawer/basic.vue" title="Click the trigger button to slide out the drawer from the right, click the mask area to close."

:::

## Position

:::demo src="../examples/drawer/position.vue" title="Customize the position and click the trigger button to slide out the drawer from the corresponding position."

:::

## Custom node

:::demo src="../examples/drawer/custom-node.vue" title="Customize the content by slot, or set the appropriate properties to control whether it is shown or hidden."

:::

## Nested

:::demo src="../examples/drawer/nested.vue" title="Open a new drawer in the drawer."

:::

## Popup container

:::demo src="../examples/drawer/popup-container.vue" title="You can use popup-container to set the mount position of the pop-up layer node."

:::

## Sizes

:::demo src="../examples/drawer/size.vue" title="Besides default size, tu-drawer component provides three additional sizes for you to choose among different scenarios. Use attribute size to set additional sizes with mini, small, large."

:::

## Drawer API

### Drawer Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| v-model | whether the drawer is visible | ^[Boolean] | false |
| default-visible | whether the drawer is visible by default (uncontrolled mode) | ^[Boolean]  | false |
| placement | where the drawer is placed | ^[String]`'top' \| 'right' \| 'bottom' \| 'left'`| right |
| title | the title of drawer | ^[String] | - |
| mask | whether to show the mask | ^[Boolean] | true |
| mask-closable | click on the mask layer to be able to close | ^[Boolean] | true |
| closable | whether to show the close button | ^[Boolean] | true |
| ok-text | the content of the ok button | ^[String] | - |
| cancel-text | the content of the cancel button | ^[String] | - |
| ok-loading | ehether the ok button is in the loading state | ^[Boolean] | false |
| ok-button-props | props of confirm button | ^[ButtonProps] | - |
| cancel-button-props | props of cancel button | ^[ButtonProps] | - |
| unmount-on-close | whether to uninstall the node when close | ^[Boolean] | false |
| width | the width of the drawer (only available when placement is right, left) | ^[Number] ^[String] | 250 |
| height | the height of the drawer (only available when placement is top, bottom) | ^[Number] ^[String] | 250 |
| popup-container | mount container for popup | ^[String] ^[HTMLElement] | body |
| drawer-style | drawer style | ^[String] ^[Object]`CSSProperties \| CSSProperties[] \| string[]` | - |
| on-before-ok| the callback function before the ok event is triggered. If false is returned, subsequent events will not be triggered, and done can also be used to close asynchronously | ^[Function]`(done: (closed: boolean) => void) => void \| boolean \| Promise<void \| boolean>` | - |
| on-before-cancel| the callback function before the cancel event is triggered. If it returns false, no subsequent events will be triggered | ^[Function]`(done: (closed: boolean) => void) => void \| boolean \| Promise<void \| boolean>` | - |
| esc-to-close | whether to support the ESC key to close the dialog | ^[Boolean] | true |
| render-to-body | whether the drawer is mounted under the body element | ^[Boolean] | true |
| header | whether to display high-quality content | ^[Boolean] | true |
| footer | whether to display the bottom content
 | ^[Boolean] | true |
| hide-cancel | whether to hide the cancel button | ^[Boolean] | false |

### Drawer Events

| Name | Description | Type |
| ------ | ---- | ---- |
| ok | triggered when the OK button is clicked. | ^[Function]`(event: MouseEvent) => void` |
| cancel | triggered when the cancel or close button is clicked. | ^[Function]`(event: MouseEvent \| KeyboardEvent) => void` |
| open | triggered after the drawer is opened (the animation ends) | - |
| close | triggered when the drawer is closed (the animation ends) | - |
| before-open | triggered before drawer is opened | - |
| before-close | triggered before drawer is closed | - |

### Modal Slots

| Name | Description |
| ------ | ---- |
| header | header | - |
| title | title | - |
| footer | footer | - |
