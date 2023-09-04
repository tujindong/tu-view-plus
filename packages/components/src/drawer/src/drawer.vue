<template>
  <only-client>
    <teleport :to="teleportContainer" :disabled="!renderToBody">
      <div
        v-if="!unmountOnClose || visibleComputed || mounted"
        v-show="visibleComputed || mounted"
        :class="nsDrawerContianer.b()"
        :style="drawerContainerStyle"
        v-bind="$attrs"
      >
        <transition name="fade-drawer">
          <div
            v-if="mask"
            v-show="visibleComputed"
            :class="nsDrawerContianer.e('mask')"
            @click="handleMaskClick"
          ></div>
        </transition>
      </div>
    </teleport>
  </only-client>
</template>

<script lang="ts" setup>
import { ref, computed, toRefs } from 'vue';
import { drawerProps, drawerEmits } from './drawer';
import onlyClient from '../../only-client';
import {
  useNamespace,
  useTeleportContainer,
  usePopupManager
} from '@tu-view-plus/hooks';
import '../style/drawer.scss';

import type { CSSProperties } from 'vue';

defineOptions({
  name: 'TuDrawer',
  inheritAttrs: false
});

const props = defineProps(drawerProps);
const emit = defineEmits(drawerEmits);

const nsDrawer = useNamespace('drawer');
const nsDrawerContianer = useNamespace('drawer-container');

const { popupContainer } = toRefs(props);

const visibleRef = ref(props.defaultVisible);

const visibleComputed = computed(() => props.visible ?? visibleRef.value);

const mounted = ref(visibleComputed.value);

const { teleportContainer, containerRef } = useTeleportContainer({
  popupContainer,
  visible: visibleComputed
});

const { zIndex, isLastDialog } = usePopupManager('dialog', {
  visible: visibleComputed
});

const isFixed = computed(() => containerRef?.value === document.body);

const drawerContainerStyle = computed<CSSProperties>(() => {
  return isFixed.value
    ? { zIndex: zIndex.value }
    : { zIndex: 'inherit', position: 'absolute' };
});

const handleMaskClick = (e: Event) => {
  if (props.maskClosable) handleCancel(e);
};

const handleCancel = (e: Event) => {};
</script>
