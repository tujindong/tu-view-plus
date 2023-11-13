<template>
  <div
    ref="itemRef"
    :class="avatarClasses"
    :style="outerStyle"
    @click="onClick"
  >
    <tu-resize-observer @resize="handleResize">
      <span ref="wrapperRef" :class="wrapperClasses">
        <template v-if="props.imageUrl">
          <slot v-if="hasError" name="error">
            <div :class="nsAvatar.e('image-icon')">
              <tu-icon :size="20">
                <PictureRounded />
              </tu-icon>
            </div>
          </slot>
          <slot v-if="!(hasError || !shouldLoad) && !isLoaded">
            <div :class="nsAvatar.e('image-icon')">
              <tu-icon :size="20">
                <Loading />
              </tu-icon>
            </div>
          </slot>
          <img
            v-if="!(hasError || !shouldLoad)"
            alt="avatar"
            :src="props.imageUrl"
            :style="{
              width: addUnit(size),
              height: addUnit(size)
            }"
            @load="handleImgLoad"
            @error="handleImgError"
          />
        </template>
        <slot v-else />
      </span>
    </tu-resize-observer>
    <div
      v-if="$slots['trigger-icon']"
      :class="triggerClasses"
      :style="computedTriggerIconStyle"
    >
      <slot name="trigger-icon" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  onMounted,
  inject,
  ref,
  nextTick,
  watch,
  toRefs,
  useSlots,
  useAttrs
} from 'vue';
import { avatarProps, avatarEmits } from './avatar';
import { avatarGroupInjectionKey } from './constants';
import { useNamespace, defaultNamespace } from '@tu-view-plus/hooks';
import { PictureRounded, Loading } from '@tu-view-plus/icons-vue';
import { isNumber, addUnit } from '@tu-view-plus/utils';
import { useIndex } from '@tu-view-plus/hooks';
import '../style/avatar.scss';

import type { CSSProperties } from 'vue';
import type { TriggerType } from './constants';

defineOptions({
  name: 'TuAvatar'
});

const props = defineProps(avatarProps);
const emit = defineEmits(avatarEmits);
const slots = useSlots();
const attrs = useAttrs();

const nsAvatar = useNamespace('avatar');

const { shape, size, autoFixFontSize, triggerType, triggerIconStyle } =
  toRefs(props);

const groupCtx = inject(avatarGroupInjectionKey, undefined);

const itemRef = ref<HTMLDivElement>();
const wrapperRef = ref<HTMLElement>();

const isImage = ref(false);
const hasError = ref(false);
const shouldLoad = ref(true);
const isLoaded = ref(false);

const avatarClasses = computed(() => ({
  [nsAvatar.b()]: true,
  [nsAvatar.m(props.effect)]: props.effect,
  [nsAvatar.is('shape')]: shape.value == 'circle',
  [nsAvatar.is('trigger-icon')]: slots['trigger-icon']
}));
const wrapperClasses = computed(() => ({
  [nsAvatar.e('image')]: isImage.value || props.imageUrl,
  [nsAvatar.e('text')]: !(isImage.value || props.imageUrl)
}));
const triggerClasses = computed(() => ({
  [nsAvatar.e(`trigger-icon-${triggerType.value}`)]: true,
  [nsAvatar.is('shape')]: shape.value == 'circle'
}));

const index = groupCtx
  ? useIndex({
      itemRef,
      selector: `.${defaultNamespace}-avatar`
    }).computedIndex
  : ref(-1);

const outerStyle = computed(() => {
  const style: CSSProperties = isNumber(mergedSize.value)
    ? {
        width: addUnit(mergedSize.value),
        height: addUnit(mergedSize.value),
        fontSize: addUnit(mergedSize.value / 2)
      }
    : {};
  if (groupCtx) {
    style.zIndex = groupCtx.zIndexAscend
      ? index.value + 1
      : groupCtx.total - index.value;
    style.marginLeft =
      index.value !== 0 ? `-${(mergedSize.value ?? 40) / 4}px` : '0';
  }
  return style;
});

const useTriggerIconStyle = ({
  triggerType,
  inlineStyle = {},
  triggerIconStyle = {}
}: {
  triggerType: TriggerType;
  inlineStyle?: CSSProperties;
  triggerIconStyle?: CSSProperties;
}): CSSProperties => {
  let addon: CSSProperties = {};
  if (
    triggerType === 'button' &&
    (!triggerIconStyle || (triggerIconStyle && !triggerIconStyle.color)) &&
    inlineStyle &&
    inlineStyle.backgroundColor
  ) {
    addon = { color: inlineStyle.backgroundColor };
  }
  return {
    ...triggerIconStyle,
    ...addon
  };
};

const computedTriggerIconStyle = useTriggerIconStyle({
  triggerIconStyle: triggerIconStyle?.value,
  inlineStyle: attrs.style as CSSProperties,
  triggerType: triggerType.value
});

const mergedSize = computed(() => groupCtx?.size ?? size?.value);
const mergedAutoFixFontSize = computed(
  () => groupCtx?.autoFixFontSize ?? autoFixFontSize.value
);

const autoFixFontSizeHandler = () => {
  if (!isImage.value && !props.imageUrl) {
    nextTick(() => {
      if (!wrapperRef.value || !itemRef.value) {
        return;
      }
      const textWidth = wrapperRef.value.clientWidth;
      const avatarWidth = mergedSize.value ?? itemRef.value.offsetWidth;

      const scale = avatarWidth / (textWidth + 8);
      if (avatarWidth && scale < 1) {
        wrapperRef.value.style.transform = `scale(${scale}) translateX(-50%)`;
      }
      shouldLoad.value = true;
    });
  }
};

const onClick = (e: MouseEvent) => {
  emit('click', e);
};

const handleResize = () => {
  if (mergedAutoFixFontSize.value) {
    autoFixFontSizeHandler();
  }
};

const handleImgLoad = () => {
  isLoaded.value = true;
  emit('load');
};

const handleImgError = () => {
  hasError.value = true;
  emit('error');
};

watch(size, () => {
  if (mergedAutoFixFontSize.value) {
    autoFixFontSizeHandler();
  }
});

onMounted(() => {
  if (
    wrapperRef.value?.firstElementChild &&
    ['IMG', 'PICTURE'].includes(wrapperRef.value.firstElementChild.tagName)
  ) {
    isImage.value = true;
  }
  if (mergedAutoFixFontSize.value) {
    autoFixFontSizeHandler();
  }
});
</script>
