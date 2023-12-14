<template>
  <div ref="refWrapper" :class="nsTimePicker.e('column')">
    <ul :class="nsTimePicker.e('list')">
      <li
        v-for="item in list"
        :key="item.value"
        :ref="(el) => onItemRef(el, item)"
        :class="getListClasses(item)"
        @click="onItemClick(item)"
      >
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, onMounted, watch, nextTick } from 'vue';
import {
  timePickerColumnProps,
  timePickerColumnEmits
} from './time-picker-column';
import { useNamespace } from '@tu-view-plus/hooks';
import { isUndefined } from '@tu-view-plus/utils';
import { TimeListItem } from './interface';
import { scrollTo } from './utils';
import '../style/time-picker.scss';

defineOptions({
  name: 'TuTimePickerDropdown'
});

const props = defineProps(timePickerColumnProps);
const emit = defineEmits(timePickerColumnEmits);

const { visible, value } = toRefs(props);

const nsTimePicker = useNamespace('time-picker');

const refMap = ref(new Map<TimeListItem['value'], HTMLElement>());
const refWrapper = ref<HTMLElement>();

const getListClasses = (item: TimeListItem) => {
  return {
    [nsTimePicker.e('cell')]: true,
    [nsTimePicker.is('disabled')]: item.disabled,
    [nsTimePicker.is('select')]: item.selected
  };
};

const scrollToTop = (easing = false) => {
  if (!refWrapper.value || isUndefined(value?.value) || !visible?.value) {
    return;
  }

  const refSelected = refMap.value.get(value.value);

  if (refSelected) {
    scrollTo(refWrapper.value, refSelected.offsetTop, easing ? 100 : 0);
  }
};

const onItemRef = (el: HTMLElement, item: TimeListItem) => {
  refMap.value.set(item.value, el);
};

const onItemClick = (item: TimeListItem) => {
  if (!item.disabled) {
    emit('select', item.value);
  }
};

watch([value, visible], (_, [, preVisible]) => {
  if (visible?.value !== preVisible) {
    nextTick(() => {
      scrollToTop();
    });
  } else {
    scrollToTop(true);
  }
});

onMounted(() => {
  scrollToTop();
});
</script>
