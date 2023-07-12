<template>
  <Transition :name="transitionName" v-bind="attrs">
    <slot />
  </Transition>
</template>

<script lang="ts" setup>
import { computed, useAttrs } from 'vue';
import { transitionProps } from './transition';
import { useNamespace } from '@tu-view-plus/hooks';
import '../style/transition.scss';

defineOptions({
  name: 'TuTransition',
  inheritAttrs: true
});

const nsTransition = useNamespace('');

const props = defineProps(transitionProps);
const attrs = useAttrs();

const transitionName = computed(() => nsTransition.b() + props.name);
</script>
