<template>
  <li :class="nsSelect.e('group-title')">
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

const nsSelect = useNamespace('select');
</script>
