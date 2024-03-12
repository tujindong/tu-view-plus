<template>
  <div>
    menu-item
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { menuItemProps } from './menu-item';
import '../style/menu.scss';

defineOptions({
  name: 'TuMenuItem'
});

const props = defineProps(menuItemProps);
</script>
