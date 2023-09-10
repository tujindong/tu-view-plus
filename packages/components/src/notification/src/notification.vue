<template>
  <transition
    :name="`${defaultNamespace}-notification-fade`"
    @before-leave="onClose"
    @after-leave="onDestroy"
  >
    <div
      v-show="visible"
      role="alert"
      :id="id"
      :class="notificationClasses"
      :style="positionStyle"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
      @click="onClick"
    >
      <tu-icon v-if="iconComponent" :class="[ns.e('icon'), typeClass]">
        <component :is="iconComponent" />
      </tu-icon>
      <div :class="nsNotification.e('group')">
        <div :class="nsNotification.e('title')">{{ title }}</div>
        <div
          v-show="message"
          :class="nsNotification.e('content')"
          :style="contentStyles"
        >
          <slot>
            <p v-if="!dangerouslyUseHTMLString">{{ message }}</p>
            <p v-else v-html="message"></p>
          </slot>
        </div>
        <tu-icon
          v-show="showClose"
          :class="nsNotification.e('icon')"
          @click.stop="close"
        >
          <Close />
        </tu-icon>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import { useEventListener, useTimeoutFn } from '@vueuse/core';
import { notificationProps, notificationEmits } from './notification';
import { useNamespace, defaultNamespace } from '@tu-view-plus/hooks';
import { addUnit, TypeComponentsMap } from '@tu-view-plus/utils';
import { EVENT_CODE } from '@tu-view-plus/constants';
import { useGlobalComponentSettings } from '../../config-provider';
import { Close } from '@tu-view-plus/icons-vue';
import TuIcon from '../../icon';
import '../style/notification.scss';

import type { CSSProperties } from 'vue';

let timer: (() => void) | undefined = undefined;

defineOptions({
  name: 'TuNotification'
});

const props = defineProps(notificationProps);
const emit = defineEmits(notificationEmits);

const nsNotification = useNamespace('notification');

const { ns, zIndex } = useGlobalComponentSettings('notification');

const { nextZIndex, currentZIndex } = zIndex;

const visible = ref(false);

const horizontalProperty = computed(() =>
  props.position.endsWith('r') ? 'right' : 'left'
);

const verticalProperty = computed(() =>
  props.position.startsWith('t') ? 'top' : 'bottom'
);

const iconComponent = computed(() => {
  if (!props.type) return props.icon;
  return TypeComponentsMap[props.type] || props.icon;
});

const notificationClasses = computed(() => {
  return [
    nsNotification.b(),
    { [nsNotification.m(props.size)]: props.size },
    props.customClass,
    horizontalProperty.value
  ];
});

const positionStyle = computed<CSSProperties>(() => {
  return {
    [verticalProperty.value]: addUnit(props.offset),
    zIndex: props.zIndex ?? currentZIndex.value
  };
});

const typeClass = computed(() => {
  const type = props.type;
  return type && TypeComponentsMap[props.type] ? nsNotification.m(type) : '';
});

const contentStyles = computed<CSSProperties | undefined>(() => {
  return props.title ? undefined : { margin: 0 };
});

const onDestroy = () => {
  emit('destroy');
};

const startTimer = () => {
  if (props.duration > 0) {
    ({ stop: timer } = useTimeoutFn(() => {
      if (visible.value) close();
    }, props.duration));
  }
};

const clearTimer = () => {
  timer?.();
};

const close = () => {
  visible.value = false;
};

const onKeydown = ({ code }: KeyboardEvent) => {
  if (code === EVENT_CODE.delete || code === EVENT_CODE.backspace) {
    clearTimer();
  } else if (code === EVENT_CODE.esc) {
    if (visible.value) close();
  } else {
    startTimer();
  }
};

useEventListener(document, 'keydown', onKeydown);

onMounted(() => {
  startTimer();
  nextZIndex();
  visible.value = true;
});

defineExpose({
  visible,
  close
});
</script>
