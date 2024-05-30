<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { colorPickerProps } from './color-picker';
import '../style/color-picker.scss';

defineOptions({
  name: 'TuColorPicker'
});

const props = defineProps(colorPickerProps);
</script>
