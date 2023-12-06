<template>
  <div
    v-bind="wrapAttrs"
    :class="wrapClasses"
    @mousedown="handleMouseDown"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
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
      :name="`${defaultNamespace}-input-tag-zoom`"
      :class="nsInputTag.e('inner')"
    >
      <tu-tag
        v-for="(item, index) in tags"
        v-bind="item.tagProps"
        disableTransitions
        :size="tagSize"
        :key="`tag-${item.value}`"
        :class="nsInputTag.e('tag')"
        :closable="!inputTagDisabled && !readonly && item.closable"
        :disabled="inputTagDisabled"
        @close="(evt: MouseEvent) => handleRemove(item.value, index, evt)"
      >
        {{ formatTag?.(item.raw) ?? item.label }}
      </tu-tag>
      <input
        ref="inputRef"
        key="input-tag-input"
        v-bind="inputAttrs"
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
    <span :class="nsInputTag.e('suffix')">
      <tu-icon
        v-if="showClearVisible"
        :class="[nsInputTag.e('icon'), nsInputTag.em('icon', 'clear')]"
        @click="handleClear"
        @mousedown="(evt: MouseEvent) => evt.stopPropagation()"
      >
        <Close />
      </tu-icon>
      <slot name="suffix" />
    </span>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  useAttrs,
  ref,
  useSlots,
  reactive,
  nextTick,
  watch,
  onMounted
} from 'vue';
import { inputTagProps, inputTagEmits } from './input-tag';
import { useNamespace, defaultNamespace } from '@tu-view-plus/hooks';
import { INPUT_EVENTS } from '@tu-view-plus/constants';
import {
  omit,
  ValidateComponentsMap,
  isObject,
  pick
} from '@tu-view-plus/utils';
import { Close } from '@tu-view-plus/icons-vue';
import TuResizeObserver from '../../resize-observer';
import { getValueData } from './utils';
import { useFormDisabled, useFormSize, useFormItem } from '../../form';
import { TagData } from './interface';
import TuTag from '../../tag';
import TuIcon from '../../icon';
import '../style/input-tag.scss';

const DEFAULT_FIELD_NAMES = {
  value: 'value',
  label: 'label',
  closable: 'closable',
  tagProps: 'tagProps'
};

defineOptions({
  name: 'TuInputTag',
  inheritAttrs: false
});

const props = defineProps(inputTagProps);
const emit = defineEmits(inputTagEmits);
const attrs = useAttrs();
const slots = useSlots();

const nsInputTag = useNamespace('input-tag');

const inputTagSize = useFormSize();
const inputTagDisabled = useFormDisabled();
const { form, formItem } = useFormItem();

const inputStyles = reactive({ width: '12px' });

const mirrorRef = ref<HTMLElement>();
const inputRef = ref<HTMLInputElement>();

const isComposition = ref(false);
const isHovering = ref(false);
const compositionValue = ref('');

const mergedFieldNames = computed(() => ({
  ...DEFAULT_FIELD_NAMES,
  ...props.fieldNames
}));

const focusValue = ref(false);
const inputTagValue = ref(props.defaultValue);
const inputValueData = ref(props.defaultInputValue);

const wrapAttrs = computed(() => omit(attrs, INPUT_EVENTS));
const inputAttrs = computed(() => pick(attrs, INPUT_EVENTS));

const mirrorValue = computed(() => {
  if (tags.value.length > 0) {
    return compositionValue.value || computedInputValue.value;
  } else {
    return (
      compositionValue.value || computedInputValue.value || props.placeholder
    );
  }
});
const computedValue = computed(() => props.modelValue ?? inputTagValue.value);
const computedInputValue = computed(
  () => props.inputValue ?? inputValueData.value
);
const valueData = computed(() =>
  getValueData(computedValue.value, mergedFieldNames.value)
);

const tagSize = computed(() => {
  if (['small', 'mini'].indexOf(props.size) > -1) return 'mini';
  if (props.size === 'large') return 'medium';
  return 'small';
});

const tags = computed(() => {
  if (props.maxTagCount > 0) {
    const invisibleTags = valueData.value.length - props.maxTagCount;
    if (invisibleTags > 0) {
      const result = valueData.value.slice(0, props.maxTagCount);
      const raw = {
        value: '__tu__tag__more',
        label: `${invisibleTags}..`,
        closable: false
      };
      result.push({ raw, ...raw });
      return result;
    }
  }
  return valueData.value;
});

const showClearVisible = computed(
  () =>
    !inputTagDisabled.value &&
    !props.readonly &&
    props.allowClear &&
    Boolean(computedValue.value.length) &&
    isHovering.value
);

const validateState = computed(() => formItem?.validateState || '');

const retainInputValue = computed(() => {
  if (isObject(props.retainInputValue)) {
    return {
      create: false,
      blur: false,
      ...props.retainInputValue
    };
  }
  return {
    create: props.retainInputValue,
    blur: props.retainInputValue
  };
});

