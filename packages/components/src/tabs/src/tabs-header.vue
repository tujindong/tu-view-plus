<template>
  ++++{{ panes }}
  <div :class="tabsHeaderClasses">
    <template v-if="editable || addable">
      <span
        :class="nsTabs.e('new-tab')"
        tabindex="0"
        @click="handleTabAdd"
        @keydown="handleTabsKeydown"
      >
        <tu-icon :class="nsTabs.is('icon-plus')">
          <Plus />
        </tu-icon>
      </span>
    </template>

    <tu-tab-nav
      ref="tabNavRef"
      :currentName="currentName"
      :editable="editable"
      :type="type"
      :stretch="stretch"
      :panes="panes"
      @tabClick="handleTabClick"
      @tabRemove="handleTabRemove"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, getCurrentInstance, provide } from 'vue';
import { EVENT_CODE } from '@tu-view-plus/constants';
import { tabsHeaderProps } from './tabs-header';
import { TuIcon } from '../../icon';
import { Plus } from '@tu-view-plus/icons-vue';
import { useNamespace, useOrderedChildren } from '@tu-view-plus/hooks';
import TuTabNav from './tab-nav.vue';
import { tabsRootContextKey } from './constants';
import '../style/tabs.scss';

import type { TabNavInstance } from './tab-nav';
import type { TabPaneName, TabsPaneContext } from './constants';

defineOptions({
  name: 'TuTabsHeader'
});

const props = defineProps(tabsHeaderProps);

const nsTabs = useNamespace('tabs');

console.log('123333~~~', getCurrentInstance()!);

const {
  children: panes,
  addChild: registerPane,
  removeChild: unregisterPane
} = useOrderedChildren<TabsPaneContext>(getCurrentInstance()!, 'TuTabPane');

const currentName = ref<TabPaneName>(
  props.modelValue ?? props.activeName ?? '0'
);

const tabNavRef = ref<TabNavInstance>();

const tabsHeaderClasses = computed(() => ({
  [nsTabs.e('header')]: true,
  [nsTabs.is(props.tabPosition)]: props.tabPosition
}));

const handleTabAdd = () => {};

const handleTabsKeydown = (evt: KeyboardEvent) => {
  if (evt.code === EVENT_CODE.enter) handleTabAdd();
};

const handleTabClick = () => {};

const handleTabRemove = () => {};

provide(tabsRootContextKey, {
  props,
  currentName,
  registerPane,
  unregisterPane
});
</script>