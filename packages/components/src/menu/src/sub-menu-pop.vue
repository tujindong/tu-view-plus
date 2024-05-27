<template>
  <TuTrigger
    trigger="hover"
    animation-class="fade-in"
    v-bind="triggerProps"
    :class="triggerClasses"
    :position="needPopOnBottom ? 'bl' : 'rt'"
    :mouse-enter-delay="50"
    :mouse-leave-delay="50"
    :popup-offset="needPopOnBottom ? 10 : 20"
    :auto-fit-popup-min-width="true"
    :duration="100"
    :unmount-on-close="false"
    :popup-visible="popVisible"
    @popupVisibleChange="onVisibleChange"
  >
    <div :class="classes" aria-haspopup="true" v-bind="$attrs" @click="onClick">
      <!-- header -->
      <TuMenuIndent :level="level" />
      <template v-if="$slots.icon">
        <span :class="nsMenu.e('icon')">
          <slot name="icon"></slot>
        </span>
        <span :class="nsMenu.e('title')">
          <slot name="title">{{ title }}</slot>
        </span>
      </template>
      <template v-else>
        <slot name="title">{{ title }}</slot>
      </template>
      <!-- suffix -->
      <span :class="nsMenu.e('icon-suffix')">
        <slot v-if="needPopOnBottom" name="expand-icon-down" />
        <slot v-else name="expand-icon-right" />
      </span>
      <div
        v-if="isSelected && mode === 'horizontal'"
        :class="nsMenu.e('selected-label')"
      />
    </div>
    <!-- content -->
    <template #content>
      <TuBaseMenu
        in-trigger
        :selected-keys="selectedKeys"
        :trigger-props="menuContext.triggerProps"
        :style="popupMenuStyles"
        @menuItemClick="handleMenuItemClick"
      >
        <slot />
        <template v-if="menuContext.expandIconDown" #expand-icon-down>
          <RenderFunction :render-func="menuContext.expandIconDown" />
        </template>
        <template v-if="menuContext.expandIconRight" #expand-icon-right>
          <RenderFunction :render-func="menuContext.expandIconRight" />
        </template>
      </TuBaseMenu>
    </template>
  </TuTrigger>
</template>

<script lang="ts" setup>
import { computed, ref, toRefs, useSlots } from 'vue';
import { subMenuPopProps } from './sub-menu-pop';
import { useNamespace } from '@tu-view-plus/hooks';
import { omit, isNumber } from '@tu-view-plus/utils';
import { useMenu, useLevel, useMenuContext } from './hooks';
import { RenderFunction } from '@tu-view-plus/constants';
import TuTrigger from '../../trigger';
import TuBaseMenu from './base-menu.vue';
import TuMenuIndent from './menu-indent.vue';
import '../style/menu.scss';

defineOptions({
  name: 'TuSubMenuPop',
  inheritAttrs: false
});

const props = defineProps(subMenuPopProps);

const slot = useSlots();

const nsMenu = useNamespace('menu');

const { key } = useMenu();
const { level } = useLevel();

const { selectable, isChildrenSelected, popupMaxHeight } = toRefs(props);

const menuContext = useMenuContext();

const { onSubMenuClick, onMenuItemClick } = menuContext;

const mode = computed(() => menuContext.mode);
const selectedKeys = computed(() => menuContext.selectedKeys || []);

const isSelected = computed(
  () =>
    (selectable.value && selectedKeys.value.includes(key.value)) ||
    isChildrenSelected?.value
);

const classes = computed(() => [
  nsMenu.e('pop'),
  nsMenu.is('selected', isSelected.value),
  nsMenu.is('has-icon', Boolean(slot?.icon))
]);

const popupMenuStyles = computed(() => {
  const maxHeight = popupMaxHeight?.value ?? menuContext.popupMaxHeight;
  if (isNumber(maxHeight)) return { maxHeight: `${maxHeight}px` };
  return maxHeight ? {} : { maxHeight: 'unset' };
});

const needPopOnBottom = computed(
  () => mode.value === 'horizontal' && !menuContext.inTrigger
);

const popVisible = ref(false);

const setPopVisible = (val: boolean) => {
  popVisible.value = val;
};

const triggerClasses = computed(() => [
  nsMenu.e('trigger'),
  menuContext.triggerProps?.class
]);

const triggerProps = computed(() =>
  omit(menuContext.triggerProps || {}, ['class'])
);

const onVisibleChange = (visible: boolean) => {
  setPopVisible(visible);
};

const onClick = () => {
  onSubMenuClick && onSubMenuClick(key.value, level.value);
  selectable.value && onMenuItemClick && onMenuItemClick(key.value);
};

const handleMenuItemClick = (key: string) => {
  onMenuItemClick && onMenuItemClick(key);
  setPopVisible(false);
};
</script>
