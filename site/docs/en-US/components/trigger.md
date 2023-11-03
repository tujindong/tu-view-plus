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
| v-model | whether the popup is visible | ^[Boolean] | - |
| default-popup-visible | whether the popup is visible by default (uncontrolled mode) | ^[Boolean] | false |
| trigger | trigger method | ^[String]`'hover' \| 'click' \| 'focus' \| 'contextMenu'` | hover |
| position | popup position | ^[String]`'top' \| 'tl' \| 'tr' \| 'bottom' \| 'bl' \| 'br' \| 'left' \| 'lt' \| 'lb' \| 'right' \| 'rt' \| 'rb'`| bottom |
| disabled | whether the trigger is disabled | ^[Boolean] | false |
| popup-offset | whether the trigger is disabled | ^[Number] | 0 |
| popup-translate | the moving distance of the popup | ^[TriggerPopupTranslate] | - |
| show-arrow | whether the popup shows an arrow | ^[Boolean] | false |
| align-point | whether the popup follows the mouse | ^[Boolean] | false |
| popup-hover-stay | whether to keep the popup displayed when the trigger is moved out and moved into the popup | ^[Boolean] | true |
| blur-to-close | whether to close the popup when the trigger loses focus | ^[Boolean] | true |
| click-to-close | whether to close the popup when the trigger is clicked | ^[Boolean] | true |
| click-outside-to-close | whether to close the popup when clicking on the outer area | ^[Boolean] | true |
| unmount-on-close | whether to uninstall the popup node when closing | ^[Boolean] | true |
| content-class | the class name of the popup content | ^[String] ^[Array] ^[Object] | - |
| content-style | the style of the popup content | ^[CSSProperties] | - |
| arrow-class | the class name of the popup arrow | ^[String] ^[Array] ^[Object] | - |
| arrow-style | the style of the popup arrow | ^[CSSProperties]` | - |
| popup-style | the style of the popup | ^[CSSProperties]` | - |
| animation-name | the name of the popup animation |  ^[String] | fade-in |
| duration | the duration of the popup animation | ^[Number] ^[Object]`number\| { enter: number; leave: number;}` | -|
| mouse-enter-delay | delay trigger time of mouseenter event (ms) | ^[Number] | 100 |
| mouse-leave-delay | delay trigger time of mouseleave event (ms) | ^[Number] | 100 |
| focus-delay | delay trigger time of focus event (ms) | ^[Number] | 0 |
| auto-fit-popup-width | whether to set the width of the popup to the width of the trigger | ^[Boolean] | false |
| auto-fit-popup-min-width | whether to set the minimum width of the popup to the trigger width | ^[Boolean] | false |
| auto-fix-position | when the size of the trigger changes, whether to recalculate the position of the popup | ^[Boolean] | true |
| popup-container | mount container for popup | ^[String] ^[HTMLElement] | - |
| update-at-scroll | whether to automatically adjust the position of the popup to update at scroll | ^[Boolean] | true | ^[Boolean] | false |
| auto-fit-position | whether to automatically adjust the position of the popup to fit the window size | ^[Boolean] | true |
| render-to-body | whether to mount under the body element | ^[Boolean] | true |
| prevent-focus | whether to prevent elements in the pop-up layer from gaining focus when clicked | ^[Boolean] | false |

### Trigger Events

| Name | Description | Type |
| ------ | ---- | ---- |
| popup-visible-change | emitted when the status of the popup changes | ^[Function]`(value: boolean) => void` |
| show | triggered after the trigger is shown (the animation ends) | - |
| hide | triggered after the popup is hidden (the animation ends) | - |

### Trigger Slots

| Name | Description | Type |
| ------ | ---- | ---- |
| content | content | - |

## FAQ

### About the mount location of the pop-up box

The popup box is mounted on the body element by default. If you want to modify the mounted element, you can use the popup-container attribute to specify it. At the same time, you need to pay attention to ensure that the location of the mounted element can be accurately located. Generally, you can Add position: relative style for mount elements.

In the micro-frontend project, it is necessary to ensure that the mounting position of the sub-application is accurate, you can add position: relative to the body style of the sub-application
