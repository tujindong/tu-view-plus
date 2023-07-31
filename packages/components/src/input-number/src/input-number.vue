<template>
  <div :class="classes" @dragstart.prevent>
    <span
      v-if="controls"
      role="button"
      :aria-label="t('tu.inputNumber.decrease')"
      :class="[
        nsInputNumber.e('decrease'),
        nsInputNumber.is('disabled', minDisabled)
      ]"
      v-repeat-click="handleDecrease"
      @keydown.enter="handleDecrease"
      @click="focus"
      @mousedown.prevent
    >
      <tu-icon>
        <arrow-down v-if="controlsAtRight" />
        <Remove v-else />
      </tu-icon>
    </span>
    <span
      v-if="controls"
      role="button"
      :aria-label="t('tu.inputNumber.increase')"
      :class="[
        nsInputNumber.e('increase'),
        nsInputNumber.is('disabled', maxDisabled)
      ]"
      v-repeat-click="handleIncrease"
      @keydown.enter="handleIncrease"
      @click="focus"
      @mousedown.prevent
    >
      <tu-icon>
        <arrow-up v-if="controlsAtRight" />
        <CirclePlus v-else />
      </tu-icon>
    </span>
    <tu-input
      ref="input"
      type="number"
      :id="id"
      :name="name"
      :label="label"
      :placeholder="placeholder"
      :step="step"
      :model-value="displayValue"
      :readonly="readonly"
      :disabled="inputNumberDisabled"
      :size="inputNumberSize"
      :min="min"
      :max="max"
      :validate-event="false"
      @wheel.prevent
      @keydown.up.prevent="handleIncrease"
      @keydown.down.prevent="handleDecrease"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
      @change="handleChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { inputNumberProps, inputNumberEmits } from './input-number';
import { useNamespace, useLocale } from '@tu-view-plus/hooks';
import useInputNumber from './use-input-number';
import TuInput from '../../input';
import TuIcon from '../../icon';
import { vRepeatClick } from '@tu-view-plus/directives';
import {
  ArrowDown,
  ArrowUp,
  Remove,
  CirclePlus
} from '@tu-view-plus/icons-vue';
import '../style/input-number.scss';

import type { InputInstance } from '../../input';

defineOptions({
  name: 'TuInputNumber'
});

const input = ref<InputInstance>();

const props = defineProps(inputNumberProps);
const emit = defineEmits(inputNumberEmits);

const nsInputNumber = useNamespace('input-number');

const { t } = useLocale();

const controlsAtRight = computed(
  () => props.controls && props.controlsPosition === 'right'
);

const {
  inputNumberSize,
  inputNumberDisabled,
  minDisabled,
  maxDisabled,
  displayValue,
  handleIncrease,
  handleDecrease,
  handleFocus,
  handleBlur,
  handleInput,
  handleChange,
  focus,
  blur
} = useInputNumber(props, emit, input);

const classes = computed(() => ({
  [nsInputNumber.b()]: true,
  [nsInputNumber.m(inputNumberSize.value)]: inputNumberSize.value,
  [nsInputNumber.is('disabled')]: inputNumberDisabled.value,
  [nsInputNumber.is('without-controls')]: !props.controls,
  [nsInputNumber.is('controls-at-right')]: controlsAtRight.value
}));

defineExpose({
  focus,
  blur
});
</script>
