<template>
  <div :class="navClasses">
    <tu-tabs-button
      v-if="isScroll"
      type="previous"
      :direction="direction"
      :disabled="offset <= 0"
      @click="handleButtonClick"
    />
    <tu-resize-observer @resize="getSize">
      <div ref="wrapperRef" :class="tabClasses">
        <tu-resize-observer @resize="handleResize">
          <div ref="listRef" :class="listClasses" :style="listStyles">
            <tu-tabs-tab
              v-for="tab in tabs"
              :key="tab.key"
              :ref="(component: any) => {
                if (component?.$el) tabsRef[tab.key] = component.$el
              }"
              :active="tab.key === activeKey"
              :tab="tab"
              :editable="editable"
              @click="handleClick"
              @delete="handleDelete"
            >
              <component v-if="tab.slots.title" :is="tab.slots.title" />
              <template v-if="tab.title"> {{ tab.title }}</template>
            </tu-tabs-tab>
          </div>
        </tu-resize-observer>
        <tu-tabs-nav-indicate
          v-if="type === 'line' && activeTabRef"
          ref="indicateRef"
          :activeTabRef="activeTabRef"
          :direction="direction"
          :disabled="false"
          :animation="animation"
        />
      </div>
    </tu-resize-observer>
    <tu-tabs-button
      v-if="isScroll"
      type="next"
      :direction="direction"
      :disabled="offset >= maxOffset"
      @click="handleButtonClick"
    />
    <div :class="nsTabsNav.e('extra')">
      <div
        v-if="canEdit && showAddButton"
        :class="nsTabsNav.e('button-add')"
        @click="(evt: Event) => emit('add', evt)"
      >
        <tu-icon>
          <Plus />
        </tu-icon>
      </div>
      <slot name="extra" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ComponentPublicInstance, computed, toRefs, ref, h } from 'vue';
import { useNamespace } from '@tu-view-plus/hooks';
import { isUndefined } from '@tu-view-plus/utils';
import { tabsNavProps, tabsNavEmits } from './tabs-nav';
import { Plus } from '@tu-view-plus/icons-vue';
import TuTabsButton from './tabs-button.vue';
import TuTabsTab from './tabs-tab.vue';
import TuTabsNavIndicate from './tabs-nav-indicate.vue';
import { TuIcon } from '../../icon';
import { TuResizeObserver } from '../../resize-observer';
import { getTabListStyle } from './utils';
import '../style/tabs.scss';

import type { CSSProperties } from 'vue';

defineOptions({
  name: 'TuTabsNav'
});

const props = defineProps(tabsNavProps);
const emit = defineEmits(tabsNavEmits);

const { tabs, activeKey, activeIndex, direction } = toRefs(props);

const nsTabsNav = useNamespace('tabs-nav');

const wrapperRef = ref<HTMLElement>();
const listRef = ref<HTMLElement>();
const tabsRef = ref<Record<string | number, HTMLElement>>({});
const indicateRef = ref<ComponentPublicInstance>();

const isScroll = ref(false);
const wrapperLength = ref(0);
const maxOffset = ref(0);
const tabEndOffsets = ref<number[]>([]);
const offset = ref(0);

const activeTabRef = computed(() => {
  if (!isUndefined(activeKey?.value)) {
    return tabsRef.value[activeKey.value];
  }
  return undefined;
});

const navClasses = computed(() => ({
  [nsTabsNav.b()]: true,
  [nsTabsNav.m(props.direction)]: props.direction,
  [nsTabsNav.m(props.position)]: props.position,
  [nsTabsNav.m(props.size)]: props.size,
  [nsTabsNav.m(props.type)]: props.type
}));

const tabClasses = computed(() => ({
  [nsTabsNav.e('tab')]: true,
  [nsTabsNav.em('tab', 'scroll')]: isScroll.value
}));

const listClasses = computed(() => ({
  [nsTabsNav.e('tab-list')]: true,
  [nsTabsNav.em('tab-list', 'no-padding')]:
    !props.headerPadding &&
    ['line', 'text'].includes(props.type) &&
    props.direction === 'horizontal'
}));

const listStyles = computed<CSSProperties>(() =>
  getTabListStyle({
    direction: props.direction,
    type: props.type,
    offset: offset.value
  })
);

const canEdit = computed(
  () => props.editable && ['line', 'card', 'card-gutter'].includes(props.type)
);

const handleButtonClick = () => {};

const getSize = () => {};

const handleResize = () => {};

const handleClick = () => {};

const handleDelete = () => {};
</script>
