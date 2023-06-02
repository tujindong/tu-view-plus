<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { rowProps } from './row';
import { useNamespace } from '@tu-view-plus/hooks';
import '../style/row.scss';

defineOptions({
  name: 'TuRow'
});

const props = defineProps(rowProps);

const nsRow = useNamespace('row');

const classes = computed(() => ({
  [nsRow.b()]: true
}));
</script>
