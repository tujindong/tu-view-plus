<template>
  <li :class="nsSelect.e('group')">
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
  name: 'TuSelectGroup'
});

defineProps(selectGroupProps);

const nsSelect = useNamespace('select');
</script>
