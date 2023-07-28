<template>
  <div :class="classes" @dragstart.prevent>
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
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { inputNumberProps, inputNumberEmits } from './input-number';
import { useNamespace } from '@tu-view-plus/hooks';
import { useFormDisabled, useFormSize } from '../../form';
import useInputNumber from './use-input-number';
import TuInput from '../../input';
import TuIcon from '../../icon';
import '../style/input-number.scss';

defineOptions({
  name: 'TuInputNumber'
});

const props = defineProps(inputNumberProps);
const emit = defineEmits(inputNumberEmits);

const nsInputNumber = useNamespace('input-number');

const inputNumberSize = useFormSize();
const inputNumberDisabled = useFormDisabled();

const { displayValue } = useInputNumber(props, emit);

const controlsAtRight = computed(
  () => props.controls && props.controlsPosition === 'right'
);

const classes = computed(() => ({
  [nsInputNumber.b()]: true,
  [nsInputNumber.m(inputNumberSize.value)]: inputNumberSize.value,
  [nsInputNumber.is('disabled')]: inputNumberDisabled.value,
  [nsInputNumber.is('without-controls')]: !props.controls,
  [nsInputNumber.is('controls-at-right')]: controlsAtRight.value
}));
</script>
