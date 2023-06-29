<script lang="tsx">
import {
  defineComponent,
  Teleport,
  toRefs,
  computed,
  ref,
  Transition,
  inject,
  nextTick,
  provide,
  reactive,
  watch,
  onMounted,
  onUpdated,
  onDeactivated,
  onBeforeUnmount
} from 'vue';
import { triggerProps, triggerEmits } from './trigger';
import { TuOnlyClient } from '../../only-client';
import { TuResizeObserver } from '../../resize-observer';
import {
  useNamespace,
  useFirstElement,
  useTeleportContainer,
  usePickSlots,
  usePopupManager,
  useResizeObserver,
  defaultNamespace
} from '@tu-view-plus/hooks';
import {
  isEmptyChildren,
  omit,
  mergeFirstChild,
  off,
  on,
  throttleByRaf
} from '@tu-view-plus/utils';
import { TriggerEvent } from '@tu-view-plus/constants';
import { triggerInjectionKey } from './constant';
import {
  getElementScrollRect,
  getPopupStyle,
  getTransformOrigin,
  getArrowStyle,
  getScrollElements
} from './utils';
import '../style/trigger.scss';

import type { CSSProperties, Ref } from 'vue';

const TRIGGER_EVENTS = [
  'onClick',
  'onMouseenter',
  'onMouseleave',
  'onFocusin',
  'onFocusout',
  'onContextmenu'
];

