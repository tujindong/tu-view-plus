<template>
  <li :class="nsDropdownGroup.e('title')">
    <slot name="title">{{ title }}</slot>
  </li>
  <slot />
</template>

<script lang="ts" setup>
import { dropdownGroupProps } from './dropdown-group';
import { useNamespace } from '@tu-view-plus/hooks';
import '../style/dropdown.scss';

defineOptions({
  name: 'TuDropdownGroup'
});

const nsDropdownGroup = useNamespace('dropdown-group');

defineProps(dropdownGroupProps);
</script>