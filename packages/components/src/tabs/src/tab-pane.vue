<template>
  <div ref="itemRef" :class="paneClasses">
    <div v-if="mounted" :class="nsTabPane.e('pane-content')">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  computed,
  getCurrentInstance,
  inject,
  toRefs,
  reactive,
  useSlots,
  watch,
  onBeforeUnmount,
  onUpdated
} from 'vue';
import { useNamespace } from '@tu-view-plus/hooks';
import { tabPaneProps } from './tab-pane';
import { TabsContext, tabsInjectionKey } from './constants';
import '../style/tabs.scss';

defineOptions({
  name: 'TuTabPane'
});

const instance = getCurrentInstance();

const props = defineProps(tabPaneProps);

const slots = useSlots();

const { title, disabled, closable } = toRefs(props);

const nsTabPane = useNamespace('tabs');

const itemRef = ref<HTMLElement>();

const tabsCtx = inject<Partial<TabsContext>>(tabsInjectionKey, {});

const key = computed(() => instance?.vnode.key as string | number);

const active = computed(() => key.value === tabsCtx.activeKey);

const mounted = ref(tabsCtx.lazyLoad ? active.value : true);

const data = reactive({
  key,
  title,
  disabled,
  closable,
  slots
});

if (instance?.uid) {
  tabsCtx.addItem?.(instance.uid, data);
}

const paneClasses = computed(() => ({
  [nsTabPane.e('pane')]: true,
  [nsTabPane.is('active')]: active.value
}));

watch(active, (active) => {
  if (active) {
    if (!mounted.value) mounted.value = true;
  } else if (props.destroyOnHide || tabsCtx.destroyOnHide) {
    mounted.value = false;
  }
});

onBeforeUnmount(() => {
  if (instance?.uid) {
    tabsCtx.removeItem?.(instance.uid);
  }
});

onUpdated(() => {
  data.slots = { ...slots };
});
</script>
