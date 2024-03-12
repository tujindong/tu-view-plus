<template>
  <div>
    sub-menu-pop
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { subMenuPopProps } from './sub-menu-pop';
import '../style/menu.scss';

defineOptions({
  name: 'TuSubMenuPop'
});

const props = defineProps(subMenuPopProps);
</script>
