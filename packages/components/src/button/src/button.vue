<template>
  <button :class="classes" @click="handleClick"><slot /></button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { buttonEmits, buttonProps } from './button';
import useButton from './use-button';
import '../style/index.scss';

defineOptions({
  name: 'TuButton',
  inheritAttrs: false
});

const props = defineProps(buttonProps);
const emit = defineEmits(buttonEmits);

const { classes, handleClick } = useButton(props, emit);
</script>

