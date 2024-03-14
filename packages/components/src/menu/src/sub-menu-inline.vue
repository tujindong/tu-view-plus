<template>
  <div :class="nsMenu.e('inline')">
    <div :class="headerClasses" @click="onHeaderClick">
      <TuMenuIndent :level="level" />
      <template v-if="$slots.icon">
        <span :class="nsMenu.e('inline-icon')">
          <slot name="icon"></slot>
        </span>
        <span :class="nsMenu.e('inline-title')">
          <slot name="title">{{ title }}</slot>
        </span>
      </template>
      <template v-else>
        <slot name="title">{{ title }}</slot>
      </template>
      <span
        :class="[nsMenu.e('inline-icon-suffix'), nsMenu.is('open', isOpen)]"
      >
        <slot name="expand-icon-down" />
      </span>
    </div>
    <TuTransition>
      <div v-show="isOpen" :class="nsMenu.e('content')">
        <slot />
      </div>
    </TuTransition>
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue';
import { subMenuInlineProps } from './sub-menu-inline';
import { useNamespace } from '@tu-view-plus/hooks';
import { useMenu, useLevel, useMenuContext } from './hooks';
import TuMenuIndent from './menu-indent.vue';
import TuTransition from '../../transition';
import '../style/menu.scss';

defineOptions({
  name: 'TuSubMenuInline'
});

const props = defineProps(subMenuInlineProps);

const nsMenu = useNamespace('menu');

const slot = useSlots();

const { key } = useMenu();
const { level } = useLevel({
  provideNextLevel: true
});
const menuContext = useMenuContext();
const isSelected = computed(() => props.isChildrenSelected);
const isOpen = computed(
  () => (menuContext.openKeys || []).indexOf(key.value) > -1
);

const headerClasses = computed(() => ({
  [nsMenu.e('inline-header')]: true,
  [nsMenu.is('selected')]: isSelected,
  [nsMenu.is('has-icon')]: slot.icon
}));

const onHeaderClick = () => {
  menuContext.onSubMenuClick &&
    menuContext.onSubMenuClick(key.value, level.value);
};
</script>
