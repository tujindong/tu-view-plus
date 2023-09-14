<template>
  <div :class="dropdownPanelClasses">
    <div v-if="isEmpty" :class="nsDropdown.e('empty')">
      <slot name="empty">
        <tu-empty />
      </slot>
    </div>
    <tu-scrollbar
      ref="wrapRef"
      tag="ul"
      :wrap-class="nsDropdown.e('wrap')"
      :view-class="nsDropdown.e('list')"
      :wrap-style="scrollWrapStyle"
      @scroll="handleScroll"
    >
      <slot />
    </tu-scrollbar>
    <div v-if="$slots.footer && !isEmpty" :class="nsDropdown.e('footer')">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, inject } from 'vue';
import { dropdownPanelProps, dropdownPanelEmits } from './dropdown-panel';
import { useNamespace } from '@tu-view-plus/hooks';
import { addUnit, isNumber } from '@tu-view-plus/utils';
import { TuEmpty } from '../../empty';
import { TuScrollbar } from '../../scrollbar';
import { DropdownContext, dropdownInjectionKey } from './constants';

import type { CSSProperties } from 'vue';

defineOptions({
  name: 'TuDropdownPanel'
});

const nsDropdown = useNamespace('dropdown');

const props = defineProps(dropdownPanelProps);
const emit = defineEmits(dropdownPanelEmits);

const wrapRef = ref<HTMLElement>();

const dropdownContext = inject<Partial<DropdownContext>>(
  dropdownInjectionKey,
  {}
);

const dropdownPanelClasses = computed(() => ({
  [nsDropdown.b()]: true,
  [nsDropdown.m(dropdownContext.size as string)]: dropdownContext.size
}));

const scrollWrapStyle = computed<CSSProperties | undefined>(() => {
  const { popupMaxHeight } = dropdownContext;
  if (isNumber(popupMaxHeight)) {
    return {
      maxHeight: addUnit(popupMaxHeight)
    };
  }
  if (!popupMaxHeight) {
    return {
      maxHeight: 'none',
      overflowY: 'hidden'
    };
  }
  return undefined;
});

const handleScroll = ({
  scrollTop,
  scrollLeft
}: {
  scrollTop: number;
  scrollLeft: number;
}) => {
  emit('scroll', { scrollTop, scrollLeft });
};
</script>