<template>
  <a
    :class="classes"
    :href="disabled || !href ? undefined : href"
    @click="handleClick"
  >
    <tu-icon v-if="icon">
      <component :is="icon" />
    </tu-icon>
    <span v-if="$slots.default" :class="nsLink.e('inner')">
      <slot />
    </span>
    <slot v-if="$slots.icon" name="icon"></slot>
  </a>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { linkProps, linkEmits } from './link';
import { useNamespace } from '@tu-view-plus/hooks';
import TuIcon from '../../icon';

import '../style/link.scss';

defineOptions({
  name: 'TuLink'
});

const props = defineProps(linkProps);
const emit = defineEmits(linkEmits);

const nsLink = useNamespace('link');

const classes = computed(() => ({
  [nsLink.b()]: true,
  [nsLink.m(`${props.type}`)]: props.type,
  [nsLink.is('disabled')]: props.disabled,
  [nsLink.is('underline')]: props.underline && !props.disabled
}));

const handleClick = (evt: MouseEvent) => {
  if (!props.disabled) emit('click', evt);
};
</script>
