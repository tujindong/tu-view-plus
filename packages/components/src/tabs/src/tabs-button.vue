<template>
  <div :class="tabsButtonClass" @click="handleClick">
    <template v-if="direction === 'horizontal'">
      <tu-icon v-if="type === 'next'">
        <ArrowRight />
      </tu-icon>
      <tu-icon v-else>
        <ArrowLeft />
      </tu-icon>
    </template>
    <template v-else>
      <tu-icon v-if="type === 'next'">
        <ArrowDown />
      </tu-icon>
      <tu-icon v-else>
        <ArrowUp />
      </tu-icon>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { tabsButtonProps, tabsButtonEmits } from './tabs-button';
import { useNamespace } from '@tu-view-plus/hooks';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown
} from '@tu-view-plus/icons-vue';
import TuIcon from '../../icon';
import '../style/tabs.scss';

defineOptions({
  name: 'TuTabsButton'
});

const props = defineProps(tabsButtonProps);
const emit = defineEmits(tabsButtonEmits);

const nsTabs = useNamespace('tabs');

const tabsButtonClass = computed(() => ({
  [nsTabs.e('nav-button')]: true,
  [nsTabs.em('nav-button', 'left')]:
    props.direction === 'horizontal' && props.type === 'previous',
  [nsTabs.em('nav-button', 'right')]:
    props.direction === 'horizontal' && props.type === 'next',
  [nsTabs.em('nav-button', 'up')]:
    props.direction === 'vertical' && props.type === 'previous',
  [nsTabs.em('nav-button', 'down')]:
    props.direction === 'vertical' && props.type === 'next',
  [nsTabs.is('disabled')]: props.disabled
}));

const handleClick = () => {
  if (!props.disabled) emit('click', props.type);
};
</script>
