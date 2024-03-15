<template>
  <div v-bind="$attrs" :class="classes" :style="styles">
    <div :class="nsMenu.e('inner')">
      <slot />
    </div>
    <div
      v-if="computedHasCollapseButton"
      :class="nsMenu.e('collapse-button')"
      @click="onCollapseBtnClick"
    >
      <slot name="collapse-icon" :collapsed="computedCollapsed">
        <tu-icon>
          <Expand v-if="computedCollapsed" />
          <Fold v-else />
        </tu-icon>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  toRefs,
  reactive,
  provide,
  CSSProperties,
  useSlots
} from 'vue';
import { baseMenuProps, baseMenuEmits } from './base-menu';
import {
  useNamespace,
  useMergeState,
  usePickSlots,
  useResponsive
} from '@tu-view-plus/hooks';
import { isNumber, isObject, omit, addUnit } from '@tu-view-plus/utils';
import { Expand, Fold } from '@tu-view-plus/icons-vue';
import { useMenuOpenState, useMenuDataCollector, provideLevel } from './hooks';
import { MenuInjectionKey } from './context';
import TuIcon from '../../icon';
import '../style/menu.scss';

defineOptions({
  name: 'TuBaseMenu',
  inheritAttrs: false
});

const props = defineProps(baseMenuProps);
const emit = defineEmits(baseMenuEmits);

const slots = useSlots();

const nsMenu = useNamespace('menu');

const {
  style,
  mode,
  levelIndent,
  accordion,
  showCollapseButton,
  scrollConfig,
  autoScrollIntoView,
  collapsedWidth,
  autoOpen,
  collapsed: propCollapsed,
  defaultCollapsed,
  selectedKeys: propSelectedKeys,
  defaultSelectedKeys,
  openKeys: propOpenKeys,
  defaultOpenKeys,
  triggerProps,
  tooltipProps,
  autoOpenSelected,
  breakpoint,
  popupMaxHeight,
  inTrigger,
  siderCollapsed,
  isRoot
} = toRefs(props);

const [collapsed, setCollapsed] = useMergeState(
  defaultCollapsed.value,
  reactive({
    value: propCollapsed
  })
);

const computedCollapsed = computed(
  () => siderCollapsed.value || collapsed.value || mode.value === 'popButton'
);

const computedHasCollapseButton = computed(
  () =>
    ['horizontal', 'popButton'].indexOf(mode.value) < 0 &&
    !inTrigger.value &&
    showCollapseButton.value
);

const classes = computed(() => ({
  [nsMenu.b()]: true,
  [nsMenu.m('horizontal')]: mode.value === 'horizontal',
  [nsMenu.m('vertical')]: mode.value === 'vertical',
  [nsMenu.is('pop')]: mode.value === 'pop' || computedCollapsed.value,
  [nsMenu.is('pop-button')]: mode.value === 'popButton',
  [nsMenu.is('collapsed')]: computedCollapsed.value
}));

const styles = computed(() => {
  const pxCollapsedWidth = isNumber(collapsedWidth?.value)
    ? addUnit(collapsedWidth?.value)
    : undefined;

  const objectStyle = isObject(style.value)
    ? (style.value as CSSProperties)
    : undefined;

  const width = computedCollapsed.value ? pxCollapsedWidth : objectStyle?.width;

  return [objectStyle ? omit(objectStyle, ['width']) : style.value, { width }];
});

const [selectedKeys, setSelectedKeys] = useMergeState(
  defaultSelectedKeys.value,
  reactive({
    value: propSelectedKeys
  })
);

const { subMenuKeys, menuData } = useMenuDataCollector({
  type: isRoot.value ? 'menu' : 'popupMenu'
});

const { openKeys, setOpenKeys, open } = useMenuOpenState(
  reactive({
    modelValue: propOpenKeys,
    defaultValue: defaultOpenKeys,
    autoOpen,
    autoOpenSelected,
    selectedKeys,
    subMenuKeys,
    menuData,
    accordion
  })
);

const changeCollapsed = (
  newVal: boolean,
  type: 'clickTrigger' | 'responsive'
) => {
  if (newVal === collapsed.value) return;
  setCollapsed(newVal);
  emit('update:collapsed', newVal);
  emit('collapse', newVal, type);
};

const onCollapseBtnClick = () => {
  changeCollapsed(!collapsed.value, 'clickTrigger');
};

useResponsive(breakpoint, (checked) => {
  changeCollapsed(!checked, 'responsive');
});

const expandIconDown = usePickSlots(slots, 'expand-icon-down');
const expandIconRight = usePickSlots(slots, 'expand-icon-right');

// provide MenuContext
const menuContext = reactive({
  mode,
  levelIndent,
  autoScrollIntoView,
  selectedKeys,
  openKeys,
  scrollConfig,
  inTrigger,
  collapsed: computedCollapsed,
  triggerProps,
  tooltipProps,
  popupMaxHeight,
  expandIconDown,
  expandIconRight,
  onMenuItemClick: (key: string) => {
    setSelectedKeys([key]);
    emit('update:selectedKeys', [key]);
    emit('menu-item-click', key);
  },
  onSubMenuClick: (key: string, level: number) => {
    const newOpenKeys = open(key, level);
    setOpenKeys(newOpenKeys);
    emit('update:openKeys', newOpenKeys);
    emit('sub-menu-click', key, newOpenKeys);
  }
});

provide(MenuInjectionKey, menuContext);

// provide LevelContext
provideLevel(1);
</script>
