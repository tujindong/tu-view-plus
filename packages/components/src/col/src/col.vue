<template>
  <component :is="tag" :class="classes" :style="style">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue';
import type { CSSProperties } from 'vue';
import { colProps } from './col';
import { useNamespace } from '@tu-view-plus/hooks';
import { rowContextKey } from '../../row';
import { isNumber, isObject } from '@tu-view-plus/utils';
import '../style/col.scss';

defineOptions({
  name: 'TuCol'
});

const props = defineProps(colProps);

const { gutter } = inject(rowContextKey, { gutter: computed(() => 0) });

const nsCol = useNamespace('col');

const style = computed(() => {
  const styles: CSSProperties = {};
  if (gutter.value) {
    styles.paddingLeft = styles.paddingRight = `${gutter.value / 2}px`;
  }
  return styles;
});

const classes = computed(() => {
  const cls: string[] = [];
  const pos = ['span', 'offset', 'pull', 'push'] as const;
  pos.forEach((prop) => {
    const size = props[prop];
    if (isNumber(size)) {
      if (prop === 'span') cls.push(nsCol.e(`${size}`));
      else if (size > 0) cls.push(nsCol.e(`${prop}-${size}`));
    }
  });

  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
  sizes.forEach((size) => {
    if (isNumber(props[size])) {
      cls.push(nsCol.e(`${size}-${props[size]}`));
    } else if (isObject(props[size])) {
      Object.entries(props[size]).forEach(([prop, sizeProp]) => {
        cls.push(
          prop !== 'span'
            ? nsCol.e(`${size}-${prop}-${sizeProp}`)
            : nsCol.e(`${size}-${sizeProp}`)
        );
      });
    }
  });

  if (gutter.value) cls.push(nsCol.is('guttered'));
  return [nsCol.b(), cls];
});
</script>
