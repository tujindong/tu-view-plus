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
          <div
            ref="listRef"
            :class="nsTabs.e('nav-tab-list')"
            :style="listStyles"
          >
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
            <tu-tabs-nav-indicate
              v-if="activeTabRef"
              ref="indicateRef"
              :activeTabRef="activeTabRef"
              :direction="direction"
              :disabled="false"
              :animation="animation"
            />
          </div>
        </tu-resize-observer>
      </div>
    </tu-resize-observer>
    <tu-tabs-button
      v-if="isScroll"
      type="next"
      :direction="direction"
      :disabled="offset >= maxOffset"
      @click="handleButtonClick"
    />
    <div :class="nsTabs.e('nav-extra')">
      <div
        v-if="showAddButton"
        :class="nsTabs.e('button-add')"
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
import {
  ComponentPublicInstance,
  computed,
  toRefs,
  ref,
  watch,
  nextTick,
  onMounted
} from 'vue';
import { useNamespace } from '@tu-view-plus/hooks';
import { isUndefined } from '@tu-view-plus/utils';
import { tabsNavProps, tabsNavEmits } from './tabs-nav';
import { Plus } from '@tu-view-plus/icons-vue';
import TuTabsButton from './tabs-button.vue';
import TuTabsTab from './tabs-tab.vue';
import TuTabsNavIndicate from './tabs-nav-indicate.vue';
import { TuIcon } from '../../icon';
import { TuResizeObserver } from '../../resize-observer';
import { getTabListStyle, gap } from './utils';
import '../style/tabs.scss';

import type { CSSProperties } from 'vue';

defineOptions({
  name: 'TuTabsNav'
});

const props = defineProps(tabsNavProps);
const emit = defineEmits(tabsNavEmits);

const { tabs, activeKey, activeIndex, direction } = toRefs(props);

const nsTabs = useNamespace('tabs');

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
  [nsTabs.e('nav')]: true,
  [nsTabs.em('nav', props.direction)]: props.direction,
  [nsTabs.em('nav', props.position)]: props.position,
  [nsTabs.em('nav', props.size)]: props.size,
  [nsTabs.em('nav', props.type)]: props.type
}));

const tabClasses = computed(() => ({
  [nsTabs.e('nav-tab')]: true,
  [nsTabs.em('nav-tab', 'scroll')]: isScroll.value
}));

const listStyles = computed<CSSProperties>(() =>
  getTabListStyle({
    direction: props.direction,
    type: props.type,
    offset: offset.value
  })
);

const getValidOffset = (offset: number) => {
  if (!wrapperRef.value || !listRef.value || offset < 0) return 0;
  if (offset > maxOffset.value) return maxOffset.value;
  return offset;
};

const getNextOffset = (type: string) => {
  if (!wrapperRef.value) return 0;
  return type === 'previous'
    ? offset.value - wrapperLength.value
    : offset.value + wrapperLength.value;
};

const isOverflow = () => {
  if (wrapperRef.value && listRef.value) {
    return props.direction === 'vertical'
      ? listRef.value.offsetHeight > wrapperRef.value.offsetHeight
      : listRef.value.offsetWidth > wrapperRef.value.offsetWidth;
  }
  return false;
};

const getWrapperLength = () => {
  return (
    (direction.value === 'vertical'
      ? wrapperRef.value?.offsetHeight
      : wrapperRef.value?.offsetWidth) ?? 0
  );
};

const getMaxOffset = () => {
  if (!listRef.value || !wrapperRef.value) return 0;

  if (direction.value === 'vertical') {
    return listRef.value.offsetHeight - wrapperRef.value.offsetHeight;
  }
  return listRef.value.offsetWidth - wrapperRef.value.offsetWidth;
};

const getTabEndOffsets = () => {
  return tabs.value.map((item) => {
    const ele = tabsRef.value[item.key];
    if (direction.value === 'vertical') {
      return ele.offsetTop + ele.offsetHeight;
    }
    return ele.offsetLeft + ele.offsetWidth;
  });
};

const isInView = (index: number) => {
  return (
    (tabEndOffsets.value[index - 1] ?? 0) >= offset.value &&
    tabEndOffsets.value[index] <= offset.value + wrapperLength.value
  );
};

const handleButtonClick = (type: string) => {
  offset.value = getValidOffset(getNextOffset(type));
};

const getSize = () => {
  isScroll.value = isOverflow();
  if (isScroll.value) {
    wrapperLength.value = getWrapperLength();
    maxOffset.value = getMaxOffset();
    tabEndOffsets.value = getTabEndOffsets();
    if (offset.value > maxOffset.value) {
      offset.value = maxOffset.value;
    }
  } else {
    offset.value = 0;
  }
};

const handleResize = () => {
  getSize();
  if (indicateRef.value) {
    indicateRef.value.$forceUpdate();
  }
};

const handleClick = (key: string | number, evt: Event) => {
  emit('click', key, evt);
};

const handleDelete = (key: string | number, evt: Event) => {
  emit('delete', key, evt);
};

watch(tabs, () => {
  nextTick(() => getSize());
});

watch(activeIndex, (current, pre) => {
  nextTick(() => {
    if (isScroll.value) {
      if (current >= pre) {
        const offsetIndex =
          current < tabEndOffsets.value.length - 1 ? current + 1 : current;
        if (!isInView(offsetIndex)) {
          offset.value =
            tabEndOffsets.value[offsetIndex] - wrapperLength.value + gap;
        }
      } else {
        const offsetIndex = current > 0 ? current - 1 : current;
        if (!isInView(offsetIndex)) {
          offset.value = tabEndOffsets.value[offsetIndex - 1] ?? 0;
        }
      }
    }
  });
});

onMounted(() => {
  getSize();
});
</script>
