<template>
  <div>
    tabNav
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue';
import { useNamespace } from '@tu-view-plus/hooks';
import { tabNavProps } from './tab-nav';
import '../style/tabs.scss';

defineOptions({
  name: 'TuTabNav'
});

const props = defineProps(tabNavProps);

const { tabs, activeKey, activeIndex, direction } = toRefs(props);

const nsTabsNav = useNamespace('tabs-nav');
</script>
s
