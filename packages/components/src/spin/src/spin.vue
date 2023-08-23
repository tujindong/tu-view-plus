<template>
  <div :class="classes">
    <slot />
    <template v-if="loading">
      <div v-if="$slots.default" :class="nsSpin.e('mask')"></div>
      <div :class="nsSpin.e('content')">
        <tu-icon
          v-if="!dot"
          :class="[nsSpin.e('icon'), 'is-loading']"
          :size="size"
        >
          <slot v-if="$slots.icon" name="icon" />
          <loading v-else />
        </tu-icon>
        <tu-spin-dot v-else :size="size" />
        <div v-if="tip" :class="nsSpin.e('tip')">{{ tip }}</div>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue';
import { spinProps } from './spin';
import { useNamespace } from '@tu-view-plus/hooks';
import { Loading } from '@tu-view-plus/icons-vue';
import TuIcon from '../../icon';
import TuSpinDot from './spin-dot.vue';
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
  [nsSpin.m('with-tip')]: props.tip,
  [nsSpin.is('loading')]: props.loading
}));
</script>
