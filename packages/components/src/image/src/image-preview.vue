<template>
  <teleport :to="container" :disabled="!props.renderToBody">
    <div :class="classes" :style="wrapperStyles">
      <transition
        name="image-fade"
        @before-enter="
          (el) => el.parentElement && (el.parentElement.style.display = 'block')
        "
        @after-leave="
          (el) => el.parentElement && (el.parentElement.style.display = '')
        "
      >
        <div v-show="mergedVisible" :class="nsImage.e('preview-mask')"></div>
      </transition>
      <div
        ref="refWrapper"
        tabindex="0"
        v-if="mergedVisible"
        :class="nsImage.e('preview-wrapper')"
        @click="onMaskClick"
        @wheel.prevent.stop="onWheel"
      >
        <!-- img -->
        <div
          :class="nsImage.e('preview-img-container')"
          :style="{ transform: `scale(${scale},${scale})` }"
          @click="onMaskClick"
        >
          <img
            ref="refImage"
            :key="src"
            :src="src"
            :class="imgClasses"
            :style="{
              transform: `translate(${translate[0]}px, ${translate[1]}px) rotate(${rotate}deg)`
            }"
            @load="onImgLoad"
            @error="onImgError"
          />
        </div>

        <!-- loading -->
        <div v-if="isLoading" :class="nsImage.e('preview-loading')">
          <TuIcon>
            <Loading />
          </TuIcon>
        </div>

        <!-- scale value -->
        <transition name="image-fade">
          <div
            v-if="scaleValueVisible"
            :class="nsImage.e('preview-scale-value')"
          >
            {{ (scale * 100).toFixed(0) }}%
          </div>
        </transition>

        <!-- toolbar -->
        <ImagePreviewToolbar
          v-if="isLoaded && actionsLayout.length"
          :actions="actions"
          :actions-layout="actionsLayout"
        >
          <slot name="actions" />
        </ImagePreviewToolbar>

        <!-- close button -->
        <div
          v-if="closable"
          :class="nsImage.e('preview-close-btn')"
          @click="onCloseClick"
        >
          <TuIcon>
            <Close />
          </TuIcon>
        </div>

        <!-- group arrow -->
        <ImagePreviewArrow v-if="props.inGroup" v-bind="props.groupArrowProps" />
      </div>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
import {
  ref,
  toRefs,
  computed,
  reactive,
  CSSProperties,
  nextTick,
  watch,
  h,
  onBeforeUnmount
} from 'vue';
import { imagePreviewProps, imagePreviewEmits } from './image-preview';
import {
  useNamespace,
  useMergeState,
  usePopupContainer,
  usePopupManager,
  usePopupOverflowHidden,
  useLocale
} from '@tu-view-plus/hooks';
import useImageLoadStatus from '../hooks/use-image-load-status';
import useImageDrag from '../hooks/use-image-drag';
import { throttleByRaf, KEYBOARD_KEY, off, on } from '@tu-view-plus/utils';
import getScale, {
  getScaleByRate,
  minScale,
  maxScale
} from '../utils/get-scale';
import { TuIcon } from '../../icon';
import {
  Loading,
  Close,
  ZoomOut,
  ZoomIn,
  FullScreen,
  RefreshLeft,
  RefreshRight,
  Refresh
} from '@tu-view-plus/icons-vue';
import ImagePreviewToolbar from './image-preview-toolbar.vue';
import ImagePreviewArrow from './image-preview-arrow.vue';
import type { RotateDirectionTypes, ScaleActionTypes } from './constants';

const ROTATE_STEP = 90;

defineOptions({
  name: 'TuImagePreview'
});

const props = defineProps(imagePreviewProps);
const emit = defineEmits(imagePreviewEmits);

const { t } = useLocale();

const nsImage = useNamespace('image');

const {
  src,
  popupContainer,
  visible,
  defaultVisible,
  maskClosable,
  actionsLayout,
  defaultScale,
  zoomRate
} = toRefs(props);

const refWrapper = ref();
const refImage = ref();

const [mergedVisible, setVisible] = useMergeState(
  defaultVisible.value,
  reactive({ value: visible })
);

const classes = computed(() => ({
  [nsImage.e('preview')]: true,
  [nsImage.em('preview', 'hide')]: !mergedVisible.value
}));

const imgClasses = computed(() => ({
  [nsImage.e('preview-img')]: true,
  [nsImage.em('preview-img', 'moving')]: moving.value
}));

const container = usePopupContainer(
  document.body,
  reactive({ popupContainer })
);

const isFixed = computed(() => container.value === document.body);

const { zIndex } = usePopupManager('dialog', { visible: mergedVisible });

const wrapperStyles = computed<CSSProperties>(() => {
  const positionStyles: CSSProperties = isFixed.value
    ? { zIndex: zIndex.value, position: 'fixed' }
    : { zIndex: 'inherit', position: 'absolute' };
  return { ...positionStyles };
});

const { isLoading, isLoaded, setLoadStatus } = useImageLoadStatus();

const rotate = ref(0);

const scale = ref(defaultScale.value);

const { translate, moving, resetTranslate } = useImageDrag(
  reactive({
    wrapperEl: refWrapper,
    imageEl: refImage,
    visible: mergedVisible,
    scale
  })
);

const scaleValueVisible = ref(false);

let hideScaleTimer: any = null;

const showScaleValue = () => {
  !scaleValueVisible.value && (scaleValueVisible.value = true);
  hideScaleTimer && clearTimeout(hideScaleTimer);
  hideScaleTimer = setTimeout(() => {
    scaleValueVisible.value = false;
  }, 1000);
};

