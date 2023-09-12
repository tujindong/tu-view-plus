<template>
  <div :class="nsDropdown.b()">
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
import { ref } from 'vue';
import { dropdownPanelProps, dropdownPanelEmits } from './dropdown-panel';
import { useNamespace } from '@tu-view-plus/hooks';
import { TuEmpty } from '../../empty';
import { TuScrollbar } from '../../scrollbar';

const nsDropdown = useNamespace('dropdown');

const props = defineProps(dropdownPanelProps);

const handleScroll = ({
  scrollTop,
  scrollLeft
}: {
  scrollTop: number;
  scrollLeft: number;
}) => {};
</script>