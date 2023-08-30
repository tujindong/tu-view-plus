<template>
  <tu-only-client>
    <teleport :to="teleportContainer" :disabled="!renderToBody">
      <div
        v-if="!unmountOnClose || visibleComputed || mounted"
        v-show="visibleComputed || mounted"
        :class="nsModalContainer.b()"
        :style="{ zIndex }"
        v-bind="$attrs"
      >
        <transition :name="maskAnimationName" appear>
          <div
            ref="maskRef"
            v-if="mask"
            v-show="visibleComputed"
            :class="nsModalContainer.e('mask')"
            :style="maskStyle"
          />
        </transition>
        <div
          ref="wrapperRef"
          :class="wrapperClasses"
          @click.self="handleMaskClick"
          @mousedown.self="handleMaskMouseDown"
        >
          <transition
            appear
            :name="modalAnimationName"
            @after-enter="handleOpen"
            @after-leave="handleClose"
          >
            <div
              ref="modalRef"
              v-show="visibleComputed"
              :class="modalClasses"
              :style="modalStyles"
            >
              <!-- modal header -->
              <div
                v-if="$slots.title || title || closable"
                :class="nsModal.e('header')"
                @mousedown="handleMoveDown"
              >
                <div
                  v-if="$slots.title || title"
                  :class="[
                    nsModal.e('title'),
                    nsModal.is(`align-${titleAlign}`)
                  ]"
                >
                  <div v-if="messageType" :class="nsModal.e('title-icon')">
                    <tu-icon
                      v-if="iconComponent"
                      :class="[nsModal.e('icon'), typeClass]"
                    >
                      <component :is="iconComponent" />
                    </tu-icon>
                  </div>
                  <slot name="title">{{ title }}</slot>
                </div>
                <div
                  v-if="!simple && closable"
                  tabindex="-1"
                  role="button"
                  aria-label="Close"
                  :class="nsModal.e('icon-close')"
                  @click="handleCancel"
                >
                  <tu-icon>
                    <Close />
                  </tu-icon>
                </div>
              </div>

              <!-- modal body -->
              <div :class="[nsModal.e('body'), bodyClass]" :style="bodyStyle">
                <slot />
              </div>

              <!-- modal footer -->
              <div v-if="footer" :class="nsModal.e('footer')">
                <slot name="footer">
                  <tu-button
                    v-if="!hideCancel"
                    v-bind="cancelButtonProps"
                    :size="size"
                    @click="handleCancel"
                  >
                    {{ cancelDisplayText }}
                  </tu-button>
                  <tu-button
                    type="primary"
                    v-bind="okButtonProps"
                    :size="size"
                    :loading="okLoadingComputed"
                    @click="handleOk"
                  >
                    {{ okDisplayText }}
                  </tu-button>
                </slot>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </teleport>
  </tu-only-client>
</template>

