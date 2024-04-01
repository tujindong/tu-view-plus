<template>
  <div>
    sider
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { layoutSiderProps } from './layout-sider';
import '../style/layout.scss';

defineOptions({
  name: 'TuLayoutSider'
});

const props = defineProps(layoutSiderProps);
</script>
