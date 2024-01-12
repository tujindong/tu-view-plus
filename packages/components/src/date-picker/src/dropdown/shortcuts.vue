<template>
  <div :class="nsPicker.e('shortcuts')">
    <tu-button
      v-if="showNowBtn"
      type="text"
      size="mini"
      @click="() => onNowClick()"
    >
      {{ t('tu.datepicker.now') }}
    </tu-button>
    <tu-button
      v-for="(item, index) in shortcuts"
      size="mini"
      :key="index"
      @click="onItemClick(item)"
      @mouseenter="onItemMouseEnter(item)"
      @mouseleave="onItemMouseLeave(item)"
    >
      <RenderFunction v-if="isFunction(item.label)" :render-func="item.label" />
      <template v-else>
        {{ item.label }}
      </template>
    </tu-button>
  </div>
</template>

<script lang="ts" setup>
import { shortcutsProps, shortcutsEmits } from './shortcuts';
import { useNamespace, useLocale } from '@tu-view-plus/hooks';
import { RenderFunction } from '@tu-view-plus/constants';
import { isFunction } from '@tu-view-plus/utils';
import { TuButton } from '../../../button';
import { ShortcutType } from '../interface';

defineOptions({
  name: 'TuShortcuts'
});

const props = defineProps(shortcutsProps);
const emit = defineEmits(shortcutsEmits);

const nsPicker = useNamespace('picker');

const { t } = useLocale();

const onNowClick = () => {
  emit('now-click');
};

const onItemClick = (item: ShortcutType) => {
  emit('item-click', item);
};

const onItemMouseEnter = (item: ShortcutType) => {
  emit('item-mouse-enter', item);
};

const onItemMouseLeave = (item: ShortcutType) => {
  emit('item-mouse-leave', item);
};
</script>
