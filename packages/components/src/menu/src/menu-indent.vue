<template>
  <span v-if="level > 1" :class="nsMenu.e('indent-list')">
    <span
      v-for="index in level - 1"
      :key="index"
      :class="nsMenu.e('indent')"
      :style="`width: ${levelIndent}px`"
    />
  </span>
</template>
<script>
import { defineComponent, toRef } from 'vue';
import { useMenuContext } from './hooks';
import { useNamespace } from '@tu-view-plus/hooks';

export default defineComponent({
  name: 'TuMenuIndent',

  props: {
    level: {
      type: Number,
      default: 1
    }
  },

  setup() {
    const nsMenu = useNamespace('menu');
    const menuContext = useMenuContext();

    return {
      nsMenu,
      levelIndent: toRef(menuContext, 'levelIndent')
    };
  }
});
</script>
