<template>
  <transition name="fade-in">
    <div
      v-if="visible"
      :class="nsBackTop.b()"
      :style="backTopStyles"
      @click.stop="handleScrollToTop"
    >
      <slot>
        <tu-button circle>
          <template #icon><CaretTop /></template>
        </tu-button>
      </slot>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import { useEventListener, useThrottleFn } from '@vueuse/core';
import { backTopProps, backtopEmits } from './back-top';
import { useNamespace } from '@tu-view-plus/hooks';
import { CaretTop } from '@tu-view-plus/icons-vue';
import { addUnit, throwError } from '@tu-view-plus/utils';
import { TuButton } from '../../button';
import '../style/back-top.scss';

import { CSSProperties, shallowRef } from 'vue';

defineOptions({
  name: 'TuBackTop'
});

const props = defineProps(backTopProps);
const emit = defineEmits(backtopEmits);

const nsBackTop = useNamespace('back-top');

const visible = ref(false);
const el = shallowRef<HTMLElement>();
const container = shallowRef<Document | HTMLElement>();

const backTopStyles = computed<CSSProperties>(() => ({
  right: addUnit(props.right),
  bottom: addUnit(props.bottom)
}));

const handleScroll = () => {
  if (el.value) visible.value = el.value.scrollTop >= props.visibleHeight;
};

const handleScrollToTop = (evt: MouseEvent) => {
  el.value?.scrollTo({ top: 0, behavior: 'smooth' });
  emit('click', evt);
};

const handleScrollThrottled = useThrottleFn(handleScroll, 300, true);

useEventListener(container, 'scroll', handleScrollThrottled);

onMounted(() => {
  container.value = document;
  el.value = document.documentElement;
  if (props.target) {
    el.value = document.querySelector<HTMLElement>(props.target) ?? undefined;
    if (!el.value) {
      throwError('TuBackTop', `target does not exist: ${props.target}`);
    }
    container.value = el.value;
  }
  handleScroll();
});
</script>