usePopupOverflowHidden(reactive({ container, hidden: mergedVisible }));

const reset = () => {
  rotate.value = 0;
  scale.value = defaultScale.value;
  resetTranslate();
};

const isIncludes = (action: string) => actionsLayout.value.includes(action);

const handleKeyDown = (ev: KeyboardEvent) => {
  ev.stopPropagation();
  ev.preventDefault();

  switch (ev.key) {
    case KEYBOARD_KEY.ESC:
      props.escToClose && close();
      break;
    case KEYBOARD_KEY.ARROW_LEFT:
      props.groupArrowProps.onPrev && props.groupArrowProps.onPrev();
      break;
    case KEYBOARD_KEY.ARROW_RIGHT:
      props.groupArrowProps.onNext && props.groupArrowProps.onNext();
      break;
    case KEYBOARD_KEY.ARROW_UP:
      isIncludes('zoomIn') && handleScale('zoomIn');
      break;
    case KEYBOARD_KEY.ARROW_DOWN:
      isIncludes('zoomOut') && handleScale('zoomOut');
      break;
    case KEYBOARD_KEY.SPACE:
      isIncludes('originalSize') && changeScale(1);
      break;
    default:
      break;
  }
};

const onWheel = throttleByRaf((e: WheelEvent) => {
  e.stopPropagation();
  e.preventDefault();

  if (!props.wheelZoom) return;

  const delta = e.deltaY || e.deltaX;
  const action = delta > 0 ? 'zoomOut' : 'zoomIn';
  const newScale = getScaleByRate(scale.value, zoomRate.value, action);
  changeScale(newScale);
});

let globalKeyDownListener = false;

const addGlobalKeyDownListener = () => {
  nextTick(() => {
    refWrapper?.value?.focus();
  });
  if (props.keyboard && !globalKeyDownListener) {
    globalKeyDownListener = true;
    on(container.value, 'keydown', handleKeyDown);
  }
};

const removeGlobalKeyDownListener = () => {
  if (globalKeyDownListener) {
    globalKeyDownListener = false;
    off(container.value, 'keydown', handleKeyDown);
  }
};

watch([src, mergedVisible], () => {
  if (mergedVisible.value) {
    reset();
    setLoadStatus('loading');
    addGlobalKeyDownListener();
  } else {
    removeGlobalKeyDownListener();
  }
});

const close = () => {
  if (mergedVisible.value) {
    emit('close');
    emit('update:visible', false);
    setVisible(false);
  }
};

const onCloseClick = () => {
  close();
};

const onMaskClick = (e: MouseEvent) => {
  refWrapper?.value?.focus();
  if (maskClosable.value && e.target === e.currentTarget) {
    close();
  }
};

const changeScale = (newScale: number) => {
  if (scale.value !== newScale) {
    scale.value = newScale;
    showScaleValue();
  }
};

const fullScreen = () => {
  const wrapperRect = refWrapper.value.getBoundingClientRect();
  const imgRect = refImage.value.getBoundingClientRect();
  const newHeightScale = wrapperRect.height / (imgRect.height / scale.value);
  const newWidthScale = wrapperRect.width / (imgRect.width / scale.value);
  const newScale = Math.max(newHeightScale, newWidthScale);
  changeScale(newScale);
};

const handleRotate = (direction: RotateDirectionTypes) => {
  const isClockwise = direction === 'clockwise';
  const newRotate = isClockwise
    ? (rotate.value + ROTATE_STEP) % 360
    : rotate.value === 0
    ? 360 - ROTATE_STEP
    : rotate.value - ROTATE_STEP;
  rotate.value = newRotate;
};

const handleScale = (action: ScaleActionTypes) => {
  const newScale = getScale(scale.value, action);
  changeScale(newScale);
};

const onImgLoad = () => {
  setLoadStatus('loaded');
};

const onImgError = () => {
  setLoadStatus('error');
};

const actions = computed(() => {
  const actionsTypeList = [
    /** 满屏 */
    {
      key: 'fullScreen',
      name: t('tu.image.fullScreen'),
      content: () => h(FullScreen),
      onClick: () => fullScreen()
    },
    /** 顺时针旋转 */
    {
      key: 'rotateRight',
      name: t('tu.image.rotateRight'),
      content: () => h(RefreshRight),
      onClick: () => handleRotate('clockwise')
    },
    /** 逆时针旋转 */
    {
      key: 'rotateLeft',
      name: t('tu.image.rotateLeft'),
      content: () => h(RefreshLeft),
      onClick: () => handleRotate('counterclockwise')
    },
    /** 放大 */
    {
      key: 'zoomIn',
      name: t('tu.image.zoomIn'),
      content: () => h(ZoomIn),
      onClick: () => handleScale('zoomIn'),
      disabled: scale.value === maxScale
    },
    /** 缩小 */
    {
      key: 'zoomOut',
      name: t('tu.image.zoomOut'),
      content: () => h(ZoomOut),
      onClick: () => handleScale('zoomOut'),
      disabled: scale.value === minScale
    },
    /** 缩放到100% */
    {
      key: 'originalSize',
      name: t('tu.image.originalSize'),
      content: () => h(Refresh),
      onClick: () => changeScale(1)
    }
  ];
  return actionsTypeList;
});

onBeforeUnmount(() => {
  removeGlobalKeyDownListener();
});
</script>: { parentElement: { style: { display: string; }; }; }: { parentElement: { style: { display: string; }; }; }
