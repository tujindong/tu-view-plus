<template>
  <div :class="wrapClasses" @mousedown="handleMouseDown" v-bind="wrapAttrs">
    3321
    <tu-resize-observer @resize="handleResize">
      <span ref="mirrorRef" :class="nsInputTag.e('mirror')">
        {{ mirrorValue }}
      </span>
    </tu-resize-observer>
    <span v-if="slots.prefix" :class="nsInputTag.e('prefix')">
      <slot name="prefix" />
    </span>
    <transition-group
      tag="span"
      name="input-tag-zoom"
      :class="nsInputTag.e('inner')"
    >
      <Tag>Tag</Tag>
      <input
        ref="inputRef"
        key="input-tag-input"
        :class="nsInputTag.e('input')"
        :style="inputStyles"
        :placeholder="tags.length === 0 ? props.placeholder : undefined"
        :disabled="inputTagDisabled"
        :readonly="props.readonly || props.disabledInput"
        @input="handleInput"
        @keydown="handleKeydown"
        @focus="handleFocus"
        @blur="handleBlur"
        @compositionstart="handleComposition"
        @compositionupdate="handleComposition"
        @compositionend="handleComposition"
      />
    </transition-group>
  </div>
</template>

<script lang="ts" setup>
import { computed, useAttrs, ref, useSlots, reactive } from 'vue';
import { inputTagProps } from './input-tag';
import { useNamespace } from '@tu-view-plus/hooks';
import { INPUT_EVENTS } from '@tu-view-plus/constants';
import { omit } from '@tu-view-plus/utils';
import TuResizeObserver from '../../resize-observer';
import Tag from '../../tag';
import { getValueData } from './utils';
import {
  useFormDisabled,
  useFormSize,
  useFormItemInputId,
  useFormItem
} from '../../form';
import '../style/input-tag.scss';

const DEFAULT_FIELD_NAMES = {
  value: 'value',
  label: 'label',
  closable: 'closable',
  tagProps: 'tagProps'
};

defineOptions({
  name: 'TuInputTag'
});

const props = defineProps(inputTagProps);
const attrs = useAttrs();
const slots = useSlots();

const nsInputTag = useNamespace('input-tag');

const inputTagSize = useFormSize();
const inputTagDisabled = useFormDisabled();

const mirrorRef = ref<HTMLElement>();
const inputRef = ref<HTMLInputElement>();

const mergedFieldNames = computed(() => ({
  ...DEFAULT_FIELD_NAMES,
  ...props.fieldNames
}));

const inputTagValue = ref(props.defaultValue);

const wrapAttrs = computed(() => omit(attrs, INPUT_EVENTS));

const mirrorValue = computed(() => {});
const computedValue = computed(() => props.modelValue ?? inputTagValue.value);

const valueData = computed(() =>
  getValueData(computedValue.value, mergedFieldNames.value)
);

const tags = computed(() => {
  console.log('tags', valueData.value);
  return valueData.value;
});

const inputStyles = reactive({ width: '12px' });

const wrapClasses = computed(() => ({}));

const handleMouseDown = () => {
  console.log('mousedown');
};

const handleResize = () => {
  console.log('resize');
};

const handleInput = (evt: Event) => {
  const { value } = evt.target as HTMLInputElement;
  console.log('handleInput', value);
};

const handleKeydown = () => {
  console.log('handleKeydown');
};

const handleFocus = () => {
  console.log('handleFocus');
};

const handleBlur = () => {
  console.log('handleBlur');
};

const handleComposition = (evt: CompositionEvent) => {
  const { value } = evt.target as HTMLInputElement;
  console.log('handleComposition', evt);
};
</script>
