<template>
  <div>
    menu-item-group
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { menuItemGroupProps } from './menu-item-group';
import '../style/menu.scss';

defineOptions({
  name: 'TuMenuItemGroup'
});

const props = defineProps(menuItemGroupProps);
</script>
