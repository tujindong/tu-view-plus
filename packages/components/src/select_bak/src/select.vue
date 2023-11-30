<template>
  ~~{{ selectedLabel }}
  <div
    ref="selectWrapper"
    :class="wrapperClasses"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click.stop="toggleMenu"
  >
    <tu-trigger
      ref="tooltipRef"
      trigger="click"
      position="bl"
      hide-empty
      auto-fit-popup-width
      auto-fit-transform-origin
      animation-name="slide-dynamic-origin"
      :disabled="selectDisabled"
      :popup-offset="4"
      :popup-visible="computedPopupVisible"
      :unmount-on-close="unmountOnClose"
      :click-to-close="!allowCreate"
      :popup-container="popupContainer"
      @popup-visible-change="handlePopupVisibleChange"
      @show="handleMenuEnter"
    >
      <template #default>
        <div
          :class="nsSelect.e('trigger')"
          @mouseenter="inputHovering = true"
          @mouseleave="inputHovering = false"
        >
          <div
            v-if="multiple"
            ref="tags"
            :class="tagsClasses"
            :style="tagsStyles"
          >
            <transition
              v-if="collapseTags && selected.length"
              @after-leave="resetInputHeight"
            >
            </transition>
            <input ref="input" />
          </div>
          <tu-input
            ref="reference"
            type="text"
            v-model="selectedLabel"
            :id="id"
            :name="name"
            :class="[nsSelect.is('focus', visible)]"
            :placeholder="
              typeof currentPlaceholder === 'function'
                ? currentPlaceholder()
                : currentPlaceholder
            "
            :autocomplete="autocomplete"
            :size="selectSize"
            :disabled="selectDisabled"
            :readonly="readonly"
            :validate-event="false"
            :tabindex="multiple && filterable ? -1 : undefined"
            @focus="handleFocus"
            @blur="handleBlur"
            @input="debouncedOnInputChange"
            @paste="debouncedOnInputChange"
            @compositionstart="handleComposition"
            @compositionupdate="handleComposition"
            @compositionend="handleComposition"
            @keydown.down.stop.prevent="navigateOptions('next')"
            @keydown.up.stop.prevent="navigateOptions('prev')"
            @keydown.enter.stop.prevent="selectOption"
            @keydown.esc="handleKeydownEscape"
            @keydown.tab="visible = false"
          >
            <template v-if="$slots.prefix" #prefix>
              <div :class="nsSelect.e('prefix')"><slot name="prefix" /></div>
            </template>
            <template #suffix>
              <tu-icon
                v-if="iconComponent && !showClose"
                :class="suffixClasses"
              >
                <component :is="iconComponent" />
              </tu-icon>
              <tu-icon
                v-if="showClose && clearIcon"
                :class="[nsSelect.e('caret'), nsSelect.e('icon')]"
                @click="handleClearClick"
              >
                <component :is="clearIcon" />
              </tu-icon>
            </template>
          </tu-input>
        </div>
      </template>
      <template #content>
        <tu-select-dropdown ref="dropdownRef">
          <tu-scrollbar
            v-show="options.size > 0 && !loading"
            ref="scrollbarRef"
            tag="ul"
            :wrap-class="nsSelect.e('dropdown-wrap')"
            :view-class="nsSelect.e('dropdowm-list')"
            :class="scrollbarClasses"
          >
            <tu-select-option
              v-if="showNewOption"
              :value="query"
              :created="true"
            />
            <tu-select-options @update-options="onOptionsRendered">
              <slot />
            </tu-select-options>
          </tu-scrollbar>
        </tu-select-dropdown>
      </template>
    </tu-trigger>
  </div>
</template>

<script lang="ts" setup>
import {
  toRefs,
  ref,
  computed,
  reactive,
  provide,
  shallowRef,
  nextTick,
  toRaw,
  triggerRef
} from 'vue';
import { get, isEqual, debounce as lodashDebounce } from 'lodash-unified';
import { selectProps, selectEmits, SelectProps } from './select';
import { useTrigger, useNamespace, useLocale } from '@tu-view-plus/hooks';
import { isObject, isFunction } from '@tu-view-plus/utils';
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@tu-view-plus/constants';
import { TuTrigger } from '../../trigger';
import TuSelectDropdown from './select-dropdown.vue';
import TuSelectOption from './select-option.vue';
import TuSelectOptions from './select-options.vue';
import TuScrollbar from '../../scrollbar';
import TuIcon from '../../icon';
import { selectKey } from './constants';
import {
  useFormDisabled,
  useFormItem,
  useFormItemInputId,
  useFormSize
} from '../../form';
import '../style/select.scss';

import type { ComponentPublicInstance } from 'vue';
import type { QueryChangeCtx, SelectOptionProxy } from './constants';

