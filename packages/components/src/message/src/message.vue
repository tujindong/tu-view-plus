<template>
  <transition
    :name="`${defaultNamespace}-fade-in-linear`"
    @before-leave="onClose"
    @after-leave="$emit('destroy')"
  >
    <div
      ref="messageRef"
      role="alert"
      v-show="visible"
      :id="id"
      :class="classes"
      :style="customStyle"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <tu-badge
        v-if="repeatNum > 1"
        :value="repeatNum"
        :type="badgeType"
        :class="ns.e('badge')"
      />

      <tu-icon v-if="icon" :class="[ns.e('icon')]">
        <component :is="icon" />
      </tu-icon>
      <slot>
        <span v-if="!dangerouslyUseHTMLString" :class="ns.e('content')">
          {{ message }}
        </span>
        <span v-else :class="ns.e('content')" v-html="message"></span>
      </slot>

      <tu-icon
        v-if="showClose"
        :class="ns.em('icon', 'close')"
        @click.stop="close"
      >
        <Close />
      </tu-icon>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import {
  Transition,
  ref,
  onMounted,
  computed,
  watch,
  CSSProperties
} from 'vue';
import {
  useEventListener,
  useResizeObserver,
  useTimeoutFn
} from '@vueuse/core';
import { messageProps } from './message';
import { EVENT_CODE } from '@tu-view-plus/constants';
import { defaultNamespace } from '@tu-view-plus/hooks';
import { useGlobalComponentSettings } from '../../config-provider';
import { getLastOffset, getOffsetOrSpace } from './instance';
import { Close } from '@tu-view-plus/icons-vue';
import { TuIcon } from '../../icon';
import { TuBadge } from '../../badge';
import '../style/message.scss';

defineOptions({
  name: 'TuMessage'
});

const props = defineProps(messageProps);

const { ns, zIndex } = useGlobalComponentSettings('message');
const { currentZIndex, nextZIndex } = zIndex;

const messageRef = ref<HTMLDivElement>();
const visible = ref(false);
const height = ref(0);

let stopTimer: (() => void) | undefined = undefined;

const classes = computed(() => ({
  [ns.b()]: true,
  [ns.m(props.type)]: props.type,
  [ns.is('center')]: props.center,
  [ns.is('closable')]: props.showClose,
  [props.customClass]: true
}));

const lastOffset = computed(() => getLastOffset(props.id));

const offset = computed(
  () => getOffsetOrSpace(props.id, props.offset) + lastOffset.value
);

const bottom = computed((): number => height.value + offset.value);

const customStyle = computed<CSSProperties>(() => ({
  top: `${offset.value}px`,
  zIndex: currentZIndex.value
}));

const badgeType = computed(() =>
  props.type ? (props.type === 'error' ? 'danger' : props.type) : 'info'
);

const close = () => {
  visible.value = false;
};

const clearTimer = () => {
  stopTimer?.();
};

const startTimer = () => {
  if (props.duration === 0) return;
  ({ stop: stopTimer } = useTimeoutFn(() => {
    close();
  }, props.duration));
};

const keydown = ({ code }: KeyboardEvent) => {
  if (code === EVENT_CODE.esc) close();
};

onMounted(() => {
  startTimer();
  nextZIndex();
  visible.value = true;
});

watch(
  () => props.repeatNum,
  () => {
    clearTimer();
    startTimer();
  }
);

useEventListener(document, 'keydown', keydown);

useResizeObserver(messageRef, () => {
  height.value = messageRef.value!.getBoundingClientRect().height;
});

defineExpose({
  visible,
  bottom,
  close
});
</script>
