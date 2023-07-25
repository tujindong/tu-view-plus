<template>
  <component
    role="group"
    :is="tag"
    :id="groupId"
    :class="nsCheckboxGroup.b()"
    :aria-label="!isLabeledByFormItem ? label || 'checkbox-group' : undefined"
    :aria-labelledby="isLabeledByFormItem ? formItem?.labelId : undefined"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed, nextTick, watch, provide, toRefs, reactive } from 'vue';
import { checkboxGroupEmits, checkboxGroupProps } from './checkbox-group';
import { useFormItem, useFormItemInputId } from '../../form';
import { useNamespace } from '@tu-view-plus/hooks';
import { UPDATE_MODEL_EVENT } from '@tu-view-plus/constants';
import { debugWarn } from '@tu-view-plus/utils';
import { checkboxGroupKey } from './constants';
// @ts-ignore
import { pick } from 'lodash-unified';
import { CheckboxGroupValueType } from './constants';

defineOptions({
  name: 'TuCheckboxGroup'
});

const props = defineProps(checkboxGroupProps);
const emit = defineEmits(checkboxGroupEmits);

const nsCheckboxGroup = useNamespace('checkbox-group');

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

provide(
  checkboxGroupKey,
  reactive({
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
  })
);

const { formItem } = useFormItem();
const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
  formItemContext: formItem
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