<template>
  <slot />
</template>

<script lang="ts" setup>
import { ref, computed, provide } from 'vue';
import { POPPER_INJECTION_KEY } from './constants';
import { popperProps } from './popper';
import '../style/popper.scss';

import type { Instance as PopperInstance } from '@popperjs/core';
import type { TuPopperInjectionContext } from './constants';

defineOptions({
  name: 'TuPopper',
  inheritAttrs: false
});

const props = defineProps(popperProps);

const triggerRef = ref<HTMLElement>();
const popperInstanceRef = ref<PopperInstance>();
const contentRef = ref<HTMLElement>();
const referenceRef = ref<HTMLElement>();
const role = computed(() => props.role);

const popperProvides = {
  /**
   * @zh 触发元素
   * @en trigger element
   */
  triggerRef,
  /**
   * @zh popperjs 实例
   * @en popperjs instance
   */
  popperInstanceRef,
  /**
   * @zh popper 内容元素
   * @en popper content element
   */
  contentRef,
  /**
   * @zh popper 参考元素
   * @en popper reference element
   */
  referenceRef,
  /**
   * @zh role用于定义aria属性方式
   * @en role determines how aria attributes are distributed
   */
  role
} as TuPopperInjectionContext;

defineExpose(popperProvides);

provide(POPPER_INJECTION_KEY, popperProvides);
</script>