defineOptions({
  name: 'TuSelect',
  inheritAttrs: false
});

let originClientHeight = 0;

const props = defineProps(selectProps);
const emit = defineEmits(selectEmits);

const nsSelect = useNamespace('select');

const { t } = useLocale();

const states = reactive({
  options: new Map(),
  cachedOptions: new Map(),
  createdLabel: null,
  createdSelected: false,
  selected: props.multiple ? [] : ({} as any),
  inputLength: 20,
  inputWidth: 0,
  optionsCount: 0,
  filteredOptionsCount: 0,
  visible: false,
  selectedLabel: '',
  hoverIndex: -1,
  query: '',
  previousQuery: null,
  inputHovering: false,
  cachedPlaceHolder: '',
  currentPlaceholder: t('tu.select.placeholder') as string | (() => string),
  menuVisibleOnFocus: false,
  isOnComposition: false,
  prefixWidth: 11,
  mouseEnter: false
});
const { popupVisible } = toRefs(props);
const {
  inputWidth,
  selected,
  inputLength,
  filteredOptionsCount,
  visible,
  selectedLabel,
  hoverIndex,
  query,
  inputHovering,
  currentPlaceholder,
  menuVisibleOnFocus,
  isOnComposition,
  options,
  cachedOptions,
  optionsCount,
  prefixWidth
} = toRefs(states);

const selectWrapper = ref<HTMLElement | null>(null);
const dropdownRef = ref<ComponentPublicInstance>();
const tooltipRef = ref<HTMLElement>();
const reference = ref<HTMLElement>();
const input = ref<HTMLInputElement | null>(null);

const optionList = ref<string[]>([]);
const queryChange = shallowRef<QueryChangeCtx>({ query: '' });
const groupQueryChange = shallowRef('');

const selectDisabled = useFormDisabled();
const selectSize = useFormSize();

const { form, formItem } = useFormItem();

const { inputId } = useFormItemInputId(props, {
  formItemContext: formItem
});

const { computedPopupVisible, handlePopupVisibleChange } = useTrigger({
  popupVisible,
  emit
});

const readonly = computed(
  () => !props.filterable || props.multiple || !states.visible
);

const iconComponent = computed(() =>
  props.remote && props.filterable && !props.remoteShowSuffix
    ? ''
    : props.suffixIcon
);

const showClose = computed(() => {
  const hasValue = props.multiple
    ? Array.isArray(props.modelValue) && props.modelValue.length > 0
    : props.modelValue !== undefined &&
      props.modelValue !== null &&
      props.modelValue !== '';

  const criteria =
    props.clearable &&
    !selectDisabled.value &&
    states.inputHovering &&
    hasValue;
  return criteria;
});

const optionsArray = computed(() => {
  const list = Array.from(states.options.values());
  const newList: Array<string[]> = [];
  optionList.value.forEach((item) => {
    const index = list.findIndex((i) => i.currentLabel === item);
    if (index > -1) {
      newList.push(list[index]);
    }
  });
  return newList.length ? newList : list;
});

const showNewOption = computed(() => {
  const hasExistingOption = optionsArray.value
    .filter((option) => {
      return !option.created;
    })
    .some((option) => {
      return option.currentLabel === states.query;
    });
  return (
    props.filterable &&
    props.allowCreate &&
    states.query !== '' &&
    !hasExistingOption
  );
});

const suffixClasses = computed(() => ({
  [nsSelect.e('caret')]: true,
  [nsSelect.e('icon')]: true,
  [nsSelect.is('reverse')]:
    iconComponent.value && states.visible && props.suffixTransition
}));
const wrapperClasses = computed(() => ({}));
const tagsClasses = computed(() => ({}));
const tagsStyles = computed(() => ({}));
const scrollbarClasses = computed(() => ({}));

const handleMouseEnter = () => {
  states.mouseEnter = true;
};

const handleMouseLeave = () => {
  states.mouseEnter = false;
};

const handleMenuEnter = () => {
  nextTick(() => scrollToOption(states.selected));
};

const toggleMenu = () => {
  if (!states.mouseEnter) return;
  if (!selectDisabled.value) {
    if (states.menuVisibleOnFocus) {
      states.menuVisibleOnFocus = false;
    }
  }
};

const scrollToOption = (option: any) => {
  const targetOption = Array.isArray(option) ? option[0] : option;
  let target = null;

  if (targetOption?.value) {
    const options = optionsArray.value.filter(
      (item) => item.value === targetOption.value
    );
    if (options.length > 0) {
      target = options[0].$el;
    }
  }

  // if (tooltipRef.value && target) {
  //   const menu = tooltipRef.value?.popperRef?.contentRef?.querySelector?.(
  //     `.${ns.be('dropdown', 'wrap')}`
  //   );
  //   if (menu) {
  //     scrollIntoView(menu as HTMLElement, target);
  //   }
  // }
  // scrollbar.value?.handleScroll();
};

