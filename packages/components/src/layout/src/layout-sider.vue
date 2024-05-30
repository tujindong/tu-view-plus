<template>
  <component
    :is="componentTag"
    :class="classes"
    :style="{ width: siderWidth }"
    v-bind="resizeDirections ? { directions: resizeDirections } : {}"
  >
    <div :class="nsLayout.e('sider-children')">
      <slot />
    </div>
    <div
      v-if="showTrigger"
      :class="nsLayout.e('sider-trigger')"
      :style="{ width: siderWidth }"
      @click="toggleTrigger"
    >
      <slot name="trigger" :collapsed="localCollapsed">
        <div v-if="!reverseArrow">
          <TuIcon v-if="!localCollapsed">
            <ArrowLeft />
          </TuIcon>
          <TuIcon v-else>
            <ArrowRight />
          </TuIcon>
        </div>
        <div v-else>
          <TuIcon v-if="localCollapsed">
            <ArrowLeft />
          </TuIcon>
          <TuIcon v-else>
            <ArrowRight />
          </TuIcon>
        </div>
      </slot>
    </div>
  </component>
</template>

<script lang="ts" setup>
import {
  computed,
  toRefs,
  reactive,
  inject,
  onMounted,
  onUnmounted,
  provide,
  Ref
} from 'vue';
import {
  useNamespace,
  useMergeState,
  useResponsive
} from '@tu-view-plus/hooks';
import { isNumber } from '@tu-view-plus/utils';
import { ArrowLeft, ArrowRight } from '@tu-view-plus/icons-vue';
import { layoutSiderProps, layoutSiderEmits } from './layout-sider';
import { LayoutSiderInjectionKey, SiderInjectionKey } from './context';
import TuIcon from '../../icon';
import TuResizeBox from '../../resize-box';
import '../style/layout.scss';

const generateId = (() => {
  let i = 0;
  return (prefix = '') => {
    i += 1;
    return `${prefix}${i}`;
  };
})();

defineOptions({
  name: 'TuLayoutSider'
});

const props = defineProps(layoutSiderProps);
const emit = defineEmits(layoutSiderEmits);

const nsLayout = useNamespace('layout');

const {
  collapsed,
  defaultCollapsed,
  collapsible,
  hideTrigger,
  breakpoint,
  collapsedWidth,
  resizeDirections
} = toRefs(props);

const [localCollapsed, setLocalCollapsed] = useMergeState(
  defaultCollapsed?.value,
  reactive({
    value: collapsed
  })
);

const componentTag = computed(() =>
  resizeDirections?.value ? TuResizeBox : 'div'
);

const showTrigger = computed(() => collapsible?.value && !hideTrigger?.value);

const classes = computed(() => ({
  [nsLayout.e('sider')]: true,
  [nsLayout.is('has-trigger')]: showTrigger.value,
  [nsLayout.is('collapsed')]: collapsed?.value
}));

const siderWidth = computed(() => {
  const { width, collapsedWidth } = props;
  const rawWidth = localCollapsed.value ? collapsedWidth : width;
  return isNumber(rawWidth) ? `${rawWidth}px` : String(rawWidth);
});

const toggleTrigger = () => {
  const newCollapsed = !localCollapsed.value;
  setLocalCollapsed(newCollapsed);
  emit('update:collapsed', newCollapsed);
  emit('collapse', newCollapsed, 'clickTrigger');
};

// Subscription Responsive
useResponsive(breakpoint, (checked) => {
  const newCollapsed = !checked;
  if (newCollapsed !== localCollapsed.value) {
    setLocalCollapsed(newCollapsed);
    emit('update:collapsed', newCollapsed);
    emit('collapse', newCollapsed, 'responsive');
    emit('breakpoint', newCollapsed);
  }
});

const uniqueId = generateId('__tu_layout_sider');
const siderHook = inject(LayoutSiderInjectionKey, undefined);

onMounted(() => {
  siderHook?.onSiderMount?.(uniqueId);
});

onUnmounted(() => {
  siderHook?.onSiderUnMount?.(uniqueId);
});

// 提供 context
provide(
  SiderInjectionKey,
  reactive({
    collapsed: localCollapsed as Ref<boolean>,
    collapsedWidth
  })
);
</script>
