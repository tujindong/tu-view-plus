<template>
  <tu-trigger
    :popup-visible="computedPopupVisible"
    :trigger="trigger"
    :position="position"
    :disabled="disabled"
    :popup-offset="6"
    @popup-visible-change="handlePopupVisibleChange"
  >
    <tu-dropdown-item
      v-bind="optionProps"
      :active="computedPopupVisible"
      uninject-context
    >
      <slot />
      <template v-if="$slots.icon" #icon>
        <slot name="icon" />
      </template>
      <template #suffix>
        <slot name="suffix">
          <tu-icon>
            <ArrowRight />
          </tu-icon>
        </slot>
      </template>
    </tu-dropdown-item>
    <template #content>
      <tu-dropdown-panel :class="nsDropdownMenu.b()">
        <slot name="content" />
        <template v-if="$slots.footer" #footer>
          <slot name="footer" />
        </template>
      </tu-dropdown-panel>
    </template>
  </tu-trigger>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue';
import { dropdownSubmenuProps, dropdownSubmenuEmits } from './dropdown-submenu';
import { ArrowRight } from '@tu-view-plus/icons-vue';
import { TuTrigger } from '../../trigger';
import { TuIcon } from '../../icon';
import TuDropdownItem from './dropdown-item.vue';
import TuDropdownPanel from './dropdown-panel.vue';
import { useNamespace, useTrigger } from '@tu-view-plus/hooks';

defineOptions({
  name: 'TuDropdownSubmenu'
});

const nsDropdownMenu = useNamespace('dropdown-submenu');

const props = defineProps(dropdownSubmenuProps);

const emit = defineEmits(dropdownSubmenuEmits);

const { defaultPopupVisible, popupVisible } = toRefs(props);

const { computedPopupVisible, handlePopupVisibleChange } = useTrigger({
  defaultPopupVisible,
  popupVisible,
  emit
});
</script>