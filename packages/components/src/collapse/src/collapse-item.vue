<template>
  <div :class="collapseItemClasses">
    <div
      role="tab"
      :aria-expanded="isActive"
      :aria-controls="scopedContentId"
      :aria-describedby="scopedContentId"
    >
      <div
        role="button"
        :id="scopedHeadId"
        :class="headClasses"
        :tabindex="disabled ? -1 : 0"
        @click="handleHeaderClick"
        @keypress.space.enter.stop.prevent="handleEnterClick"
        @focus="handleFocus"
        @blur="focusing = false"
      >
        <tu-icon :class="arrowClasses">
          <CaretRight />
        </tu-icon>
        <slot name="title">{{ title }}</slot>
      </div>
    </div>
    <tu-collapse-transition>
      <div
        role="tabpanel"
        v-show="isActive"
        :aria-hidden="!isActive"
        :aria-labelledby="scopedHeadId"
        :id="scopedContentId"
        :class="nsCollapseItem.e('wrap')"
      >
        <div :class="nsCollapseItem.e('content')">
          <slot />
        </div>
      </div>
    </tu-collapse-transition>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject, ref } from 'vue';
import { collapseItemProps } from './collapse-item';
import { useNamespace, defaultNamespace } from '@tu-view-plus/hooks';
import { generateId } from '@tu-view-plus/utils';
import { CaretRight } from '@tu-view-plus/icons-vue';
import TuCollapseTransition from '../../collapse-transition';
import TuIcon from '../../icon';
import { collapseContextKey } from './constants';
import '../style/collapse.scss';

defineOptions({
  name: 'TuCollapseItem'
});

const props = defineProps(collapseItemProps);

const nsCollapseItem = useNamespace('collapse-item');

const collapse = inject(collapseContextKey);

const focusing = ref(false);
const isClick = ref(false);
const id = ref(generateId());

const isActive = computed(() =>
  collapse?.activeNames.value.includes(props.name)
);

const scopedContentId = computed(
  () => `${defaultNamespace}-content-${id.value}`
);

const scopedHeadId = computed(() => `${defaultNamespace}-head-${id.value}`);

const collapseItemClasses = computed(() => ({
  [nsCollapseItem.b()]: true,
  [nsCollapseItem.m(collapse?.size as string)]: collapse?.size,
  [nsCollapseItem.is('active')]: isActive.value,
  [nsCollapseItem.is('disabled')]: props.disabled
}));

const headClasses = computed(() => ({
  [nsCollapseItem.e('header')]: true,
  [nsCollapseItem.is('active')]: isActive.value,
  [nsCollapseItem.is('focusing')]: focusing.value && !props.disabled
}));

const arrowClasses = computed(() => ({
  [nsCollapseItem.e('arrow')]: true,
  [nsCollapseItem.is('active')]: isActive.value
}));

const handleHeaderClick = () => {
  if (props.disabled) return;
  collapse?.handleItemClick(props.name);
  focusing.value = false;
  isClick.value = true;
};

const handleEnterClick = () => {
  collapse?.handleItemClick(props.name);
};

const handleFocus = () => {
  setTimeout(() => {
    if (!isClick.value) {
      focusing.value = true;
    } else {
      isClick.value = false;
    }
  }, 50);
};
</script>
