<template>
  ~~{{ panes }}
  <div :class="navWrapClasses">
    <template v-if="scrollable">
      <span
        :class="[nsTabs.e('nav-prev'), nsTabs.is('disabled', !scrollable.prev)]"
        @click="scrollPrev"
      >
        <tu-icon>
          <ArrowLeft />
        </tu-icon>
      </span>
      <span
        :class="[nsTabs.e('nav-next'), nsTabs.is('disabled', !scrollable.next)]"
      >
        <tu-icon>
          <ArrowRight />
        </tu-icon>
      </span>
    </template>

    <div :class="nsTabs.e('nav-scroll')">
      <div
        role="tablist"
        :class="navClasses"
        :style="navStyles"
        @keydown="changeTab"
      >
        <tu-tab-bar v-if="!type" />
        <div
          v-for="(pane, index) in panes"
          role="tab"
          :class="[
            navItemClasses,
            nsTabs.is('active', pane.active),
            nsTabs.is('disabled', pane.props.disabled),
            nsTabs.is(
              'closable',
              !pane.props.disabled && (pane.isClosable || props.editable)
            )
          ]"
          :aria-selected="pane.active"
          :aria-controls="`pane-${pane.props.name ?? pane.index ?? `${index}`}`"
          :ref="`tab-${pane.uid}`"
          :key="`tab-${pane.props.name ?? pane.index ?? index}`"
          :id="`tab-${pane.props.name ?? pane.index ?? index}`"
          :tabindex="!pane.props.disabled && pane.active ? 0 : -1"
          @focus="setFocus"
          @blur="removeFocus"
          @click="handlePaneClick"
          @keydown="handlePaneKeydown"
        >
          12333
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, inject } from 'vue';
import { tabNavProps } from './tab-nav';
import { useNamespace } from '@tu-view-plus/hooks';
import { throwError } from '@tu-view-plus/utils';
import { tabsRootContextKey } from './constants';
import { TuIcon } from '../../icon';
import { ArrowLeft, ArrowRight } from '@tu-view-plus/icons-vue';
import TuTabBar from './tab-bar.vue';
import '../style/tabs.scss';

import type { CSSProperties } from 'vue';

interface Scrollable {
  next?: boolean;
  prev?: number;
}

defineOptions({
  name: 'TuTabNav'
});

const props = defineProps(tabNavProps);

const nsTabs = useNamespace('tabs');

const rootTabs = inject(tabsRootContextKey);
if (!rootTabs) throwError('TuTabs', `<tu-tabs><tab-nav /></tu-tabs>`);

const scrollable = ref<false | Scrollable>(false);
const navOffset = ref(0);
const isFocus = ref(false);

const sizeName = computed(() =>
  ['top', 'bottom'].includes(rootTabs.props.tabPosition) ? 'width' : 'height'
);

const navWrapClasses = computed(() => ({
  [nsTabs.e('nav-wrap')]: true,
  [nsTabs.is('scrollable')]: scrollable.value,
  [nsTabs.is(rootTabs.props.tabPosition)]: rootTabs.props.tabPosition
}));

const navClasses = computed(() => ({
  [nsTabs.e('nav')]: true,
  [nsTabs.is(rootTabs.props.tabPosition)]: rootTabs.props.tabPosition,
  [nsTabs.is('stretch')]:
    props.stretch && ['top', 'bottom'].includes(rootTabs.props.tabPosition)
}));

const navStyles = computed<CSSProperties>(() => {
  const dir = sizeName.value === 'width' ? 'X' : 'Y';
  return {
    transform: `translate${dir}(-${navOffset.value}px)`
  };
});

const navItemClasses = computed(() => ({
  [nsTabs.e('item')]: true,
  [nsTabs.is(rootTabs.props.tabPosition)]: rootTabs.props.tabPosition,
  [nsTabs.is('focus')]: isFocus
}));

const scrollPrev = () => {};

const changeTab = () => {};

const setFocus = () => {};

const removeFocus = () => {};

const handlePaneClick = () => {};

const handlePaneKeydown = () => {};
</script>