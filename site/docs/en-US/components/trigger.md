# Trigger

Used to add hover, click, focus and other events to the element.

## Basic usage

:::demo src="../examples/trigger/basic.vue" title="Basic usage of trigger."

:::

## Nested

:::demo src="../examples/trigger/nested.vue" title="Open a new pop-up box in the pop-up box."

:::

## Follow mouse

:::demo src="../examples/trigger/point.vue" title="Setting the align-point attribute make the pop-up layer appear at the mouse position."

:::

## Scroll container

:::demo src="../examples/trigger/scroll.vue" title="Setting update-at-scroll attribute to listen to the containers scrolling."

:::

## Show arrow

:::demo src="../examples/trigger/arrow.vue" title="Using show-arrow attribute, you can display the default arrow element."

:::

## With offset

:::demo src="../examples/trigger/translate.vue" title="Setting the popup-translate attribute to customize pop-up box is offset from basic position."

:::

## Trigger API

### Trigger Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :-----: |
| v-model | Whether the popup is visible | ^[Boolean] | - |
| default-popup-visible | Whether the popup is visible by default (uncontrolled mode) | ^[Boolean] | false |
| trigger | Trigger method | ^[String]`'hover' \| 'click' \| 'focus' \| 'contextMenu'` | hover |
| position | Popup position | ^[String]`'top' \| 'tl' \| 'tr' \| 'bottom' \| 'bl' \| 'br' \| 'left' \| 'lt' \| 'lb' \| 'right' \| 'rt' \| 'rb'`| bottom |
| disabled | Whether the trigger is disabled | ^[Boolean] | false |
| popup-offset | Whether the trigger is disabled | ^[Number] | 0 |
| popup-translate | The moving distance of the popup | ^[TriggerPopupTranslate] | - |
| show-arrow | Whether the popup shows an arrow | ^[Boolean] | false |
| align-point | Whether the popup follows the mouse | ^[Boolean] | false |
| popup-hover-stay | Whether to keep the popup displayed when the trigger is moved out and moved into the popup | ^[Boolean] | true |
| blur-to-close | Whether to close the popup when the trigger loses focus | ^[Boolean] | true |
| click-to-close | Whether to close the popup when the trigger is clicked | ^[Boolean] | true |
| click-outside-to-close | Whether to close the popup when clicking on the outer area | ^[Boolean] | true |
| unmount-on-close | Whether to uninstall the popup node when closing | ^[Boolean] | true |
| content-class | The class name of the popup content | ^[String] ^[Array] ^[Object] | - |
| content-style | The style of the popup content | ^[CSSProperties] | - |
| arrow-class | The class name of the popup arrow | ^[String] ^[Array] ^[Object] | - |
| arrow-style | The style of the popup arrow | ^[CSSProperties]` | - |
| popup-style | The style of the popup | ^[CSSProperties]` | - |
| animation-name | The name of the popup animation |  ^[String] | fade-in |
| duration | The duration of the popup animation | ^[Number] ^[Object]`number\| { enter: number; leave: number;}` | -|
| mouse-enter-delay | Delay trigger time of mouseenter event (ms) | ^[Number] | 100 |
| mouse-leave-delay | Delay trigger time of mouseleave event (ms) | ^[Number] | 100 |
| focus-delay | Delay trigger time of focus event (ms) | ^[Number] | 0 |
| auto-fit-popup-width | Whether to set the width of the popup to the width of the trigger | ^[Boolean] | false |
| auto-fit-popup-min-width | Whether to set the minimum width of the popup to the trigger width | ^[Boolean] | false |
| auto-fix-position | When the size of the trigger changes, whether to recalculate the position of the popup | ^[Boolean] | true |
| popup-container | Mount container for popup | ^[String] ^[HTMLElement] | - |
| update-at-scroll | Whether to automatically adjust the position of the popup to update at scroll | ^[Boolean] | true |
| auto-fit-position | Whether to automatically adjust the position of the popup to fit the window size | ^[Boolean] | true |
| render-to-body | Whether to mount under the body element | ^[Boolean] | true |
| prevent-focus | Whether to prevent elements in the pop-up layer from gaining focus when clicked | ^[Boolean] | false |

### Trigger Events

| Name | Description | Type |
| ------ | ---- | ---- |
| popup-visible-change | Emitted when the status of the popup changes | ^[Function]`(value: boolean) => void` |
| show | Triggered after the trigger is shown (the animation ends) | - |
| hide | Triggered after the popup is hidden (the animation ends) | - |

### Trigger Slots

| Name | Description | Type |
| ------ | ---- | ---- |
| content | Content | - |

## FAQ

### About the mount location of the pop-up box

The popup box is mounted on the body element by default. If you want to modify the mounted element, you can use the popup-container attribute to specify it. At the same time, you need to pay attention to ensure that the location of the mounted element can be accurately located. Generally, you can Add position: relative style for mount elements.

In the micro-frontend project, it is necessary to ensure that the mounting position of the sub-application is accurate, you can add position: relative to the body style of the sub-application
