<template>
  <li :class="nsSelectGroup.e('title')">
    <slot name="label">
      {{ label }}
    </slot>
  </li>
  <slot />
</template>

<script lang="ts" setup>
import { selectGroupProps } from './select-group';
import { useNamespace } from '@tu-view-plus/hooks';
import '../style/select.scss';

defineOptions({
  name: 'TuList'
});

defineProps(selectGroupProps);

const nsSelectGroup = useNamespace('select-group');
</script>
