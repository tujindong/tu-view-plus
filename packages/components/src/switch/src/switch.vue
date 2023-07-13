<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { switchProps, switchEmits } from './switch';
import '../style/switch.scss';

defineOptions({
  name: 'TuSwitch'
});

const props = defineProps(switchProps);
const emit = defineEmits(switchEmits);
</script>
