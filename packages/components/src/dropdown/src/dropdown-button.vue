<template>
  <div :class="nsDropdownButton.b()">
    <tu-button-group>
      <tu-button
        v-bind="buttonProps"
        :size="size"
        :type="type"
        :disabled="disabled"
        @click="handleClick"
      >
        <slot />
      </tu-button>
      <tu-dropdown
        :popup-visible="computedPopupVisible"
        :trigger="trigger"
        :position="position"
        :popup-container="popupContainer"
        :hide-on-select="hideOnSelect"
        @select="handleSelect"
        @popup-visible-change="handlePopupVisibleChange"
      >
        <tu-button :size="size" :type="type" :disabled="disabled">
          <template #icon>
            <slot name="icon" :popup-visible="computedPopupVisible">
              <tu-icon>
                <ArrowDown />
              </tu-icon>
            </slot>
          </template>
        </tu-button>
        <template #content>
          <slot name="content" />
        </template>
      </tu-dropdown>
    </tu-button-group>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue';
import { dropdownButtonProps, dropdownButtonEmits } from './dropdown-button';
import { useNamespace, useTrigger } from '@tu-view-plus/hooks';
import { TuButton, TuButtonGroup } from '../../button';
import { TuIcon } from '../../icon';
import { ArrowDown } from '@tu-view-plus/icons-vue';
import TuDropdown from '..';
import '../style/dropdown.scss';

defineOptions({
  name: 'TuDropdownButton'
});

const props = defineProps(dropdownButtonProps);
const emit = defineEmits(dropdownButtonEmits);

const nsDropdownButton = useNamespace('dropdown-button');

const { defaultPopupVisible, popupVisible } = toRefs(props);

const { computedPopupVisible, handlePopupVisibleChange } = useTrigger({
  defaultPopupVisible,
  popupVisible,
  emit
});

const handleClick = (evt: MouseEvent) => {
  emit('click', evt);
};

const handleSelect = (
  value: string | number | Record<string, unknown> | undefined,
  evt: Event
) => {
  emit('select', value, evt);
};
</script>