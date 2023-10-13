<template>
  <div :class="collapseItemClasses">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue';
import { collapseItemProps } from './collapse-item';
import { useNamespace } from '@tu-view-plus/hooks';
import { collapseContextKey } from './constants';
import '../style/collapse.scss';

defineOptions({
  name: 'TuCollapseItem'
});

const props = defineProps(collapseItemProps);

const nsCollapseItem = useNamespace('collapse-item');

const collapse = inject(collapseContextKey);

const isActive = computed(() =>
  collapse?.activeNames.value.includes(props.name)
);

const collapseItemClasses = computed(() => ({
  [nsCollapseItem.b()]: true,
  [nsCollapseItem.is('active')]: isActive.value,
  [nsCollapseItem.is('disabled')]: props.disabled
}));
</script>
