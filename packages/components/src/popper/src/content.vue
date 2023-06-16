<template>
  <div
    ref="contentRef"
    v-bind="contentAttrs"
    :style="contentStyle"
    :class="contentClass"
    tabindex="-1"
    @mouseenter="(e) => $emit('mouseenter', e)"
    @mouseleave="(e) => $emit('mouseleave', e)"
  >
    <tu-focus-trap
      :trapped="trapped"
      :trap-on-focus-in="true"
      :focus-trap-el="contentRef"
      :focus-start-el="focusStartRef"
      @focus-after-trapped="onFocusAfterTrapped"
      @focus-after-released="onFocusAfterReleased"
      @focusin="onFocusInTrap"
      @focusout-prevented="onFocusoutPrevented"
      @release-requested="onReleaseRequested"
    >
      <slot />
    </tu-focus-trap>
  </div>
</template>

<script lang="ts" setup>
import {
  inject,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  unref,
  watch
} from 'vue';
import { NOOP } from '@vue/shared';
import { isNil } from 'lodash-unified';
import TuFocusTrap from '@tu-view-plus/components/src/focus-trap';
import { formItemContextKey } from '@tu-view-plus/components/src/form';
import { isElement } from '@tu-view-plus/utils';
import { POPPER_CONTENT_INJECTION_KEY } from './constants';
import { popperContentEmits, popperContentProps } from './content';
import {
  usePopperContent,
  usePopperContentDOM,
  usePopperContentFocusTrap
} from './composables';

import type { WatchStopHandle } from 'vue';

defineOptions({
  name: 'TuPopperContent'
});

const emit = defineEmits(popperContentEmits);

const props = defineProps(popperContentProps);

const {
  focusStartRef,
  trapped,

  onFocusAfterReleased,
  onFocusAfterTrapped,
  onFocusInTrap,
  onFocusoutPrevented,
  onReleaseRequested
} = usePopperContentFocusTrap(props, emit);

const { attributes, arrowRef, contentRef, styles, instanceRef, role, update } =
  usePopperContent(props);

const {
  ariaModal,
  arrowStyle,
  contentAttrs,
  contentClass,
  contentStyle,
  updateZIndex
} = usePopperContentDOM(props, {
  styles,
  attributes,
  role
});

const formItemContext = inject(formItemContextKey, undefined);
const arrowOffset = ref<number>();

provide(POPPER_CONTENT_INJECTION_KEY, {
  arrowStyle,
  arrowRef,
  arrowOffset
});

if (
  formItemContext &&
  (formItemContext.addInputId || formItemContext.removeInputId)
) {
  // disallow auto-id from inside popper content
  provide(formItemContextKey, {
    ...formItemContext,
    addInputId: NOOP,
    removeInputId: NOOP
  });
}

let triggerTargetAriaStopWatch: WatchStopHandle | undefined = undefined;

const updatePopper = (shouldUpdateZIndex = true) => {
  update();
  shouldUpdateZIndex && updateZIndex();
};

const togglePopperAlive = () => {
  updatePopper(false);
  if (props.visible && props.focusOnShow) {
    trapped.value = true;
  } else if (props.visible === false) {
    trapped.value = false;
  }
};

onMounted(() => {
  watch(
    () => props.triggerTargetEl,
    (triggerTargetEl, prevTriggerTargetEl) => {
      triggerTargetAriaStopWatch?.();
      triggerTargetAriaStopWatch = undefined;

      const el = unref(triggerTargetEl || contentRef.value);
      const prevEl = unref(prevTriggerTargetEl || contentRef.value);

      if (isElement(el)) {
        triggerTargetAriaStopWatch = watch(
          [role, () => props.ariaLabel, ariaModal, () => props.id],
          (watches) => {
            ['role', 'aria-label', 'aria-modal', 'id'].forEach((key, idx) => {
              isNil(watches[idx])
                ? el.removeAttribute(key)
                : el.setAttribute(key, watches[idx]!);
            });
          },
          { immediate: true }
        );
      }
      if (prevEl !== el && isElement(prevEl)) {
        ['role', 'aria-label', 'aria-modal', 'id'].forEach((key) => {
          prevEl.removeAttribute(key);
        });
      }
    },
    { immediate: true }
  );

  watch(() => props.visible, togglePopperAlive, { immediate: true });
});

onBeforeUnmount(() => {
  triggerTargetAriaStopWatch?.();
  triggerTargetAriaStopWatch = undefined;
});

defineExpose({
  /**
   * @en popper content element
   */
  popperContentRef: contentRef,
  /**
   * @en popperjs instance
   */
  popperInstanceRef: instanceRef,
  /**
   * @en method for updating popper
   */
  updatePopper,

  /**
   * @en content style
   */
  contentStyle
});
</script>
