<template>
  <div :class="dropdownClass">
    <div
      v-if="$slots.header && (!empty || showHeaderOnEmpty)"
      :class="nsSelect.e('header')"
    >
      <slot name="header" />
    </div>
    <tu-spin v-if="loading" :class="nsSelect.e('loading')" />
    <div v-else-if="empty" :class="nsSelect.e('empty')">
      <slot name="empty">
        <TuEmpty />
      </slot>
    </div>
    <slot v-if="virtualList && !loading && !empty" name="virtual-list" />
    <tu-scrollbar
      ref="wrapperComRef"
      tag="ul"
      v-if="!virtualList"
      v-show="!loading && !empty"
      :wrap-class="nsSelect.e('dropdown-wrap')"
      :view-class="nsSelect.e('dropdown-list')"
    >
      <slot />
    </tu-scrollbar>
    <div
      v-if="$slots.footer && (!empty || showFooterOnEmpty)"
      :class="nsSelect.e('footer')"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots, inject } from 'vue';
import { selectDropDownProps, selectDropDownEmits } from './select-dropdown';
import { useNamespace } from '@tu-view-plus/hooks';
import { selectInjectionKey } from './context';
import TuSpin from '../../spin';
import TuEmpty from '../../empty';
import TuScrollbar from '../../scrollbar';

defineOptions({
  name: 'TuSelectDropDown'
});

const props = defineProps(selectDropDownProps);
const emit = defineEmits(selectDropDownEmits);

const slots = useSlots();

const nsSelect = useNamespace('select');

const selectContext = inject(selectInjectionKey, undefined);

const dropdownClass = computed(() => ({
  [nsSelect.e('dropdown')]: true,
  [nsSelect.em('dropdown', selectContext?.selectSize as string)]: true,
  [nsSelect.e('dropdown-header')]: Boolean(slots.header),
  [nsSelect.e('dropdown-footer')]: Boolean(slots.footer)
}));

const handleScroll = (e: Event) => {
  const { scrollTop, scrollHeight, offsetHeight } = e.target as HTMLElement;
  const bottom = scrollHeight - (scrollTop + offsetHeight);
  if (bottom <= props.bottomOffset) {
    emit('reachBottom', e);
  }
  emit('scroll', e);
};
</script>
