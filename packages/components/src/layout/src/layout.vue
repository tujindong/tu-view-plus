<template>
  <section :class="classes">
    <slot />
  </section>
</template>

<script lang="ts" setup>
import { ref, computed, provide } from 'vue';
import { layoutProps } from './layout';
import { useNamespace } from '@tu-view-plus/hooks';
import { LayoutSiderInjectionKey } from './context';
import '../style/layout.scss';

defineOptions({
  name: 'TuLayout'
});

const props = defineProps(layoutProps);

const nsLayout = useNamespace('layout');

const siderIds = ref<string[]>([]);

const classes = computed(() => ({
  [nsLayout.b()]: true,
  [nsLayout.is('has-sider')]: props.hasSider || siderIds.value.length
}));

provide(LayoutSiderInjectionKey, {
  onSiderMount: (id) => siderIds.value.push(id),

  onSiderUnMount: (id) => {
    siderIds.value = siderIds.value.filter((_id) => _id !== id);
  }
});
</script>
