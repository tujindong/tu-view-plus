<template>
  <div tabindex="0" :class="tabsTabClasses" v-bind="eventHandlers">
    <span :class="nsTabsTab.e('title')">
      <slot />
    </span>
    <tu-icon
      v-if="editable && tab.closable"
      :class="nsTabsTab.e('button-close')"
      @click="handleDelete"
    >
      <Close />
    </tu-icon>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue';
import { tabsTabProps, tabsTabEmits } from './tabs-tab';
import { useNamespace } from '@tu-view-plus/hooks';
import { Close } from '@tu-view-plus/icons-vue';
import { TabsContext, tabsInjectionKey } from './constants';
import { TuIcon } from '../../icon';
import '../style/tabs.scss';

defineOptions({
  name: 'TuTabsTab'
});

const props = defineProps(tabsTabProps);
const emit = defineEmits(tabsTabEmits);

const nsTabsTab = useNamespace('tabs-tab');

const tabsCtx = inject<Partial<TabsContext>>(tabsInjectionKey, {});

const tabsTabClasses = computed(() => ({
  [nsTabsTab.b()]: true,
  [nsTabsTab.is('active')]: props.active,
  [nsTabsTab.is('closable')]: props.editable && props.tab.closable,
  [nsTabsTab.is('disabled')]: props.tab.disabled
}));

const eventHandlers = computed(() => {
  return Object.assign(
    tabsCtx.trigger === 'click'
      ? { onClick: handleClick }
      : { onMouseover: handleClick },
    { onKeydown: onKeyDown }
  );
});

const handleClick = (e: Event) => {
  if (!props.tab.disabled) {
    emit('click', props.tab.key, e);
  }
};

const handleDelete = (e: Event) => {
  if (!props.tab.disabled) {
    emit('delete', props.tab.key, e);
  }
};

const onKeyDown = (ev: KeyboardEvent) => {
  if (ev.key === 'Enter') {
    handleClick(ev);
  }
};
</script>
