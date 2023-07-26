<template>
  <component
    role="group"
    :is="tag"
    :id="groupId"
    :class="classes"
    :aria-label="!isLabeledByFormItem ? label || 'checkbox-group' : undefined"
    :aria-labelledby="isLabeledByFormItem ? formItem?.labelId : undefined"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed, nextTick, watch, provide, toRefs } from 'vue';
import { checkboxGroupEmits, checkboxGroupProps } from './checkbox-group';
import { useFormItem, useFormItemInputId } from '../../form';
import { useNamespace } from '@tu-view-plus/hooks';
import { UPDATE_MODEL_EVENT } from '@tu-view-plus/constants';
import { debugWarn } from '@tu-view-plus/utils';
import { checkboxGroupContextKey, CheckboxGroupValueType } from './constants';
// @ts-ignore
import { pick } from 'lodash-unified';
import '../style/checkbox-group.scss';

defineOptions({
  name: 'TuCheckboxGroup'
});

const props = defineProps(checkboxGroupProps);
const emit = defineEmits(checkboxGroupEmits);

const nsCheckboxGroup = useNamespace('checkbox-group');

const classes = computed(() => ({
  [nsCheckboxGroup.b()]: true,
  [nsCheckboxGroup.m(props.type)]: true,
  [nsCheckboxGroup.m(props.size)]: true
}));

const { formItem } = useFormItem();
const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
  formItemContext: formItem
});

const modelValue = computed({
  get() {
    return props.modelValue;
  },
  set(val: CheckboxGroupValueType) {
    changeEvent(val);
  }
});

const changeEvent = async (value: CheckboxGroupValueType) => {
  emit(UPDATE_MODEL_EVENT, value);
  await nextTick();
  emit('change', value);
};

provide(checkboxGroupContextKey, {
  ...pick(toRefs(props), [
    'size',
    'type',
    'min',
    'max',
    'disabled',
    'validateEvent',
    'textColor'
  ]),
  changeEvent,
  modelValue
});

watch(
  () => props.modelValue,
  () => {
    if (props.validateEvent) {
      formItem?.validate('change').catch((err) => debugWarn(err));
    }
  }
);
</script>