<template>
  <div
    ref="containerRef"
    :class="nsWatermark.b()"
    style="position: relative; overflow: hidden"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  CSSProperties,
  onMounted,
  ref,
  shallowRef,
  toRefs
} from 'vue';
import { watermarkProps } from './watermark';
import { useNamespace, useMutationObserver } from '@tu-view-plus/hooks';
import { isArray } from '@tu-view-plus/utils';
import { styleToString, canvasToGray } from '../utils';
import '../style/watermark.scss';

defineOptions({
  name: 'TuWatermark'
});

const nsWatermark = useNamespace('watermark');
const props = defineProps(watermarkProps);

const { width, height, image, rotate, alpha, grayscale } = toRefs(props);
const ratio = window.devicePixelRatio || 1;
const containerRef = shallowRef<HTMLDivElement>();
const watermarkMap = ref(new Map<HTMLDivElement, HTMLDivElement>());

// Text content and style related
const fontSize = computed(() => props.font?.fontSize ?? 16);
const fontWeight = computed(() => props.font?.fontWeight ?? 'lighter');
const fontStyle = computed(() => props.font?.fontStyle ?? 'normal');
const fontFamily = computed(() => props.font?.fontFamily ?? 'sans-serif');
const color = computed(() => props.font?.color ?? 'rgba(128, 128, 128, 0.18)');
const textAlign = computed(() => props.font?.textAlign ?? 'center');
const contents = computed(() =>
  isArray(props.content) ? props.content : [props.content]
);

// Watermark position related
const gapX = computed(() => props.gap?.[0] ?? 90);
const gapY = computed(() => props.gap?.[1] ?? 90);
const gapXCenter = computed(() => gapX.value / 2);
const gapYCenter = computed(() => gapY.value / 2);
const offsetLeft = computed(() => props.offset?.[0] ?? gapXCenter.value);
const offsetTop = computed(() => props.offset?.[1] ?? gapYCenter.value);
const markStyle = computed(() => {
  const left = offsetLeft.value - gapXCenter.value;
  const top = offsetTop.value - gapYCenter.value;
  return {
    position: 'absolute',
    left: left > 0 ? `${left}px` : 0,
    top: top > 0 ? `${top}px` : 0,
    width: left > 0 ? `calc(100% - ${left}px)` : '100%',
    height: top > 0 ? `calc(100% - ${top}px)` : '100%',
    pointerEvents: 'none',
    backgroundRepeat: props.repeat ? 'repeat' : 'no-repeat',
    backgroundPosition: `${left > 0 ? 0 : left}px ${top > 0 ? 0 : top}px`,
    zIndex: props.zIndex ?? 6
  } as CSSProperties;
});
const isStaggered = computed(() => props.repeat && props.staggered);

const appendWatermark = (base64: string, width: number) => {
  if (containerRef.value) {
    const watermarkEle = watermarkMap.value.get(containerRef.value);

    if (watermarkEle) {
      if (containerRef.value.contains(watermarkEle)) {
        containerRef.value.removeChild(watermarkEle);
      }
      watermarkMap.value.delete(containerRef.value);
    }
    const newWatermarkEle = document.createElement('div');
    newWatermarkEle.setAttribute(
      'style',
      styleToString({
        ...markStyle.value,
        backgroundImage: `url('${base64}')`,
        backgroundSize: `${width}px`
      })
    );
    containerRef.value?.append(newWatermarkEle);
    watermarkMap.value.set(containerRef.value, newWatermarkEle);
  }
};

const getMarkSize = (ctx: CanvasRenderingContext2D) => {
  let defaultWidth = 120;
  let defaultHeight = 28;
  if (!image.value && ctx.measureText) {
    ctx.font = `${fontSize.value}px ${fontFamily.value}`;
    const widths = contents.value.map((item) => ctx.measureText(item!).width);
    defaultWidth = Math.ceil(Math.max(...widths));
    defaultHeight =
      fontSize.value * contents.value.length + (contents.value.length - 1) * 3;
  }
  return [width.value ?? defaultWidth, height.value ?? defaultHeight] as const;
};

const renderWatermark = () => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const [markWidth, markHeight] = getMarkSize(ctx);
  const realMarkWidth = markWidth * ratio;
  const realMarkHeight = markHeight * ratio;
  const canvasWidth = (gapX.value + markWidth) * ratio;
  const canvasHeight = (gapY.value + markHeight) * ratio;
  const drawX = (gapX.value / 2) * ratio;
  const drawY = (gapY.value / 2) * ratio;
  const rotateX = canvasWidth / 2;
  const rotateY = canvasHeight / 2;
  const baseSize = isStaggered.value ? 2 : 1;
  const fillWidth = (gapX.value + markWidth) * baseSize;

  canvas.width = canvasWidth * baseSize;
  canvas.height = canvasHeight * baseSize;
  ctx.globalAlpha = alpha.value;
  ctx.save();
  ctx.translate(rotateX, rotateY);
  ctx.rotate((Math.PI / 180) * rotate.value);
  ctx.translate(-rotateX, -rotateY);

  const drawImage = () => {
    ctx.restore();
    if (isStaggered.value) {
      ctx.drawImage(
        canvas,
        0,
        0,
        canvasWidth,
        canvasHeight,
        canvasWidth,
        canvasHeight,
        canvasWidth,
        canvasHeight
      );
    }
    grayscale.value && canvasToGray(canvas);
    appendWatermark(canvas.toDataURL(), fillWidth);
    console.log('canvas.toDataURL()', canvas.toDataURL());
  };

  if (image.value) {
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, drawX, drawY, realMarkWidth, realMarkHeight);
      drawImage();
    };
    img.crossOrigin = 'anonymous';
    img.referrerPolicy = 'no-referrer';
    img.src = image.value;
  } else {
    const mergedFontSize = Number(fontSize.value) * ratio;
    ctx.font = `${fontStyle.value} normal ${fontWeight.value} ${mergedFontSize}px/${markHeight}px ${fontFamily.value}`;
    ctx.fillStyle = color.value;
    ctx.textAlign = textAlign.value;
    ctx.textBaseline = 'top';
    ctx.translate(realMarkWidth / 2, 0);
    contents.value?.forEach((item, index) => {
      ctx.fillText(
        item ?? '',
        drawX,
        drawY + index * (mergedFontSize + 3 * ratio)
      );
    });
    drawImage();
  }
};

const isWatermarkEle = (ele: any) =>
  Array.from(watermarkMap.value.values()).includes(ele);

const handleMutations = (mutations: MutationRecord[]) => {
  if (!props.antiTamper) return;
  for (const mutation of mutations) {
    const isRemoved = Array.from(mutation.removedNodes).some((node) =>
      isWatermarkEle(node)
    );
    const isModified =
      mutation.type === 'attributes' && isWatermarkEle(mutation.target);

    if (isRemoved || isModified) {
      renderWatermark();
      break;
    }
  }
};

onMounted(() => {
  renderWatermark();
  useMutationObserver(containerRef.value, handleMutations, {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true
  });
});
</script>
