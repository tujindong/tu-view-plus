<template>
  <div>
    sub-menu
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { subMenuProps } from './sub-menu';
import '../style/menu.scss';

defineOptions({
  name: 'TuSubMenu'
});

const props = defineProps(subMenuProps);
</script>
