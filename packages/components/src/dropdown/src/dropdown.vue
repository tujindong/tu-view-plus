<template>
  <tu-trigger
    animation-name="slide-dynamic-origin"
    auto-fit-transform-origin
    :popup-visible="computedPopupVisible"
    :popup-offset="10"
    :trigger="trigger"
    :position="position"
    :opened-class="nsDropdown.e('open')"
    :popup-container="popupContainer"
    @popup-visible-change="handlePopupVisibleChange"
  >
    <slot />
    <template #content>
      <tu-dropdown-panel>
        <slot name="content" />
        <template v-if="$slots.footer" #footer>
          <slot name="footer" />
        </template>
      </tu-dropdown-panel>
    </template>
  </tu-trigger>
</template>

<script lang="ts" setup>
import { provide, toRefs, reactive } from 'vue';
import { dropdownProps, dropdownEmits } from './dropdown';
import { TuTrigger } from '../../trigger';
import TuDropdownPanel from './dropdown-panel.vue';
import { useNamespace, useTrigger } from '@tu-view-plus/hooks';
import { dropdownInjectionKey } from './constants';
import '../style/dropdown.scss';

defineOptions({
  name: 'TuDropdown'
});

const props = defineProps(dropdownProps);
const emit = defineEmits(dropdownEmits);

const { defaultPopupVisible, popupVisible, popupMaxHeight, size } =
  toRefs(props);

const nsDropdown = useNamespace('dropdown');

const { computedPopupVisible, handlePopupVisibleChange } = useTrigger({
  defaultPopupVisible,
  popupVisible,
  emit
});

const handleOptionClick = (
  value: string | number | Record<string, any> | undefined,
  evt: Event
) => {
  emit('select', value, evt);
  props.hideOnSelect && handlePopupVisibleChange(false);
};

provide(
  dropdownInjectionKey,
  reactive({
    popupMaxHeight,
    size,
    onOptionClick: handleOptionClick
  })
);
</script>
