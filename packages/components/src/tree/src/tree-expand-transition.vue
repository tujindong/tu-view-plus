<template>
  <transition
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @after-enter="onAfterEnter"
    @before-leave="onBeforeLeave"
  >
    <slot />
  </transition>
</template>

<script lang="ts" setup>
import {
  treeExpandTransitionProps,
  treeExpandTransitionEmits
} from './tree-expand-transition';

defineOptions({
  name: 'TuTreeExpandTransition'
});

const props = defineProps(treeExpandTransitionProps);
const emit = defineEmits(treeExpandTransitionEmits);

const onBeforeEnter = (el: HTMLDivElement) => {
  el.style.height = props.expanded ? '0' : `${el.scrollHeight}px`;
};

const onEnter = (el: HTMLDivElement) => {
  el.style.height = props.expanded ? `${el.scrollHeight}px` : '0';
};

const onAfterEnter = (el: HTMLDivElement) => {
  el.style.height = props.expanded ? '' : '0';
  emit('end');
};

const onBeforeLeave = (el: HTMLDivElement) => {
  el.style.display = 'none';
};
</script>
