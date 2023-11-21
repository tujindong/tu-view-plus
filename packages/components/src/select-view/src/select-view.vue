<template>
  <tu-input-tag v-if="multiple" ref="componentRef" />
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
import { ref, computed } from 'vue';
import { selectViewProps } from './select-view';
import TuInputLabel from '../../input-label';
import TuInputTag from '../../input-tag';
import { useFormDisabled, useFormSize } from '../../form';
import '../style/select-view.scss';

import type { ComponentPublicInstance } from 'vue';

defineOptions({
  name: 'TuSelectView'
});

const props = defineProps(selectViewProps);

const componentRef = ref<ComponentPublicInstance>();

const selectViewSize = useFormSize();
const selectViewDisabled = useFormDisabled();

const classes = computed(() => ({}));

const handleRemove = () => {};

const handleFocus = () => {};

const handleBlur = () => {};
</script>
