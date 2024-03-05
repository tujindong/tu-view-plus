# Image 

Used to show and preview pictures.

## Basic

:::demo src="../examples/image/basic.vue" title="When you need to view a picture, simply set the src property to get a component with preview picture function."

:::

## Show caption

:::demo src="../examples/image/caption.vue" title="By setting title and description, the title and description of the picture can be displayed inside or at the bottom of the picture, and the display position is controlled by footerPosition."

:::

## Extra operations

:::demo src="../examples/image/extra-action.vue" title="The component provides a named slot extra for users to customize additional content in the footer."

:::

## Error state

:::demo src="../examples/image/error.vue" title="Content displayed when the image fails to load."

:::

## Loading

:::demo src="../examples/image/loading.vue" title="By default, the loading effect is not displayed, and the default loading effect can be displayed by setting showLoader to true. If the default loading effect does not meet the requirements, you can also set the loading style yourself through the named slot loader."

:::

## Progressive loading

:::demo src="../examples/image/progressive-loading.vue" title="When you need to display a large image, you can pass a smaller image to loader to display it when the original image is not successfully loaded to simulate progressive loading."

:::

## Preview action bar

:::demo src="../examples/image/custom-preview-actions.vue" title="The function buttons on the control preview control bar can be sorted and filtered through actionLayout.In addition, the preview component preview provides the actions slot to support custom additional action items, and also provides the action item component"

:::

## Multi-image preview

:::demo src="../examples/image/preview-group.vue" title="Use <preview-group> to wrap the <image> component to preview multiple images."

:::

## Use preview alone

:::demo src="../examples/image/component-preview.vue" title="preview can be used alone, you need to control visible."

:::

## Use PreviewGroup alone

:::demo src="../examples/image/component-preview-group.vue" title="<preview-group> can be used alone, you need to control visible by yourself. The image display is divided into two scenes: First, the first image to be displayed can be specified by defaultCurrent. Second, to control which image is currently displayed by current."

:::

## Popup container

:::demo src="../examples/image/preview-popup-container.vue" title="You can specify the parent node of the preview mounted by popupContainer."

:::

## Image API

### Image Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| src | image src | ^[String] | - |
| width | image width | ^[String] ^[Number] | - |
| height | image height | ^[String] ^[Number] | - |
| title | title | ^[String] | - |
| description | description, will be displayed at the bottom. if alt has no value, it will be set to alt | ^[String] | - |
| fit | indicate how the image should be resized to fit its container | ^[String]`'contain' \| 'cover' \| 'fill' \| 'none' \| 'scale-down'` | - |
| alt | text description of the image | ^[String] | - |
| hide-footer | whether to hide footer | ^[Boolean] ^[String]`'never'` | false |
| footer-position | the position shown at the bottom | ^[String]`'inner' \| 'outer'` | inner |
| show-loader | whether to show the loading effect | ^[Boolean] | false |
| preview | whether to enable preview | ^[Boolean] | true |
| preview-visible (v-model) | control the open state of the preview, can be used in conjunction with previewVisibleChange | ^[Boolean]  | - |
| default-preview-visible | the default open state of the preview | ^[Boolean]  | false |
| preview-props | preview configuration items (all options are optional) ImagePreviewProps | ^[ImagePreviewProps] | - |
| footer-class | the class name of the bottom display area | ^[String] ^[Array] ^[Object] | - |

### Image Events

| Name | Description | Type |
| ------ | ---- | ---- |
| preview-visible-change | preview opening and closing events | ^[Function]`(visible: boolean) => void` |

### Image Slots

| Name | Description |
| ------ | ---- |
| error | customize error content. |
| error-icon | customize the icon of error content. |
| loader | customize loading effect. |
| extra | extra content at the bottom |

### Preview Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| src | image src | ^[String] | - |
| visible (v-model) | whether is visible | ^[Boolean] | - |
| default-visible | default visibility | ^[Boolean] | false |
| mask-closable | whether to close the modal when mask is clicked | ^[Boolean] | true |
| closable | whether to show close button | ^[Boolean] | true |
| actions-layout | layout of action list | ^[Array]`<string>` | [ 'fullScreen', 'rotateRight', 'rotateLeft', 'zoomIn', 'zoomOut', 'originalSize'] |
| popup-container | set the mount point of the pop-up box, the same as the to of teleport, the default value is document.body | ^[HTMLElement ] ^[String] | - |
| esc-to-close | whether to support the ESC key to close the preview | ^[Boolean] | true |
| wheel-zoom | whether to enable wheel zoom | ^[Boolean] | true |
| keyboard | whether to enable keyboard shortcuts | ^[Boolean] | true |
| default-scale | default scale | ^[Number] | 1 |
| zoom-rate | zoom rate, only for scroll zoom | ^[Number] | 1.1 |

### Preview Events

| Name | Description | Type |
| ------ | ---- | ---- |
| close | close event | - |

### Preview Slots

| Name | Description |
| ------ | ---- |
| actions | customize additional action items |

### Preview Group Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| src-list | picture list (after setting this property, the picture information of a-image subcomponent will no longer be collected) | ^[Array]`<string>` | - |
| current (v-model) | the index of the currently displayed image | ^[Number] | - |
| default-current | the index of the first image shown | ^[Number] | 0 |
| infinite | whether to loop infinitely | ^[Boolean] | false |
| visible (v-model) | whether is visible | ^[Boolean] | - |
| default-visible | default visibility | ^[Boolean] | false |
| mask-closable | whether to close the modal when mask is clicked | ^[Boolean] | true |
| closable | whether to show close button | ^[Boolean] | true |
| actions-layout | layout of action list | ^[Array]`<string>` | [ 'fullScreen', 'rotateRight', 'rotateLeft', 'zoomIn', 'zoomOut', 'originalSize'] |
| popup-container | set the mount point of the pop-up box, the same as the to of teleport, the default value is document.body | ^[HTMLElement ] ^[String] | - |

### Preview Group Events

| Name | Description | Type |
| ------ | ---- | ---- |
| change | image switch | - |
| visible-change | preview visibility change | - |

### Preview Group Slots

| Name | Description |
| ------ | ---- |
| actions | customize additional action items |

### Preview Action Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| name | the name of the action | ^[String] | - |
| disabled | whether to disable the action | ^[Boolean] | false |

## FAQ

### Property Description for preview

1.Keyboard Shortcuts - keyboard Setting this property to true enables corresponding keyboard shortcuts based on the actions-layout settings.
 - esc：close preview
 - left: switch to the previous image
 - right: switch to the next image
 - up: zoom in on the image
 - down: zoom out on the image
 - space: restore to original size

2.Default Scaling - defaultScale This property defines the default scaling factor for images. For instance, when set to 1.5, images will be enlarged by 1.5 times their original size by default.

3.Scroll Zoom Rate - zoomSate The zoomSate property controls the scaling rate of images during scrolling. Taking 1.3 as an example, each scrolling action will result in an image zoom-in or zoom-out by a factor of 1.3.