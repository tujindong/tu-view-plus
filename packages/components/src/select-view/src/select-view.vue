<template>
  <tu-input-tag
    v-if="multiple"
    ref="componentRef"
    retain-input-value
    uninject-form-item-context
    :class="classes"
    :model-value="modelValue"
    :input-value="inputValue"
    :focused="opened"
    :placeholder="placeholder"
    :disabled="selectViewDisabled"
    :size="selectViewSize"
    :max-tag-count="maxTagCount"
    @remove="handleRemove"
    @focus="handleFocus"
    @blur="handleBlur"
  />
  <tu-input-label
    ref="componentRef"
    retain-input-value
    uninject-form-item-context
    :class="classes"
    :model-value="modelValue?.[0]"
    :input-value="inputValue"
    :focused="opened"
    :placeholder="placeholder"
    :disabled="selectViewDisabled"
    :size="selectViewSize"
    :max-tag-count="maxTagCount"
    @remove="handleRemove"
    @focus="handleFocus"
    @blur="handleBlur"
  />
</template>

<script lang="ts" setup>
import { ref, computed, watch, toRefs } from 'vue';
import { selectViewProps, selectViewEmits } from './select-view';
import TuInputLabel from '../../input-label';
import TuInputTag from '../../input-tag';
import { useFormDisabled, useFormSize } from '../../form';
import '../style/select-view.scss';

import type { ComponentPublicInstance } from 'vue';

defineOptions({
  name: 'TuSelectView'
});

const props = defineProps(selectViewProps);
const emit = defineEmits(selectViewEmits);

const { opened } = toRefs(props);

const componentRef = ref<ComponentPublicInstance>();
const inputRef = computed<HTMLInputElement>(
  // @ts-ignore
  () => componentRef.value?.inputRef
);

const isEmptyValue = computed(() => props.modelValue.length === 0);
const enabledInput = computed(() => props.allowSearch || props.clearable);

const selectViewSize = useFormSize();
const selectViewDisabled = useFormDisabled();

const classes = computed(() => ({}));

const handleRemove = (tag: string | number, evt: Event) => {
  emit('remove', tag, evt);
};

const handleFocus = (evt: FocusEvent) => {
  emit('focus', evt);
};

const handleBlur = (evt: FocusEvent) => {
  emit('blur', evt);
};

watch(opened, (opened) => {
  if (
    !opened &&
    inputRef.value &&
    inputRef.value.isSameNode(document.activeElement)
  ) {
    inputRef.value.blur();
  }
});
</script>
