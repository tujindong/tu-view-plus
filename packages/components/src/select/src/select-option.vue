<template>
  <component
    ref="itemRef"
    v-show="isValid"
    :is="component"
    :class="optionClasses"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <span v-if="$slots.icon" :class="nsSelectOption.e('icon')">
      <slot name="icon" />
    </span>
    <tu-checkbox
      v-if="selectContext && selectContext.multiple"
      :class="nsSelectOption.e('checkbox')"
      :model-value="isSelected"
      :disabled="disabled"
    >
      <slot>{{ label }}</slot>
    </tu-checkbox>
    <template v-else>
      <span :class="nsSelectOption.e('content')">
        <slot>{{ label }}</slot>
      </span>
    </template>
    <span v-if="$slots.suffix" :class="nsSelectOption.e('suffix')">
      <slot name="suffix" />
    </span>
  </component>
</template>

<script lang="ts" setup>
import {
  ref,
  computed,
  inject,
  useSlots,
  reactive,
  onMounted,
  onUpdated,
  getCurrentInstance,
  onBeforeUnmount,
  toRefs,
  watch
} from 'vue';
import { selectOptionProps } from './select-option';
import { useNamespace } from '@tu-view-plus/hooks';
import { getKeyFromValue, isValidOption } from './utils';
import { selectInjectionKey } from './context';
import { TuCheckbox } from '../../checkbox';

defineOptions({
  name: 'TuSelectOption'
});

const props = defineProps(selectOptionProps);
const slots = useSlots();

const nsSelectOption = useNamespace('select-option');

const { disabled, index } = toRefs(props);

const instance = getCurrentInstance();
const selectContext = inject(selectInjectionKey, undefined);

const itemRef = ref<HTMLElement>();
const textContent = ref('');
let isValid = ref(true);

const value = computed(() => props.value ?? props.label ?? textContent.value);
const label = computed(() => props.label ?? textContent.value);
const key = computed(() =>
  getKeyFromValue(value.value, selectContext?.valueKey)
);
const component = computed(() => selectContext?.component ?? 'li');

const isSelected = computed(
  () => selectContext?.valueKeys.includes(key.value) ?? false
);

const isActive = computed(
  () => selectContext?.activeKey === key.value ?? false
);

const optionClasses = computed(() => ({
  [nsSelectOption.b()]: true,
  [nsSelectOption.is('active')]: isActive.value,
  [nsSelectOption.is('disabled')]: props.disabled,
  [nsSelectOption.is('has-suffix')]: slots.suffix
}));

const handleClick = (evt: MouseEvent) => {
  if (!props.disabled) {
    selectContext?.onSelect(key.value, evt);
  }
};

const handleMouseEnter = () => {
  if (!props.disabled) {
    selectContext?.setActiveKey(key.value);
  }
};

const handleMouseLeave = () => {
  if (!props.disabled) {
    selectContext?.setActiveKey();
  }
};

const setTextContent = () => {
  if (!props.label && itemRef.value) {
    const text = itemRef.value.textContent ?? '';
    if (textContent.value !== text) {
      textContent.value = text;
    }
  }
};

if (!props.internal) {
  const optionInfo = reactive({
    raw: {
      value,
      label,
      disabled
    },
    ref: itemRef,
    index,
    key,
    origin: 'slot' as const,
    value,
    label,
    disabled
  });

  isValid = computed(() =>
    isValidOption(optionInfo, {
      inputValue: selectContext?.inputValue,
      filterOption: selectContext?.filterOption
    })
  );

  if (instance) {
    selectContext?.addSlotOptionInfo(instance.uid, optionInfo);
  }

  onBeforeUnmount(() => {
    if (instance) {
      selectContext?.removeSlotOptionInfo(instance.uid);
    }
  });
}

onMounted(() => setTextContent());

onUpdated(() => setTextContent());
</script>