const debouncedOnInputChange = () => {};

const handleFocus = () => {};

const handleBlur = () => {};

const handleComposition = () => {};

const navigateOptions = (direction) => {};

const selectOption = () => {};

const handleKeydownEscape = () => {};

const handleClearClick = (event: Event) => {
  deleteSelected(event);
};

const deleteSelected = (event) => {};

const resetInputHeight = () => {};

const getValueIndex = (arr: any[] = [], value) => {
  if (!isObject(value)) return arr.indexOf(value);

  const valueKey = props.valueKey;
  let index = -1;
  arr.some((item, i) => {
    if (toRaw(get(item, valueKey)) === get(value, valueKey)) {
      index = i;
      return true;
    }
    return false;
  });
  return index;
};

const emitChange = (val) => {
  if (!isEqual(props.modelValue, val)) {
    emit(CHANGE_EVENT, val);
  }
};

const setSoftFocus = () => {
  const _input = input.value || reference.value;
  if (_input) {
    _input?.focus();
  }
};

const handleOptionSelect = (option) => {
  console.log('handleOptionSelect~~', option);
  if (props.multiple) {
    const value = (props.modelValue || []).slice();
    const optionIndex = getValueIndex(value, option.value);
    if (optionIndex > -1) {
      value.splice(optionIndex, 1);
    } else if (props.multipleLimit <= 0 || value.length < props.multipleLimit) {
      value.push(option.value);
    }
    emit(UPDATE_MODEL_EVENT, value);
    emitChange(value);
    if (option.created) {
      states.query = '';
      handleQueryChange('');
      states.inputLength = 20;
    }
    if (props.filterable) input.value?.focus();
  } else {
    emit(UPDATE_MODEL_EVENT, option.value);
    emitChange(option.value);
    states.visible = false;
  }
  setSoftFocus();
  if (states.visible) return;
  nextTick(() => {
    scrollToOption(option);
  });
};

const handleQueryChange = async (val) => {
  if (states.previousQuery === val || states.isOnComposition) return;
  if (
    states.previousQuery === null &&
    (isFunction(props.filterMethod) || isFunction(props.remoteMethod))
  ) {
    states.previousQuery = val;
    return;
  }
  states.previousQuery = val;
  states.hoverIndex = -1;
  if (props.multiple && props.filterable) {
    nextTick(() => {
      const length = input.value!.value.length * 15 + 20;
      states.inputLength = props.collapseTags ? Math.min(50, length) : length;
      managePlaceholder();
      resetInputHeight();
    });
  }
  if (props.remote && isFunction(props.remoteMethod)) {
    states.hoverIndex = -1;
    props.remoteMethod(val);
  } else if (isFunction(props.filterMethod)) {
    props.filterMethod(val);
    triggerRef(groupQueryChange);
  } else {
    states.filteredOptionsCount = states.optionsCount;
    queryChange.value.query = val;

    triggerRef(queryChange);
    triggerRef(groupQueryChange);
  }
  if (
    props.defaultFirstOption &&
    (props.filterable || props.remote) &&
    states.filteredOptionsCount
  ) {
    await nextTick();
    checkDefaultFirstOption();
  }
};

const managePlaceholder = () => {
  if (states.currentPlaceholder !== '') {
    states.currentPlaceholder = input.value!.value
      ? ''
      : states.cachedPlaceHolder;
  }
};

const checkDefaultFirstOption = () => {
  const optionsInDropdown = optionsArray.value.filter(
    (n) => n.visible && !n.disabled && !n.states.groupDisabled
  );
  const userCreatedOption = optionsInDropdown.find((n) => n.created);
  const firstOriginOption = optionsInDropdown[0];
  states.hoverIndex = getValueIndex(
    optionsArray.value,
    userCreatedOption || firstOriginOption
  );
};

const onOptionCreate = (vm: SelectOptionProxy) => {
  states.optionsCount++;
  states.filteredOptionsCount++;
  states.options.set(vm.value, vm);
  states.cachedOptions.set(vm.value, vm);
};

const onOptionDestroy = () => {};

const setSelected = () => {};

const onOptionsRendered = (value: Array<string>) => {
  optionList.value = value;
};

provide(
  selectKey,
  reactive({
    props,
    options,
    optionsArray,
    cachedOptions,
    optionsCount,
    filteredOptionsCount,
    hoverIndex,
    handleOptionSelect,
    onOptionCreate,
    onOptionDestroy,
    selectWrapper,
    selected,
    setSelected,
    queryChange,
    groupQueryChange
  }) as unknown as SelectContext
);
</script>
