<template>
  <div :class="tabsClasses">
    <div v-if="positionComputed === 'bottom'" :class="contentClasses">
      <div :class="contentListClasses" :style="contentListStyles">
        <slot />
      </div>
    </div>
    <tu-tab-nav
      :tabs="sortedTabs"
      :activeKey="computedActiveKey"
      :activeIndex="activeIndex"
      :direction="directionComputed"
      :position="positionComputed"
      :editable="editable"
      :animation="animation"
      :showAddButton="showAddButton"
      :headerPadding="headerPadding"
      :size="size"
      :type="type"
      @click="handleClick"
      @add="handleAdd"
      @delete="handleDelete"
    >
      <slot name="extra" />
    </tu-tab-nav>
    <div v-if="positionComputed !== 'bottom'" :class="contentClasses">
      <div :class="contentListClasses" :style="contentListStyles">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref, nextTick, provide, toRefs } from 'vue';
import { tabsProps, tabsEmits } from './tabs';
import { useNamespace, useChildrenComponents } from '@tu-view-plus/hooks';
import { isUndefined } from '@tu-view-plus/utils';
import TuTabNav from './tab-nav.vue';
import { tabsInjectionKey } from './constants';
import '../style/tabs.scss';

import type { CSSProperties } from 'vue';
import type { TabData } from './constants';

defineOptions({
  name: 'TuTabs'
});

const props = defineProps(tabsProps);
const emit = defineEmits(tabsEmits);

const nsTabs = useNamespace('tabs');

const { size, lazyLoad, destroyOnHide, trigger } = toRefs(props);

const activeKeyRef = ref(props.defaultActiveKey);

const positionComputed = computed(() =>
  props.direction === 'vertical' ? 'left' : props.position
);

const directionComputed = computed(() =>
  ['left', 'right'].includes(positionComputed.value) ? 'vertical' : 'horizontal'
);

const { children, components } = useChildrenComponents('TuTabPane');

const tabMap = reactive(new Map<number, TabData>());

const sortedTabs = computed(() => {
  const tabData: TabData[] = [];
  components.value.forEach((id) => {
    const tab = tabMap.get(id);
    if (tab) tabData.push(tab);
  });
  return tabData;
});

const tabKeys = computed(() => sortedTabs.value.map((item) => item.key));

const computedActiveKey = computed(() => {
  const activeKey = props.activeKey ?? activeKeyRef.value;
  if (isUndefined(activeKey)) {
    return tabKeys.value[0];
  }
  return activeKey;
});

const activeIndex = computed(() => {
  const index = tabKeys.value.indexOf(computedActiveKey.value);
  if (index === -1) return 0;
  return index;
});

const tabsClasses = computed(() => ({
  [nsTabs.b()]: true,
  [nsTabs.m(directionComputed.value)]: directionComputed.value,
  [nsTabs.m(positionComputed.value)]: positionComputed.value,
  [nsTabs.m(props.type)]: props.type,
  [nsTabs.m(props.size)]: props.size
}));

const contentClasses = computed(() => ({
  [nsTabs.e('content')]: true,
  [nsTabs.is('hide')]: props.hideContent
}));

const contentListClasses = computed(() => ({
  [nsTabs.e('content-list')]: true,
  [nsTabs.is('animation')]: props.animation
}));

const contentListStyles = computed<CSSProperties>(() => {
  return { marginLeft: `-${activeIndex.value * 100}%` };
});

const handleClick = (key: string | number, evt: Event) => {
  handleChange(key);
  emit('tabClick', key, evt);
};

const handleAdd = (evt: Event) => {
  emit('add', evt);
  if (props.autoSwitch) {
    nextTick(() => {
      const lastKey = tabKeys.value[tabKeys.value.length - 1];
      handleChange(lastKey);
    });
  }
};

const handleDelete = (key: string | number, evt: Event) => {
  emit('delete', key, evt);
};

const handleChange = (key: string | number) => {
  if (key !== computedActiveKey.value) {
    activeKeyRef.value = key;
    emit('update:activeKey', key);
    emit('change', key);
  }
};

const addItem = (id: number, data: any) => {
  tabMap.set(id, data);
};

const removeItem = (id: number) => {
  tabMap.delete(id);
};

provide(
  tabsInjectionKey,
  reactive({
    lazyLoad,
    destroyOnHide,
    activeKey: computedActiveKey,
    addItem,
    removeItem,
    trigger
  })
);
</script>
