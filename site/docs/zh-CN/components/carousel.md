# Carousel 图片轮播

用于展示多张图片、视频或内嵌框架等内容的循环播放，支持系统自动播放或用户手动切换。

## 基础用法

:::demo src="../examples/carousel/basic.vue" title="图片轮播的基础用法"

:::

## 自动切换

:::demo src="../examples/carousel/auto-play.vue" title="可以通过 autoPlay 设置是否自动切换。可设置 moveSpeed, timingFunc 实现不同切换幻灯片效果。"

:::

## 指示器

:::demo src="../examples/carousel/indicator.vue" title="可以指定指示器类型：dot、line、slider 和位置 left、right、top、bottom、outer。"

:::

## 切换方向

:::demo src="../examples/carousel/switch-direction.vue" title="默认情况下，direction 为 horizontal。通过设置 direction 为 vertical 来使用垂直方向切换。"

:::

## 卡片化

:::demo src="../examples/carousel/cardification.vue" title="当页面宽度方向空间空余，但高度方向空间多余时，可指定 animation 为 card 使用卡片化风格。"

:::

## 渐隐切换

:::demo src="../examples/carousel/fade.vue" title="指定 animation 为 fade 使用渐隐切换效果。"

:::

## Carousel API

### Carousel Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| --------- | ---- | ---- | :----: |
| current(v-model) | 当前展示索引 | ^[Number] | - |
| default-current | 当前展示索引| ^[Number] | 1 |
| auto-play | 是否自动循环展示，或者传入 { interval: 自动切换的时间间隔(默认: 3000), hoverToPause: 鼠标悬浮时是否暂停自动切换(默认: true) } 进行高级配置 | ^[Boolean] ^[CarouselAutoPlayConfig] | false |
| move-speed | 幻灯片移动速率(ms) | ^[Number] | 500 |
| animation-name | 切换动画 | ^[String]`'slide'\|'fade'\|'card'`| slide |
| trigger | 幻灯片切换触发方式, click/hover 指示器 | ^[String]`'click'\|'hover'`| click |
| direction | 幻灯片移动方向 | ^[String]`'horizontal'\|'vertical'` | vertical |
| show-arrow | 切换箭头显示时机 | ^[String]`'always'\|'hover'\|'never'` | always |
| arrow-class | 切换箭头样式 | ^[String] | - |
| indicator-type | 指示器类型，可为小方块和小圆点或不显示 | ^[String]`'line'\|'dot'\|'slider'\|'never'` | dot |
| indicator-position | 指示器位置 | ^[String]`'bottom'\|'top'\|'left'\|'right'\|'outer'` | bottom |
| indicator-class | 指示器的样式 | ^[String] | - |
| transition-timing-function | 过渡速度曲线, 默认匀速 transition-timing-function | ^[String] | cubic-bezier(0.34, 0.69, 0.1, 1) |

### Carousel Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| change | 幻灯片发生切换时的回调函数 | ^[Function]`(index: number, prevIndex: number, isManual: boolean) => void` |
