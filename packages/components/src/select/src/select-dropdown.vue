<template>
  <div :class="dropdownClass">
    <div
      v-if="$slots.header && (!empty || showHeaderOnEmpty)"
      :class="nsSelect.e('dropdown-header')"
    >
      <slot name="header" />
    </div>
    <tu-spin
      v-if="loading"
      loading
      dot
      :class="nsSelect.e('dropdown-loading')"
      :size="10"
    />
    <div v-else-if="empty" :class="nsSelect.e('dropdown-empty')">
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
      @scroll="handleScroll"
    >
      <slot />
    </tu-scrollbar>
    <div
      v-if="$slots.footer && (!empty || showFooterOnEmpty)"
      :class="nsSelect.e('dropdown-footer')"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, useSlots, inject } from 'vue';
import { selectDropDownProps, selectDropDownEmits } from './select-dropdown';
import { useNamespace } from '@tu-view-plus/hooks';
import { selectInjectionKey } from './context';
import TuSpin from '../../spin';
import TuEmpty from '../../empty';
import TuScrollbar from '../../scrollbar';

defineOptions({
  name: 'TuSelectDropdown'
});

const props = defineProps(selectDropDownProps);
const emit = defineEmits(selectDropDownEmits);

const slots = useSlots();

const nsSelect = useNamespace('select');

const wrapperComRef = ref<InstanceType<typeof TuScrollbar>>();

const selectContext = inject(selectInjectionKey, undefined);

const dropdownClass = computed(() => ({
  [nsSelect.e('dropdown')]: true,
  [nsSelect.em('dropdown', selectContext?.selectSize as string)]: true,
  [nsSelect.e('dropdown-header')]: Boolean(slots.header),
  [nsSelect.e('dropdown-footer')]: Boolean(slots.footer)
}));

const handleScroll = ({ scrollTop }: { scrollTop: number }) => {
  const wrapRef = wrapperComRef.value?.wrapRef as HTMLElement;
  const { scrollHeight, offsetHeight } = wrapRef;
  const bottom = scrollHeight - (scrollTop + offsetHeight);
  if (bottom <= props.bottomOffset) {
    emit('reachBottom', wrapRef);
  }
  emit('scroll', wrapRef);
};
</script>
