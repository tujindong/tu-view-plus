# Carousel

Carousel is used to display multiple pictures, videos, or embedded frames and other content in a loop, and supports automatic playback or manual switching by the user.

## Basic usage

:::demo src="../examples/carousel/basic.vue" title="Basic usage"

:::

## Auto

:::demo src="../examples/carousel/auto-play.vue" title="You can set whether to switch automatically through autoPlay.You can set moveSpeed, timingFunc to achieve different switching slide effects."

:::

## Indicator

:::demo src="../examples/carousel/indicator.vue" title="You can specify the indicator type：dot、line、slider  and position left、right、top、bottom、outer。"

:::

## Vertical

:::demo src="../examples/carousel/switch-direction.vue" title="By default, the direction is horizontal. Use the vertical direction switch by setting the direction to vertical."

:::

## Animation card

:::demo src="../examples/carousel/cardification.vue" title="When the space in the width direction of the page is vacant, but the space in the height direction is surplus, you can specify animation as card to use card style."

:::

## Animation fade

:::demo src="../examples/carousel/fade.vue" title="Set animation=fade to use fade transition effect."

:::

## Carousel API

### Carousel Attributes

| Name | Description | Type | Default |
| --------- | ---- | ---- | :----: |
| current(v-model) | The index of current slide which starts from 1 | ^[Number] | - |
| default-current | Default index of current slide| ^[Number] | 1 |
| auto-play | Whether to automatically loop the display, or pass in { interval: the time interval for switching (default: 3000),<br>hoverToPause: whether to pause switching while hover (default: true) } for configuration | ^[Boolean] ^[CarouselAutoPlayConfig] | false |
| move-speed | The duration of the slide movement(ms) | ^[Number] | 500 |
| animation-name | The animation of the slide movement | ^[String]`'slide'\|'fade'\|'card'`| slide |
| trigger | How to trigger the slide switch, click/hover the indicator | ^[String]`'click'\|'hover'`| click |
| direction | The direction of the slide movement | ^[String]`'horizontal'\|'vertical'` | vertical |
| show-arrow | When to show the arrow used to switch | ^[String]`'always'\|'hover'\|'never'` | always |
| arrow-class | The additional css class to arrow used to switch | ^[String] | - |
| indicator-type | Type of indicator | ^[String]`'line'\|'dot'\|'slider'\|'never'` | dot |
| indicator-position | Position of indication | ^[String]`'bottom'\|'top'\|'left'\|'right'\|'outer'` | bottom |
| indicator-class | The additional css class to indicator | ^[String] | - |
| transition-timing-function | How intermediate values are calculated for CSS properties being affected by a transition effect.transition-timing-function | ^[String] | cubic-bezier(0.34, 0.69, 0.1, 1) |

### Carousel Events

| Name | Description | Type |
| ------ | ---- | ---- |
| change | Callback when slide changes | ^[Function]`(index: number, prevIndex: number, isManual: boolean) => void` |
