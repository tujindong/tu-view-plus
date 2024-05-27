<template>
  <div :class="nsMenu.e('group')">
    <div :class="nsMenu.e('group-title')">
      <TuMenuIndent :level="level" />
      <slot name="title">{{ title }}</slot>
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { menuItemGroupProps } from './menu-item-group';
import { useNamespace } from '@tu-view-plus/hooks';
import { useLevel, provideLevel } from './hooks/use-level';
import TuMenuIndent from './menu-indent.vue';
import '../style/menu.scss';

defineOptions({
  name: 'TuMenuItemGroup'
});

defineProps(menuItemGroupProps);

const { level } = useLevel();

const nextLevel = computed(() =>
  level.value === 1 ? level.value + 1 : level.value
);

provideLevel(nextLevel);

const nsMenu = useNamespace('menu');
</script>