export default defineComponent({
  name: 'TuTrigger',

  inheritAttrs: false,

  props: triggerProps,

  emits: triggerEmits,

  setup(props, { emit, slots, attrs }) {
    const { popupContainer } = toRefs(props);
    const popupAttrs = computed(() => omit(attrs, TRIGGER_EVENTS));

    const triggerMethods = computed(() =>
      ([] as Array<TriggerEvent>).concat(props.trigger)
    );
    // 用于多个trigger嵌套时，保持打开状态
    const childrenRefs = new Set<Ref<HTMLElement>>();
    const triggerCtx = inject(triggerInjectionKey, undefined);

    // trigger相关变量
    const { children, firstElement } = useFirstElement();

    // popup相关变量
    const popupRef = ref<HTMLElement>();
    const popupVisible = ref(props.defaultPopupVisible);
    const popupPosition = ref(props.position);
    const popupStyle = ref<CSSProperties>({});
    const transformStyle = ref<CSSProperties>({});
    const arrowStyle = ref<CSSProperties>({});

    // 鼠标相关变量
    const arrowRef = ref<HTMLElement>();
    const mousePosition = ref({
      top: 0,
      left: 0
    });

    const computedVisible = computed(
      () => props.popupVisible ?? popupVisible.value
    );

    const nsPopup = useNamespace('popup');

    const { teleportContainer, containerRef } = useTeleportContainer({
      popupContainer,
      visible: computedVisible,
      documentContainer: true
    });

    const { zIndex } = usePopupManager('popup', { visible: computedVisible });

    let delayTimer = 0;
    let outsideListener = false;

    const cleanDelayTimer = () => {
      if (delayTimer) {
        window.clearTimeout(delayTimer);
        delayTimer = 0;
      }
    };

    const updateMousePosition = (e: MouseEvent) => {
      if (props.alignPoint) {
        const { pageX, pageY } = e;
        mousePosition.value = {
          top: pageY,
          left: pageX
        };
      }
    };

    const updatePopupStyle = () => {
      if (!firstElement.value || !popupRef.value || !containerRef.value) {
        return;
      }
      const containerRect = containerRef.value.getBoundingClientRect();
      const triggerRect = props.alignPoint
        ? {
          top: mousePosition.value.top,
          bottom: mousePosition.value.top,
          left: mousePosition.value.left,
          right: mousePosition.value.left,
          scrollTop: mousePosition.value.top,
          scrollBottom: mousePosition.value.top,
          scrollLeft: mousePosition.value.left,
          scrollRight: mousePosition.value.left,
          width: 0,
          height: 0
        }
        : getElementScrollRect(firstElement.value, containerRect);
      const getPopupRect = () =>
        // @ts-ignore
        getElementScrollRect(popupRef.value, containerRect);
      const popupRect = getPopupRect();
      const { style, position } = getPopupStyle(
        props.position,
        containerRect,
        triggerRect,
        popupRect,
        {
          offset: props.popupOffset,
          translate: props.popupTranslate,
          customStyle: props.popupStyle,
          autoFitPosition: props.autoFitPosition
        }
      );
      if (props.autoFitTransformOrigin) {
        transformStyle.value = {
          transformOrigin: getTransformOrigin(position)
        };
      }
      if (props.autoFitPopupMinWidth) {
        style.minWidth = `${triggerRect.width}px`;
      } else if (props.autoFitPopupWidth) {
        style.width = `${triggerRect.width}px`;
      }

      if (popupPosition.value !== position) {
        popupPosition.value = position;
      }
      popupStyle.value = style;
      if (props.showArrow) {
        nextTick(() => {
          arrowStyle.value = getArrowStyle(
            position,
            triggerRect,
            getPopupRect(),
            {
              customStyle: props.arrowStyle
            }
          );
        });
      }
    };

    const changeVisible = (visible: boolean, delay?: number) => {
      if (visible === computedVisible.value && delayTimer === 0) {
        return;
      }

      const update = () => {
        popupVisible.value = visible;
        emit('update:popupVisible', visible);
        emit('popupVisibleChange', visible);
        if (visible) {
          nextTick(() => {
            updatePopupStyle();
          });
        }
      };

      if (delay) {
        cleanDelayTimer();
        if (visible !== computedVisible.value) {
          delayTimer = window.setTimeout(update, delay);
        }
      } else {
        update();
      }
    };

    const handleClick = (e: MouseEvent) => {
      (attrs as any).onClick?.(e);
      if (props.disabled || (computedVisible.value && !props.clickToClose)) {
        return;
      }
      if (triggerMethods.value.includes('click')) {
        updateMousePosition(e);
        changeVisible(!computedVisible.value);
      } else if (
        triggerMethods.value.includes('contextMenu') &&
        computedVisible.value
      ) {
        changeVisible(false);
      }
    };

    const handleMouseEnter = (e: MouseEvent) => {
      (attrs as any).onMouseenter?.(e);
      if (props.disabled || !triggerMethods.value.includes('hover')) {
        return;
      }
      updateMousePosition(e);
      changeVisible(true, props.mouseEnterDelay);
    };

    const handleMouseEnterWithContext = (e: MouseEvent) => {
      triggerCtx?.onMouseenter(e);
      handleMouseEnter(e);
    };

    const handleMouseLeave = (e: MouseEvent) => {
      (attrs as any).onMouseleave?.(e);
      if (props.disabled || !triggerMethods.value.includes('hover')) {
        return;
      }
      changeVisible(false, props.mouseLeaveDelay);
    };

    const handleMouseLeaveWithContext = (e: MouseEvent) => {
      triggerCtx?.onMouseleave(e);
      handleMouseLeave(e);
    };

    const handleFocusin = (e: FocusEvent) => {
      (attrs as any).onFocusin?.(e);
      if (props.disabled || !triggerMethods.value.includes('focus')) {
        return;
      }
      changeVisible(true, props.focusDelay);
    };

    const handleFocusout = (e: FocusEvent) => {
      (attrs as any).onFocusout?.(e);
      if (props.disabled || !triggerMethods.value.includes('focus')) {
        return;
      }
      if (!props.blurToClose) {
        return;
      }
      changeVisible(false);
    };

    const handleContextmenu = (e: MouseEvent) => {
      (attrs as any).onContextmenu?.(e);
      if (
        props.disabled ||
        !triggerMethods.value.includes('contextMenu') ||
        (computedVisible.value && !props.clickToClose)
      ) {
        return;
      }
      updateMousePosition(e);
      changeVisible(!computedVisible.value);
      e.preventDefault();
    };

    const addChildRef = (ref: any) => {
      childrenRefs.add(ref);
      triggerCtx?.addChildRef(ref);
    };
    const removeChildRef = (ref: any) => {
      childrenRefs.delete(ref);
      triggerCtx?.removeChildRef(ref);
    };

    // 添加triggerCtx，用于嵌套时保持状态
    provide(
      triggerInjectionKey,
      reactive({
        onMouseenter: handleMouseEnterWithContext,
        onMouseleave: handleMouseLeaveWithContext,
        addChildRef,
        removeChildRef
      })
    );

    // 外部事件
    const removeOutsideListener = () => {
      off(document.documentElement, 'mousedown', handleOutsideClick);
      outsideListener = false;
    };

    const contentSlot = usePickSlots(slots, 'content');

    const hidePopup = computed(() => {
      return props.hideEmpty && isEmptyChildren(contentSlot.value?.());
    });

    const handleOutsideClick = (e: MouseEvent) => {
      if (
        firstElement.value?.contains(e.target as HTMLElement) ||
        popupRef.value?.contains(e.target as HTMLElement)
      ) {
        return;
      }

      for (const item of childrenRefs) {
        if (item.value?.contains(e.target as HTMLElement)) {
          return;
        }
      }

      removeOutsideListener();
      changeVisible(false);
    };

    const handleScroll = throttleByRaf(() => {
      if (computedVisible.value) {
        updatePopupStyle();
      }
    });

    const handleResize = () => {
      if (computedVisible.value) {
        updatePopupStyle();
      }
    };

    const onTargetResize = () => {
      handleResize();
      emit('resize');
    };

    const handlePopupMouseDown = (e: Event) => {
      if (props.preventFocus) {
        e.preventDefault();
      }
    };

    triggerCtx?.addChildRef(popupRef);

    const triggerCls = computed(() => {
      return computedVisible.value ? props.openedClass : undefined;
    });

    let scrollElements: HTMLElement[] | undefined;

    // 当popup显示状态改变时，修改外部点击事件
    watch(computedVisible, (value) => {
      if (props.clickOutsideToClose) {
        if (!value && outsideListener) {
          removeOutsideListener();
        } else if (value && !outsideListener) {
          on(document.documentElement, 'mousedown', handleOutsideClick);
          outsideListener = true;
        }
      }

      if (props.updateAtScroll) {
        if (value) {
          scrollElements = getScrollElements(firstElement.value);
          for (const item of scrollElements) {
            item.addEventListener('scroll', handleScroll);
          }
        } else if (scrollElements) {
          for (const item of scrollElements) {
            item.removeEventListener('scroll', handleScroll);
          }
          scrollElements = undefined;
        }
      }

      if (value) {
        mounted.value = true;
      }
    });

    // 影响popup显示的参数变化时，更新popup样式
    watch(
      () => [props.autoFitPopupWidth, props.autoFitPopupMinWidth],
      () => {
        if (computedVisible.value) {
          updatePopupStyle();
        }
      }
    );

    const { createResizeObserver, destroyResizeObserver } = useResizeObserver({
      elementRef: containerRef,
      onResize: handleResize
    });

    onMounted(() => {
      createResizeObserver();

      // 默认显示时，更新popup位置
      if (computedVisible.value) {
        updatePopupStyle();
        if (props.clickOutsideToClose && !outsideListener) {
          on(document.documentElement, 'mousedown', handleOutsideClick);
          outsideListener = true;
        }
        if (props.updateAtScroll) {
          scrollElements = getScrollElements(firstElement.value);
          for (const item of scrollElements) {
            item.addEventListener('scroll', handleScroll);
          }
        }
      }
    });

    onUpdated(() => {
      if (computedVisible.value) {
        updatePopupStyle();
      }
    });

    onDeactivated(() => {
      changeVisible(false);
    });

    onBeforeUnmount(() => {
      triggerCtx?.removeChildRef(popupRef);
      destroyResizeObserver();
      if (outsideListener) {
        removeOutsideListener();
      }
      if (scrollElements) {
        for (const item of scrollElements) {
          item.removeEventListener('scroll', handleScroll);
        }
        scrollElements = undefined;
      }
    });

    const mounted = ref(computedVisible.value);
    const isAnimation = ref(false);

    const onAnimationStart = () => {
      isAnimation.value = true;
    };

    const handleShow = () => {
      isAnimation.value = false;
      if (computedVisible.value) {
        emit('show');
      }
    };

    const handleHide = () => {
      isAnimation.value = false;
      if (!computedVisible.value) {
        mounted.value = false;
        emit('hide');
      }
    };

    return () => {
      children.value = slots.default?.() ?? [];

      mergeFirstChild(children.value, {
        class: triggerCls.value,
        onClick: handleClick,
        onMouseenter: handleMouseEnter,
        onMouseleave: handleMouseLeave,
        onFocusin: handleFocusin,
        onFocusout: handleFocusout,
        onContextmenu: handleContextmenu
      });

      return (
        <>
          {props.autoFixPosition ? (
            <TuResizeObserver onResize={onTargetResize}>
              {children.value}
            </TuResizeObserver>
          ) : (
            children.value
          )}
          <TuOnlyClient>
            <Teleport
              to={teleportContainer.value}
              disabled={!props.renderToBody}
            >
              {(!props.unmountOnClose ||
                computedVisible.value ||
                mounted.value) &&
                !hidePopup.value && (
                  <TuResizeObserver onResize={handleResize}>
                    <div
                      ref={popupRef}
                      class={[nsPopup.b(), nsPopup.m(popupPosition.value)]}
                      style={{
                        ...popupStyle.value,
                        zIndex: zIndex.value,
                        pointerEvents: isAnimation.value ? 'none' : 'auto'
                      }}
                      trigger-placement={popupPosition.value}
                      onMouseenter={handleMouseEnterWithContext}
                      onMouseleave={handleMouseLeaveWithContext}
                      onMousedown={handlePopupMouseDown}
                      {...popupAttrs.value}
                    >
                      <Transition
                        name={`${defaultNamespace}-${props.animationName}`}
                        duration={props.duration}
                        appear
                        onBeforeEnter={onAnimationStart}
                        onAfterEnter={handleShow}
                        onBeforeLeave={onAnimationStart}
                        onAfterLeave={handleHide}
                      >
                        <div
                          class={nsPopup.e('wrapper')}
                          style={transformStyle.value}
                          v-show={computedVisible.value}
                        >
                          <div
                            class={[nsPopup.e('content'), props.contentClass]}
                            style={props.contentStyle}
                          >
                            {slots.content?.()}
                          </div>
                          {props.showArrow && (
                            <div
                              ref={arrowRef}
                              class={[
                                nsPopup.e('arrow'),
                                nsPopup.em('arrow', props.size),
                                props.arrowClass
                              ]}
                              style={arrowStyle.value}
                            />
                          )}
                        </div>
                      </Transition>
                    </div>
                  </TuResizeObserver>
                )}
            </Teleport>
          </TuOnlyClient>
        </>
      );
    };
  }
});
</script>
