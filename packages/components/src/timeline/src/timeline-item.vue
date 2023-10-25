<template>
  <div role="listitem" :class="itemClasses">
    <div :class="nsTimelineItem.e('dot-wrapper')">
      <div :class="dotLineClasses" :style="dotLineStyle"></div>
      <div :class="nsTimelineItem.e('dot-content')">
        <div v-if="$slots.dot" :class="nsTimelineItem.e('dot-custom')">
          <slot name="dot" />
        </div>
        <div v-else :class="dotTypeClasses" :style="dotStyle"></div>
      </div>
    </div>
    <div :class="nsTimelineItem.e('content-wrapper')">
      <div v-if="$slots.default" :class="nsTimelineItem.e('content')">
        <slot />
      </div>
      <div
        v-if="labelPosition !== 'relative'"
        :class="nsTimelineItem.e('label')"
      >
        <slot v-if="$slots.label" name="label" />
        <template v-else>{{ label }}</template>
      </div>
    </div>
    <div v-if="labelPosition == 'relative'" :class="nsTimelineItem.e('label')">
      <slot v-if="$slots.label" name="label" />
      <template v-else>{{ label }}</template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, getCurrentInstance, inject } from 'vue';
import { timelineItemProps } from './timeline-item';
import { useNamespace } from '@tu-view-plus/hooks';
import {
  TimelineContext,
  timelineInjectionKey,
  Direction,
  ModeType
} from './constants';

defineOptions({
  name: 'TuTimelineItem'
});

const props = defineProps(timelineItemProps);

const nsTimelineItem = useNamespace('timeline-item');

const itemInstance = getCurrentInstance();

const itemContext = inject<Partial<TimelineContext>>(timelineInjectionKey, {});

const index = computed(
  () => itemContext.items?.indexOf(itemInstance?.uid ?? -1) ?? -1
);

const contextDirection = computed(() => {
  return itemContext?.direction ?? 'vertical';
});

const contextLabelPosition = computed(() => {
  return itemContext?.labelPosition ?? 'same';
});

const labelPosition = contextLabelPosition;

const getDefaultPosition = (
  index: number,
  mode: ModeType,
  direction: Direction,
  position?: string
) => {
  let positionMap = ['left', 'right'];
  if (direction === 'horizontal') {
    positionMap = ['top', 'bottom'];
  }
  const result =
    mode === 'alternate' ? position || positionMap[index % 2] : mode;
  return positionMap.indexOf(result) > -1 ? result : positionMap[0];
};

const itemClasses = computed(() => {
  const { items = [], reverse, labelPosition, mode = 'left' } = itemContext;
  const direction = contextDirection.value;
  const computedPosition = getDefaultPosition(
    index.value,
    mode,
    direction,
    props.position
  );
  return {
    [nsTimelineItem.b()]: true,
    [nsTimelineItem.m(`${direction}-${computedPosition}`)]: direction,
    [nsTimelineItem.em('label', `${labelPosition}`)]: labelPosition,
    [nsTimelineItem.is('last')]:
      index.value === (reverse === true ? 0 : items.length - 1)
  };
});

const dotLineClasses = computed(() => ({
  [nsTimelineItem.e('dot-line')]: true,
  [nsTimelineItem.em('dot-line', contextDirection.value)]:
    contextDirection.value
}));

const dotLineStyle = computed(() => {
  const { direction } = itemContext! || {};
  return {
    [direction === 'horizontal' ? 'borderTopStyle' : 'borderLeftStyle']:
      props.lineType,
    ...(props.lineColor ? { borderColor: props.lineColor } : {})
  };
});

const dotTypeClasses = computed(() => ({
  [nsTimelineItem.e('dot')]: true,
  [nsTimelineItem.em('dot', props.dotType)]: props.dotType
}));

const dotStyle = computed(() => {
  return {
    [props.dotType === 'solid' ? 'backgroundColor' : 'borderColor']:
      props.dotColor
  };
});
</script>
