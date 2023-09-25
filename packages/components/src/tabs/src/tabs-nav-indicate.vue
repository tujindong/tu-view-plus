<template>
  <div :class="indicateClasses" :style="indicateStyles"></div>
</template>

<script lang="ts" setup>
import { ref, computed, toRefs, nextTick, onMounted, onUpdated } from 'vue';
import { tabsNavIndicateProps } from './tabs-nav-indicate';
import { useNamespace } from '@tu-view-plus/hooks';
import '../style/tabs.scss';

import type { CSSProperties } from 'vue';

defineOptions({
  name: 'TuTabsNavIndicate'
});

const props = defineProps(tabsNavIndicateProps);

const nsTabs = useNamespace('tabs');

const { activeTabRef } = toRefs(props);
const position = ref(0);
const size = ref(0);

const getInkStyle = () => {
  if (activeTabRef?.value) {
    const tabPosition =
      props.direction === 'vertical'
        ? activeTabRef.value.offsetTop
        : activeTabRef.value.offsetLeft;
    const tabSize =
      props.direction === 'vertical'
        ? activeTabRef.value.offsetHeight
        : activeTabRef.value.offsetWidth;
    if (tabPosition !== position.value || tabSize !== size.value) {
      position.value = tabPosition;
      size.value = tabSize;
    }
  }
};

const indicateClasses = computed(() => ({
  [nsTabs.e('nav-tab-indicate')]: true,
  [nsTabs.is('animation')]: props.animation,
  [nsTabs.is('disabled')]: props.disabled
}));

const indicateStyles = computed<CSSProperties>(() => {
  if (props.direction === 'vertical') {
    return {
      top: `${position.value}px`,
      height: `${size.value}px`
    };
  }
  return {
    left: `${position.value}px`,
    width: `${size.value}px`
  };
});

onMounted(() => {
  nextTick(() => getInkStyle());
});

onUpdated(() => {
  getInkStyle();
});
</script>
