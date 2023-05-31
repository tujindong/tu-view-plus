<template>
  <div :class="classes"><slot /></div>
</template>

<script lang="ts" setup>
import { provide, toRef, reactive, computed } from 'vue';
import { buttonGroupProps } from './button-group';
import { buttonGroupInjectionKey } from './constants';
import { useNamespace } from '@tu-view-plus/hooks';
import '../style/button-group.scss';

defineOptions({
  name: 'TuButtonGroup',
  inheritAttrs: false
});

const props = defineProps(buttonGroupProps);

provide(
  buttonGroupInjectionKey,
  reactive({
    size: toRef(props, 'size'),
    type: toRef(props, 'type')
  })
);

const nsButtonGroup = useNamespace('button-group');

const classes = computed(() => ({
  [nsButtonGroup.b()]: true
}));
</script>