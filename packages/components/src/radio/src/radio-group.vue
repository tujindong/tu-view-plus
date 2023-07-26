<template>
  <div
    ref="radioGroupRef"
    role="radiogroup"
    :id="groupId"
    :class="classes"
    :aria-label="!isLabeledByFormItem ? label || 'radio-group' : undefined"
    :aria-labelledby="isLabeledByFormItem ? formItem!.labelId : undefined"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import {
  watch,
  ref,
  provide,
  reactive,
  toRefs,
  computed,
  nextTick,
  onMounted
} from 'vue';
import { radioGroupProps, radioGroupEmits } from './radio-group';
import { UPDATE_MODEL_EVENT } from '@tu-view-plus/constants';
import { useNamespace, useId } from '@tu-view-plus/hooks';
import { debugWarn } from '@tu-view-plus/utils';
import { radioGroupKey } from './constants';
import { useFormItem, useFormItemInputId } from '../../form';
import '../style/radio-group.scss';

import type { RadioGroupProps } from './radio-group';

defineOptions({
  name: 'TuRadioGroup'
});

const props = defineProps(radioGroupProps);
const emit = defineEmits(radioGroupEmits);

const nsRadioGroup = useNamespace('radio-group');

const classes = computed(() => ({
  [nsRadioGroup.b()]: true,
  [nsRadioGroup.m(props.type)]: true,
  [nsRadioGroup.m(props.size)]: true
}));

const radioId = useId();
const radioGroupRef = ref<HTMLDivElement>();
const { formItem } = useFormItem();
const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
  formItemContext: formItem
});

const changeEvent = (value: RadioGroupProps['modelValue']) => {
  emit(UPDATE_MODEL_EVENT, value);
  nextTick(() => emit('change', value));
};

const name = computed(() => {
  return props.name || radioId.value;
});

provide(
  radioGroupKey,
  reactive({
    ...toRefs(props),
    changeEvent,
    name
  })
);

watch(
  () => props.modelValue,
  () => {
    formItem?.validate('change').catch((err) => debugWarn(err));
  }
);

onMounted(() => {
  const radios =
    radioGroupRef.value!.querySelectorAll<HTMLInputElement>('[type=radio]');
  const firstLabel = radios[0];
  if (!Array.from(radios).some((radio) => radio.checked) && firstLabel) {
    firstLabel.tabIndex = 0;
  }
});
</script>

<style>
</style>