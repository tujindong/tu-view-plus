import { buildProps as e } from "@tu-view-plus/utils";
const n = e({
  /**
   * @zh 当前展示索引
   * @en The index of current slide which starts from 1
   * @vModel
   */
  current: {
    type: Number
  },
  /**
   * @zh 当前展示索引
   * @en Default index of current slide
   */
  defaultCurrent: {
    type: Number,
    default: 1
  },
  /**
   * @zh 是否自动循环展示，或者传入 `{ interval: 自动切换的时间间隔(默认: 3000), hoverToPause: 鼠标悬浮时是否暂停自动切换(默认: true) }` 进行高级配置
   * @en* Whether to automatically loop the display, or pass in `{ interval: the time interval for switching (default: 3000),
   * hoverToPause: whether to pause switching while hover (default: true) }` for configuration (object is supported from `2.14.0`)
   */
  autoPlay: {
    type: [Boolean, Object],
    default: !1
  },
  /**
   * @zh 幻灯片移动速率(ms)
   * @en The duration of the slide movement(ms)
   */
  moveSpeed: {
    type: Number,
    default: 500
  },
  /**
   * @zh 切换动画
   * @en The animation of the slide movement
   */
  animationName: {
    type: String,
    default: "slide"
  },
  /**
   * @zh 幻灯片切换触发方式, click/hover 指示器
   * @en How to trigger the slide switch, click/hover the indicator
   * @values 'click', 'hover'
   */
  trigger: {
    type: String,
    default: "click"
  },
  /**
   * @zh 幻灯片移动方向
   * @en The direction of the slide movement
   * @values 'horizontal', 'vertical'
   */
  direction: {
    type: String,
    default: "horizontal"
  },
  /**
   * @zh 切换箭头显示时机
   * @en When to show the arrow used to switch
   * @values 'always', 'hover', 'never'
   */
  showArrow: {
    type: String,
    default: "always"
  },
  /**
   * @zh 切换箭头样式
   * @en The additional css class to arrow used to switch
   */
  arrowClass: {
    type: String,
    default: ""
  },
  /**
   * @zh 指示器类型，可为小方块和小圆点或不显示
   * @en Type of indicator
   * @values 'line', 'dot', 'slider', 'never'
   */
  indicatorType: {
    type: String,
    default: "dot"
  },
  /**
   * @zh 指示器位置
   * @en Position of indication
   * @values 'bottom', 'top', 'left', 'right', 'outer'
   */
  indicatorPosition: {
    type: String,
    default: "bottom"
  },
  /**
   * @zh 指示器的样式
   * @en The additional css class to indicator
   */
  indicatorClass: {
    type: String,
    default: ""
  },
  /**
   * @zh 过渡速度曲线, 默认匀速 [transition-timing-function](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-timing-function)
   * @en How intermediate values are calculated for CSS properties being affected by a transition effect.
   * [transition-timing-function](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-timing-function)
   */
  transitionTimingFunction: {
    type: String,
    default: "cubic-bezier(0.34, 0.69, 0.1, 1)"
  }
}), o = {
  updateCurrent: (t) => !0,
  change: (t, r, i) => !0
};
export {
  o as carouselEmits,
  n as carouselProps
};
