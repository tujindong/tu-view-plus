<template>
  <TuResizeObserverV2 @resize="onResize">
    <div :class="classes">
      <slot> </slot>
    </div>
  </TuResizeObserverV2>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import { resizeTriggerProps, resizeTriggerEmits } from './resize-trigger';
import { useNamespace } from '@tu-view-plus/hooks';
import TuResizeObserverV2 from '../../resize-observer/src/resize-observer-v2.vue';
import '../style/resize-trigger.scss';

defineOptions({
  name: 'TuResizeTrigger'
});

const props = defineProps(resizeTriggerProps);
const emit = defineEmits(resizeTriggerEmits);

const { direction } = toRefs(props);

const nsResizeTrigger = useNamespace('resize-trigger');

const isHorizontal = computed(() => direction?.value === 'horizontal');

const classes = computed(() => ({
  [nsResizeTrigger.b()]: true,
  [nsResizeTrigger.m('horizontal')]: isHorizontal.value,
  [nsResizeTrigger.m('vertical')]: !isHorizontal.value
}));

const onResize = (entry: ResizeObserverEntry) => {
  emit('resize', entry);
};
</script>
