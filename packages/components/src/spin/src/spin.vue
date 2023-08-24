<template>
  <div :class="classes">
    <slot />
    <template v-if="loading">
      <div v-if="$slots.default" :class="nsSpin.e('mask')"></div>
      <div :class="nsSpin.e('content')">
        <tu-icon
          v-if="$slots.icon"
          :class="[nsSpin.e('icon'), 'is-loading']"
          :size="size"
        >
          <slot name="icon" />
        </tu-icon>
        <template v-else>
          <tu-spin-dot v-if="dot" :size="size" />
          <tu-spin-loading v-else :size="size" />
        </template>
        <div v-if="$slots.tip" :class="nsSpin.e('tip')">
          <slot name="tip" />
        </div>
        <div v-if="tip" :class="nsSpin.e('tip')">{{ tip }}</div>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue';
import { spinProps } from './spin';
import { useNamespace } from '@tu-view-plus/hooks';
import TuIcon from '../../icon';
import TuSpinDot from './spin-dot.vue';
import TuSpinLoading from './spin-loading.vue';
import '../style/spin.scss';

defineOptions({
  name: 'TuSpin'
});

const props = defineProps(spinProps);

const slots = useSlots();

const nsSpin = useNamespace('spin');

const classes = computed(() => ({
  [nsSpin.b()]: true,
  [nsSpin.m('with-mask')]: slots.default,
  [nsSpin.m('with-tip')]: props.tip
}));
</script>
