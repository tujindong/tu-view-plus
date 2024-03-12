<template>
  <div>
    base-menu
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { baseMenuProps } from './base-menu';
import '../style/menu.scss';

defineOptions({
  name: 'TuBaseMenu'
});

const props = defineProps(baseMenuProps);
</script>
