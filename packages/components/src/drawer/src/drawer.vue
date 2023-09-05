<template>
  <only-client>
    <teleport :to="teleportContainer" :disabled="!renderToBody">
      <div
        v-if="!unmountOnClose || visibleComputed || mounted"
        v-show="visibleComputed || mounted"
        :class="nsDrawerContianer.b()"
        :style="drawerContainerStyles"
        v-bind="$attrs"
      >
        <transition name="fade-drawer">
          <div
            v-if="mask"
            v-show="visibleComputed"
            :class="nsDrawerContianer.e('mask')"
            @click="handleMaskClick"
          ></div>
        </transition>
        <transition
          :name="`slider-drawer-${placement}`"
          appear
          @after-enter="handleOpen"
          @after-leave="handleClose"
        >
          <div
            v-show="visibleComputed"
            :class="nsDrawerClasses"
            :style="drawerStyles"
          >
            <!-- drawer header -->
            <div v-if="header" :class="nsDrawer.e('header')">
              <slot name="header">
                <div v-if="$slots.title || title" :class="nsDrawer.e('title')">
                  <slot name="title">{{ title }}</slot>
                </div>
                <div
                  v-if="closable"
                  tabindex="-1"
                  role="button"
                  aria-label="Close"
                  :class="nsDrawer.e('icon')"
                  @click="handleCancel"
                >
                  <tu-icon>
                    <Close />
                  </tu-icon>
                </div>
              </slot>
            </div>

            <!-- drawer body -->
            <div :class="nsDrawer.e('body')">
              <slot />
            </div>

            <!-- drawer footer -->
            <div v-if="footer" :class="nsDrawer.e('footer')">
              <slot name="footer">
                <tu-button
                  v-if="!hideCancel"
                  v-bind="cancelButtonProps"
                  :size="size"
                  @click="handleCancel"
                >
                  {{ cancelText || t('tu.drawer.cancel') }}
                </tu-button>
                <tu-button
                  type="primary"
                  v-bind="okButtonProps"
                  :size="size"
                  :loading="okLoadingComputed"
                  @click="handleOk"
                >
                  {{ okText || t('tu.drawer.confirm') }}
                </tu-button>
              </slot>
            </div>
          </div>
        </transition>
      </div>
    </teleport>
  </only-client>
</template>

<script lang="ts" setup>
import { ref, computed, toRefs, watch, onMounted, onBeforeUnmount } from 'vue';
import { drawerProps, drawerEmits } from './drawer';
import onlyClient from '../../only-client';
import {
  useNamespace,
  useTeleportContainer,
  usePopupManager,
  useOverflow,
  useLocale
} from '@tu-view-plus/hooks';
import {
  addUnit,
  isFunction,
  isBoolean,
  isPromise,
  on,
  off,
  KEYBOARD_KEY
} from '@tu-view-plus/utils';
import { Close } from '@tu-view-plus/icons-vue';
import TuButton from '../../button';
import TuIcon from '../../icon';
import '../style/drawer.scss';

import type { CSSProperties } from 'vue';

defineOptions({
  name: 'TuDrawer',
  inheritAttrs: false
});

let promiseNumber = 0;
let globalKeyDownListener = false;

const props = defineProps(drawerProps);
const emit = defineEmits(drawerEmits);

const { t } = useLocale();

const nsDrawer = useNamespace('drawer');
const nsDrawerContianer = useNamespace('drawer-container');

const { popupContainer } = toRefs(props);

const visibleRef = ref(props.defaultVisible);
const okLoadingRef = ref(false);

const visibleComputed = computed(() => props.visible ?? visibleRef.value);

const okLoadingComputed = computed(() => props.okLoading || okLoadingRef.value);

const mounted = ref(visibleComputed.value);

const { teleportContainer, containerRef } = useTeleportContainer({
  popupContainer,
  visible: visibleComputed
});

const { zIndex, isLastDialog } = usePopupManager('dialog', {
  visible: visibleComputed
});

const { setOverflowHidden, resetOverflow } = useOverflow(containerRef);

const isFixed = computed(() => containerRef?.value === document.body);

const drawerContainerStyles = computed<CSSProperties>(() => {
  return isFixed.value
    ? { zIndex: zIndex.value }
    : { zIndex: 'inherit', position: 'absolute' };
});

const nsDrawerClasses = computed(() => ({
  [nsDrawer.b()]: true,
  [nsDrawer.m(props.size)]: props.size
}));

const drawerStyles = computed<CSSProperties>(() => {
  const style: CSSProperties = {
    [props.placement]: 0,
    ...props.drawerStyle
  };
  if (['right', 'left'].includes(props.placement))
    style.width = addUnit(props.width);
  if (['top', 'bottom'].includes(props.placement))
    style.height = addUnit(props.height);
  return style;
});

const handleMaskClick = (e: Event) => {
  if (props.maskClosable) handleCancel(e);
};

const handleCancel = (e: Event) => {
  let result = true;
  if (isFunction(props.onBeforeCancel))
    result = props.onBeforeCancel() ?? false;
  if (result) {
    emit('cancel', e);
    close();
  }
};

const handleOk = async (e: Event) => {
  const currentPromiseNumber = promiseNumber;
  const closed = await new Promise<boolean>(async (resolve) => {
    if (isFunction(props.onBeforeOk)) {
      let result = props.onBeforeOk((closed = true) => resolve(closed));
      if (isPromise(result) || !isBoolean(result)) okLoadingRef.value = true;
      if (isPromise(result)) {
        try {
          result = (await result) ?? true;
        } catch (error) {
          result = false;
        }
      }
      if (isBoolean(result)) resolve(result);
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

const close = () => {
  promiseNumber++;
  if (okLoadingRef.value) {
    okLoadingRef.value = false;
  }
  visibleRef.value = false;
  emit('update:visible', false);
};

const handleOpen = () => {
  if (visibleComputed.value) emit('open');
};

const handleClose = () => {
  if (!visibleComputed.value) {
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
  if (globalKeyDownListener) {
    globalKeyDownListener = false;
    off(document.documentElement, 'keydown', handleGlobalKeyDown);
  }
};

const handleGlobalKeyDown = (ev: KeyboardEvent) => {
  if (props.escToClose && ev.key === KEYBOARD_KEY.ESC && isLastDialog()) {
    handleCancel(ev);
  }
};

watch(visibleComputed, (visible) => {
  if (visibleRef.value !== visible) visibleRef.value = visible;
  if (visible) {
    emit('beforeOpen');
    mounted.value = true;
    setOverflowHidden();
    addGlobalKeyDownListener();
  } else {
    emit('beforeClose');
    removeGlobalKeyDownListener();
  }
});

onMounted(() => {
  if (visibleComputed.value) {
    mounted.value = true;
    setOverflowHidden();
    addGlobalKeyDownListener();
  }
});

onBeforeUnmount(() => {
  resetOverflow();
  removeGlobalKeyDownListener();
});
</script>
