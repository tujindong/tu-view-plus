<template>
  <div>
    sub-menu-inline
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { subMenuInlineProps } from './sub-menu-inline';
import '../style/menu.scss';

defineOptions({
  name: 'TuSubMenuInline'
});

const props = defineProps(subMenuInlineProps);
</script>
