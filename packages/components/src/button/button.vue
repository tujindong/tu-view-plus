// button.vue
<template>
  <button class="tu-button" :class="buttonStyle"><slot /></button>
</template>

<script lang="ts" setup>
import './style/index.scss';
import { computed } from 'vue';
defineOptions({ name: 'tu-button' });
type ButtonProps = {
  type?: string;
};
const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
  return { [`tu-button--${buttonProps.type}`]: buttonProps.type };
});
</script>


