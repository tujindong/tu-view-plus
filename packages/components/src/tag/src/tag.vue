<template>
  <span
    v-if="disableTransitions"
    :class="classes"
    :style="styles"
    @click="handleClick"
  >
    <tu-icon v-if="$slots.icon" :class="nsTag.e('icon')">
      <slot name="icon" />
    </tu-icon>
    <span :class="nsTag.e('content')">
      <slot />
    </span>
    <tu-icon v-if="closable" @click.stop="handleClose">
      <Close />
    </tu-icon>
  </span>
  <transition v-else :name="`${defaultNamespace}-zoom-in-center`" appear>
    <span :class="classes" :style="styles" @click="handleClick">
      <tu-icon v-if="$slots.icon" :class="nsTag.e('icon')">
        <slot name="icon" />
      </tu-icon>
      <span :class="nsTag.e('content')">
        <slot />
      </span>
      <tu-icon
        v-if="closable"
        :class="nsTag.e('close')"
        @click.stop="handleClose"
      >
        <Close />
      </tu-icon>
    </span>
  </transition>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { tagProps, tagEmits } from './tag';
import { useNamespace, defaultNamespace } from '@tu-view-plus/hooks';
import { Close } from '@tu-view-plus/icons-vue';
import { useFormSize } from '../../form';
import TuIcon from '../../icon';
import '../style/tag.scss';

import type { CSSProperties } from 'vue';

defineOptions({
  name: 'TuTag'
});

const props = defineProps(tagProps);
const emit = defineEmits(tagEmits);

const nsTag = useNamespace('tag');

const tagSize = useFormSize();

const classes = computed(() => ({
  [nsTag.b()]: true,
  [nsTag.m(props.effect)]: props.effect,
  [nsTag.m(tagSize.value)]: tagSize.value,
  [nsTag.is('round')]: props.round,
  [nsTag.is('hit')]: props.hit,
  [nsTag.is('closable')]: props.closable
}));

const styles = computed<CSSProperties>(() => {
  const styles: CSSProperties = {};
  if (
    props.effect === 'light' ||
    props.effect === 'neumorphic' ||
    props.effect === 'plain'
  )
    styles.color = props.color;
  if (props.effect === 'dark') styles.background = props.color;
  if (props.effect === 'light') styles['--color'] = props.color;
  if (props.effect !== 'neumorphic') styles.borderColor = props.color;
  return styles;
});

const handleClose = (evt: MouseEvent) => {
  emit('close', evt);
};

const handleClick = (evt: MouseEvent) => {
  emit('click', evt);
};
</script>
