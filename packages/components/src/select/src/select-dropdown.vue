<template>
  <div :class="dropdownClass">
    <div
      v-if="$slots.header && (!empty || showHeaderOnEmpty)"
      :class="nsSelectDropdown.e('header')"
    >
      <slot name="header" />
    </div>
    <tu-spin v-if="loading" :class="nsSelectDropdown.e('loading')" />
    <div v-else-if="empty" :class="nsSelectDropdown.e('empty')">
      <slot name="empty">
        <TuEmpty />
      </slot>
    </div>
    <slot v-if="virtualList && !loading && !empty" name="virtual-list" />
    <component
      is="div"
      ref="wrapperComRef"
      v-if="!virtualList"
      v-show="!loading && !empty"
      v-bind="scrollbarProps"
      :class="nsSelectDropdown.e('list-wrap')"
      @scroll="handleScroll"
    >
      <ul :class="nsSelectDropdown.e('list')">
        <slot />
      </ul>
    </component>
    <div
      v-if="$slots.footer && (!empty || showFooterOnEmpty)"
      :class="nsSelectDropdown.e('footer')"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue';
import { selectDropDownProps, selectDropDownEmits } from './select-dropdown';
import { scrollbarProps } from '../../scrollbar/src/scrollbar';
import TuSpin from '../../spin';
import TuEmpty from '../../empty';
import { useNamespace } from '@tu-view-plus/hooks';

defineOptions({
  name: 'TuSelectDropDown'
});

const props = defineProps(selectDropDownProps);
const emit = defineEmits(selectDropDownEmits);

const slots = useSlots();

const nsSelectDropdown = useNamespace('select-dropdown');

const dropdownClass = computed(() => ({
  [nsSelectDropdown.b()]: true,
  [nsSelectDropdown.e('header')]: Boolean(slots.header),
  [nsSelectDropdown.e('footer')]: Boolean(slots.footer)
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
