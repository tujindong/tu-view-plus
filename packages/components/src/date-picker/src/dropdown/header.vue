<template>
  <div :class="nsPicker.e('header')">
    <div :class="getIconClassName(showSuperPrev)" @click="onSuperPrev">
      <template v-if="showSuperPrev">
        <tu-icon>
          <RenderFunction
            v-if="icons && icons.prevDouble"
            :render-func="icons && icons.prevDouble"
          />
          <DArrowLeft v-else />
        </tu-icon>
      </template>
    </div>
    <div :class="getIconClassName(showPrev)" @click="onPrev">
      <template v-if="showPrev">
        <tu-icon>
          <RenderFunction
            v-if="icons && icons.prev"
            :render-func="icons && icons.prev"
          />
          <ArrowLeft v-else />
        </tu-icon>
      </template>
    </div>
    <div :class="nsPicker.e('header-title')">
      <template v-if="onLabelClick && (year || month)">
        <span
          v-if="year"
          :class="nsPicker.e('header-label')"
          @click="() => onLabelClick && onLabelClick('year')"
        >
          {{ year }}
        </span>
        <span v-if="year && month">-</span>
        <span
          v-if="month"
          :class="nsPicker.e('header-label')"
          @click="() => onLabelClick && onLabelClick('month')"
        >
          {{ month }}
        </span>
      </template>
      <template v-else>{{ title }}</template>
    </div>
    <div :class="getIconClassName(showNext)" @click="onNext">
      <template v-if="showNext">
        <tu-icon>
          <RenderFunction
            v-if="icons && icons.next"
            :render-func="icons && icons.next"
          />
          <ArrowRight v-else />
        </tu-icon>
      </template>
    </div>
    <div :class="getIconClassName(showSuperNext)" @click="onSuperNext">
      <template v-if="showSuperNext">
        <tu-icon>
          <RenderFunction
            v-if="icons && icons.nextDouble"
            :render-func="icons && icons.nextDouble"
          />
          <DArrowRight v-else />
        </tu-icon>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { headerProps } from './header';
import { useNamespace } from '@tu-view-plus/hooks';
import { isFunction } from '@tu-view-plus/utils';
import { RenderFunction } from '@tu-view-plus/constants';
import {
  DArrowLeft,
  DArrowRight,
  ArrowLeft,
  ArrowRight
} from '@tu-view-plus/icons-vue';
import { TuIcon } from '../../../icon';

defineOptions({
  name: 'TuHeader'
});

const props = defineProps(headerProps);

const nsPicker = useNamespace('picker');

const showPrev = computed(() => isFunction(props.onPrev));

const showSuperPrev = computed(() => isFunction(props.onSuperPrev));

const showNext = computed(() => isFunction(props.onNext));

const showSuperNext = computed(() => isFunction(props.onSuperNext));

const year = computed(() =>
  ['date', 'quarter', 'month', 'week'].includes(props.mode) && props.value
    ? props.value.format('YYYY')
    : ''
);

const month = computed(() =>
  ['date', 'week'].includes(props.mode) && props.value
    ? props.value.format('MM')
    : ''
);

const getIconClassName = (show?: boolean) => {
  return [nsPicker.e('header-icon'), { [nsPicker.is('icon-hidden')]: !show }];
};
</script>
