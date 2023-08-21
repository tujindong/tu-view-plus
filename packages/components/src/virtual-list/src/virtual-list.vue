<template>
  <div>{{ currentList }}</div>
  <Component
    ref="containerRef"
    :is="componentProps.container"
    :class="nsVirtualList.b()"
    :style="containerStyle"
    @scroll="handleScroll"
  >
    <Component v-bind="listAttrs" :is="componentProps.list" :style="listStyle">
      <Component
        ref="contentRef"
        v-bind="contentAttrs"
        :is="componentProps.content"
        :style="contentStyle"
      >
        <tu-virtual-list-item
          v-for="(item, index) of currentList"
          :key="item[itemKey] ?? start + index"
          :has-item-size="hasItemSize"
          :set-item-size="setItemSize"
        >
          <slot name="item" :item="item" :index="start + index" />
        </tu-virtual-list-item>
      </Component>
    </Component>
  </Component>
</template>

<script lang="ts" setup>
import { ref, computed, toRefs, nextTick } from 'vue';
import { virtualListProps, virtualListEmits } from './virtual-list';
import { isObject, addUnit, isNumber } from '@tu-view-plus/utils';
import { useNamespace } from '@tu-view-plus/hooks';
import { useVirtualListSize } from './use-virtual-list-size';
import TuVirtualListItem from './virtual-list-item.vue';
import { ScrollOptions } from './interface';
import '../style/virtual-list.scss';

import type { CSSProperties } from 'vue';

defineOptions({
  name: 'TuVirtualList'
});

const props = defineProps(virtualListProps);

const emit = defineEmits(virtualListEmits);

const { data, itemKey, fixedSize, estimatedSize, buffer, height } =
  toRefs(props);

const nsVirtualList = useNamespace('virtual-list');

const containerRef = ref<HTMLElement>();
const contentRef = ref<HTMLElement>();

const dataKeys = computed(() =>
  data.value.map((item: any, index) => {
    return (item[itemKey.value] ?? index) as string | number;
  })
);

const {
  frontPadding,
  behindPadding,
  start,
  end,
  getStartByScroll,
  setItemSize,
  hasItemSize,
  setStart,
  getScrollOffset
} = useVirtualListSize({
  dataKeys,
  contentRef,
  fixedSize,
  estimatedSize,
  buffer
});

const componentProps = computed(() => {
  if (isObject(props.component)) {
    return {
      container: 'div',
      list: 'div',
      content: 'div',
      ...props.component
    };
  }
  return {
    container: props.component,
    list: 'div',
    content: 'div'
  };
});

const containerStyle = computed<CSSProperties>(() => {
  return {
    height: addUnit(height.value),
    overflow: 'auto'
  };
});

const listStyle = computed<CSSProperties>(() =>
  props.paddingPosition === 'list'
    ? {
        paddingTop: addUnit(frontPadding.value),
        paddingBottom: addUnit(behindPadding.value)
      }
    : {}
);

const contentStyle = computed<CSSProperties>(() =>
  props.paddingPosition === 'content'
    ? {
        paddingTop: addUnit(frontPadding.value),
        paddingBottom: addUnit(behindPadding.value)
      }
    : {}
);

const currentList = computed(() => {
  if (props.threshold && data.value.length <= props.threshold) {
    return data.value;
  }
  return data.value.slice(start.value, end.value);
});

const handleScroll = (evt: MouseEvent) => {
  const { scrollTop, scrollHeight, offsetHeight } = evt.target as HTMLElement;

  const startValue = getStartByScroll(scrollTop);
  if (startValue !== start.value) setStart(startValue);
  emit('scroll', evt);
  const bottom = Math.floor(scrollHeight - (scrollTop + offsetHeight));
  if (bottom <= 0) emit('reachBottom', evt);
};

const scrollTo = (options: ScrollOptions) => {
  if (containerRef.value) {
    if (isNumber(options)) {
      containerRef.value.scrollTop = options;
    } else {
      const index = options.index ?? dataKeys.value.indexOf(options.key ?? '');
      setStart(index - buffer.value);
      containerRef.value.scrollTop = getScrollOffset(index);
      nextTick(() => {
        if (containerRef.value) {
          const containerScrollTop = getScrollOffset(index);
          if (containerScrollTop !== containerRef.value.scrollTop) {
            containerRef.value.scrollTop = containerScrollTop;
          }
        }
      });
    }
  }
};

defineExpose({
  scrollTo
});
</script>