<script lang="ts" setup>
import { toRefs, ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';
import { modalProps, modalEmits } from './modal';
import TuOnlyClient from '../../only-client';
import {
  useTeleportContainer,
  useNamespace,
  usePopupManager,
  useDraggable,
  useOverflow,
  useLocale
} from '@tu-view-plus/hooks';
import {
  on,
  off,
  isFunction,
  contains,
  addUnit,
  isBoolean,
  isPromise,
  getElement,
  KEYBOARD_KEY,
  TypeComponentsMap
} from '@tu-view-plus/utils';
import { Close } from '@tu-view-plus/icons-vue';
import TuButton from '../../button';
import TuIcon from '../../icon';
import '../style/modal.scss';

import type { CSSProperties } from 'vue';

defineOptions({
  name: 'TuModal',
  inheritAttrs: false
});

let promiseNumber = 0;
let globalKeyDownListener = false;

const props = defineProps(modalProps);
const emit = defineEmits(modalEmits);

const { t } = useLocale();

const nsModal = useNamespace('modal');
const nsModalContainer = useNamespace('modal-container');
const nsModalWrapper = useNamespace('modal-wrapper');

const { fullscreen, popupContainer } = toRefs(props);

const wrapperRef = ref<HTMLElement>();
const modalRef = ref<HTMLElement>();
const visibleRef = ref(props.defaultVisible);
const currentIsMask = ref(false);
const okLoadingRef = ref(false);

const visibleComputed = computed(() => props.visible ?? visibleRef.value);

const okLoadingComputed = computed(() => props.okLoading || okLoadingRef.value);

const iconComponent = computed(
  () => TypeComponentsMap[props.messageType] || ''
);

const mounted = ref(visibleComputed.value);

const canDraggable = computed(() => props.draggable && !props.fullscreen);

const cancelDisplayText = computed(
  () => props.cancelText || t('tu.modal.cancel')
);

const okDisplayText = computed(() => props.okText || t('tu.modal.confirm'));

const { teleportContainer, containerRef } = useTeleportContainer({
  popupContainer,
  visible: visibleComputed
});

const { zIndex, isLastDialog } = usePopupManager('dialog', {
  visible: visibleComputed
});

const { position, handleMoveDown } = useDraggable({
  wrapperRef,
  modalRef,
  draggable: canDraggable
});

const { setOverflowHidden, resetOverflow } = useOverflow(containerRef);

const wrapperClasses = computed(() => ({
  [nsModalWrapper.b()]: true,
  [nsModalWrapper.is('align-center')]: props.alignCenter && !props.fullscreen,
  [nsModalWrapper.is('moved')]: Boolean(position.value)
}));

const typeClass = computed(() => {
  const messageType = props.messageType;
  return {
    [nsModal.em('icon', messageType)]:
      messageType && TypeComponentsMap[messageType]
  };
});

const modalClasses = computed(() => [
  nsModal.b(),
  props.modalClass,
  {
    [nsModal.m(props.size)]: props.size,
    [nsModal.m('simple')]: props.simple,
    [nsModal.m('draggable')]: canDraggable.value,
    [nsModal.m('fullscreen')]: props.fullscreen
  }
]);

const modalStyles = computed<CSSProperties>(() => {
  const style: CSSProperties = { ...(props.modalStyle ?? {}) };
  if (props.width) style.width = addUnit(props.width);
  if (!props.alignCenter && props.top) style.top = addUnit(props.top);
  if (position.value)
    style.transform = `translate(${position.value[0]}px, ${position.value[1]}px)`;
  return style;
});

const handleMaskClick = (evt: Event) => {
  if (props.mask && props.maskClosable && currentIsMask.value)
    handleCancel(evt);
};

const handleMaskMouseDown = (evt: Event) => {
  if (evt.target === wrapperRef.value) currentIsMask.value = true;
};

const handleOk = async (e: Event) => {
  const currentPromiseNumber = promiseNumber;
  const closed = await new Promise<boolean>(async (resolve) => {
    if (isFunction(props.onBeforeOk)) {
      let result = props.onBeforeOk((closed = true) => resolve(closed));
      if (isPromise(result) || !isBoolean(result)) {
        okLoadingRef.value = true;
      }
      if (isPromise(result)) {
        try {
          result = (await result) ?? true;
        } catch (error) {
          result = false;
        }
      }
      if (isBoolean(result)) {
        resolve(result);
      }
    } else {
      resolve(true);
    }
  });

  if (currentPromiseNumber === promiseNumber) {
    if (closed) {
      emit('ok', e);
      close();
    } else if (okLoadingRef.value) {
      okLoadingRef.value = false;
    }
  }
};

const handleCancel = (evt: Event) => {
  let result = true;
  if (isFunction(props.onBeforeCancel)) {
    result = props.onBeforeCancel() ?? false;
  }
  if (result) {
    emit('cancel', evt);
    close();
  }
};

const close = () => {
  promiseNumber++;
  if (okLoadingRef.value) okLoadingRef.value = false;
  visibleRef.value = false;
  emit('update:visible', false);
};

const handleOpen = () => {
  if (visibleComputed.value) {
    if (
      !contains(wrapperRef.value, document.activeElement) &&
      document.activeElement instanceof HTMLElement
    ) {
      document.activeElement.blur();
    }
    emit('open');
  }
};

const handleClose = () => {
  if (!visibleComputed.value) {
    if (canDraggable.value) position.value = undefined;
    mounted.value = false;
    resetOverflow();
    emit('close');
  }
};

const addGlobalKeyDownListener = () => {
  if (props.escToClose && !globalKeyDownListener) {
    globalKeyDownListener = true;
    on(document.documentElement, 'keydown', handleGlobalKeyDown);
  }
};

const removeGlobalKeyDownListener = () => {
  globalKeyDownListener = false;
  off(document.documentElement, 'keydown', handleGlobalKeyDown);
};

const handleGlobalKeyDown = (ev: KeyboardEvent) => {
  if (props.escToClose && ev.key === KEYBOARD_KEY.ESC && isLastDialog()) {
    handleCancel(ev);
  }
};

watch(fullscreen, () => {
  if (position.value) position.value = undefined;
});

watch(visibleComputed, (value: boolean) => {
  if (visibleRef.value !== value) visibleRef.value = value;
  if (value) {
    emit('beforeOpen');
    mounted.value = true;
    currentIsMask.value = false;
    setOverflowHidden();
    addGlobalKeyDownListener();
  } else {
    emit('beforeClose');
    removeGlobalKeyDownListener();
  }
});

onBeforeUnmount(() => {
  resetOverflow();
  removeGlobalKeyDownListener();
});

onMounted(() => {
  containerRef.value = getElement(props.popupContainer);
  if (visibleComputed.value) {
    setOverflowHidden();
    if (props.escToClose) {
      addGlobalKeyDownListener();
    }
  }
});
</script>
