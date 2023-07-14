<template>
  <div :class="classes" @click.prevent="handleValueSwitch">
    <input
      ref="input"
      type="checkbox"
      role="switch"
      :id="inputId"
      :name="name"
      :class="nsSwitch.e('input')"
      :true-value="activeValue"
      :false-value="inactiveValue"
      :disabled="switchDisabled"
      :tabindex="tabindex"
      :aria-checked="checked"
      :aria-disabled="switchDisabled"
      @change="handleChange"
      @keydown.enter="handleValueSwitch"
    />

    <span ref="core" :class="nsSwitch.e('core')">
      <div :class="nsSwitch.e('action')">
        <tu-icon v-if="loading" :class="nsSwitch.is('loading')">
          <Loading />
        </tu-icon>
      </div>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { computed, shallowRef } from 'vue';
import { switchProps, switchEmits } from './switch';
import { useNamespace } from '@tu-view-plus/hooks';
import useSwitch from './use-switch';

import { Loading } from '@tu-view-plus/icons-vue';
import '../style/switch.scss';

defineOptions({
  name: 'TuSwitch'
});

const input = shallowRef<HTMLInputElement>();

const props = defineProps(switchProps);
const emit = defineEmits(switchEmits);

const nsSwitch = useNamespace('switch');

const {
  inputId,
  switchSize,
  switchDisabled,
  checked,
  handleValueSwitch,
  handleChange
} = useSwitch(props, emit, input);

const classes = computed(() => ({
  [nsSwitch.b()]: true,
  [nsSwitch.m(switchSize.value)]: switchSize.value,
  [nsSwitch.m(props.type)]: props.type,
  [nsSwitch.is('disabled')]: switchDisabled.value,
  [nsSwitch.is('checked')]: checked.value
}));
</script>
