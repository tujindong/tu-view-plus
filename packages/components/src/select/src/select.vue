<template>
  <div
    ref="selectWrapper"
    :class="wrapperClasses"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click.stop="toggleMenu"
  >
    <tu-trigger
      ref="triggerRef"
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
  nextTick
} from 'vue';
import { selectProps, selectEmits, SelectProps } from './select';
import { useTrigger, useNamespace, useLocale } from '@tu-view-plus/hooks';
import {} from '@tu-view-plus/utils';
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
const triggerRef = ref<HTMLElement>();

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
  // console.log('handleMouseEnter');
};

const handleMouseLeave = () => {
  // console.log('handleMouseLeave');
};

const handleMenuEnter = () => {
  nextTick(() => scrollToOption(states.selected));
};

const toggleMenu = (e?: PointerEvent) => {
  if (e && !states.mouseEnter) return;
  if (!selectDisabled.value) {
    if (states.menuVisibleOnFocus) {
      states.menuVisibleOnFocus = false;
    }
    // else {
    //   if (!triggerRef.value || !triggerRef.value.isFocusInsideContent()) {
    //     states.visible = !states.visible;
    //   }
    // }
    // if (states.visible) {
    //   (triggerRef.value || triggerRef.value)?.focus();
    // }
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

const handleOptionSelect = () => {};

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
