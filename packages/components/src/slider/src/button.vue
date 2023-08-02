<template>
  <div ref="button" :class="classes"></div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { buttonProps } from './button';
import { useNamespace } from '@tu-view-plus/hooks';

const props = defineProps(buttonProps);

const nsSlider = useNamespace('slider');

const classes = computed(() => ({
  [nsSlider.e('button-wrapper')]: true
}));
</script>