const validateIcon = computed(
  () => validateState.value && ValidateComponentsMap[validateState.value]
);

const wrapClasses = computed(() => ({
  [nsInputTag.b()]: true,
  [nsInputTag.m(inputTagSize.value)]: inputTagSize.value,
  [nsInputTag.m('has-tag')]: tags.value.length > 0,
  [nsInputTag.is('disabled')]: inputTagDisabled.value
}));

const handleMouseEnter = (evt: MouseEvent) => {
  isHovering.value = true;
  emit('mouseenter', evt);
};

const handleMouseLeave = (evt: MouseEvent) => {
  isHovering.value = false;
  emit('mouseleave', evt);
};

const handleMouseDown = (e: MouseEvent) => {
  if (inputRef.value && e.target !== inputRef.value) {
    e.preventDefault();
    inputRef.value.focus();
  }
};

const handleResize = () => {
  if (mirrorRef.value) {
    setInputWidth(mirrorRef.value.offsetWidth);
  }
};

const handleInput = (evt: Event) => {
  const { value } = evt.target as HTMLInputElement;

  if (!isComposition.value) {
    updateInputValue(value, evt);

    nextTick(() => {
      if (inputRef.value && computedInputValue.value !== inputRef.value.value) {
        inputRef.value.value = computedInputValue.value;
      }
    });
  }
};

const handleKeydown = (evt: KeyboardEvent) => {
  const keyCode = evt.key || evt.code;
  if (!isComposition.value && computedInputValue.value && keyCode === 'Enter') {
    handlePressEnter(evt);
  }
  if (
    !isComposition.value &&
    tags.value.length > 0 &&
    !computedInputValue.value &&
    keyCode === 'Backspace'
  ) {
    const lastIndex = getLastClosableIndex();
    if (lastIndex >= 0) {
      handleRemove(valueData.value[lastIndex].value, lastIndex, evt);
    }
  }
};

const handleFocus = (evt: FocusEvent) => {
  focusValue.value = true;
  emit('focus', evt);
};

const handleBlur = (evt: FocusEvent) => {
  focusValue.value = false;
  if (!retainInputValue.value.blur && computedInputValue.value) {
    updateInputValue('', evt);
  }
  emit('blur', evt);
};

const handleComposition = (evt: CompositionEvent) => {
  const { value } = evt.target as HTMLInputElement;
  if (evt.type === 'compositionend') {
    isComposition.value = false;
    compositionValue.value = '';
    updateInputValue(value, evt);

    nextTick(() => {
      if (inputRef.value && computedInputValue.value !== inputRef.value.value) {
        inputRef.value.value = computedInputValue.value;
      }
    });
  } else {
    isComposition.value = true;
    compositionValue.value = computedInputValue.value + (evt.data ?? '');
  }
};

const handleClear = (evt: MouseEvent) => {
  const newValue: any[] = [];
  updateValue(newValue, evt);
  emit('clear', evt);
};

const handleRemove = (value: string | number, index: number, evt: Event) => {
  const newValue = computedValue.value?.filter((_, i) => i !== index);
  updateValue(newValue, evt);
  emit('remove', value, evt);
};

const handlePressEnter = (evt: KeyboardEvent) => {
  if (computedInputValue.value) {
    evt.preventDefault();
    if (
      props.uniqueValue &&
      computedValue.value?.includes(computedInputValue.value)
    ) {
      emit('pressEnter', computedInputValue.value, evt);
      return;
    }
    const newValue = computedValue.value.concat(computedInputValue.value);
    updateValue(newValue, evt);
    emit('pressEnter', computedInputValue.value, evt);
    if (!retainInputValue.value.create) {
      updateInputValue('', evt);
    }
  }
};

const updateInputValue = (value: string, evt: Event) => {
  inputValueData.value = value;
  emit('update:inputValue', value);
  emit('inputValueChange', value, evt);
};

const getLastClosableIndex = () => {
  for (let i = valueData.value.length - 1; i >= 0; i--) {
    if (valueData.value[i].closable) {
      return i;
    }
  }
  return -1;
};

const updateValue = (value: (string | number | TagData)[], evt: Event) => {
  inputTagValue.value = value;
  emit('update:modelValue', value);
  emit('change', value, evt);
};

const setInputWidth = (width: number) => {
  if (width > 12) {
    inputStyles.width = `${width}px`;
  } else {
    inputStyles.width = '12px';
  }
};

watch(computedInputValue, (value) => {
  if (
    inputRef.value &&
    !isComposition.value &&
    value !== inputRef.value.value
  ) {
    inputRef.value.value = value;
  }
});

onMounted(() => {
  if (mirrorRef.value) {
    setInputWidth(mirrorRef.value.offsetWidth);
  }
});
</script>
