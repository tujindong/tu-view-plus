<template>
  <div :class="wrapperClasses" :style="wrapperStyles">
    <img
      ref="refImg"
      v-bind="imgProps"
      :class="nsImage.e('img')"
      :style="{ ...sizeStyle, ...fitStyle }"
      :title="title"
      :alt="alt"
      @load="onImgLoaded"
      @error="onImgLoadError"
      @click="onImgClick"
    />
    <div v-if="!isLoaded" :class="nsImage.e('overlay')">
      <slot v-if="isError" name="error">
        <div :class="nsImage.m('error')">
          <div :class="nsImage.e('error-icon')">
            <slot name="error-icon">
              <TuIcon size="60">
                <Picture />
              </TuIcon>
            </slot>
          </div>
          <div v-if="alt || description" :class="nsImage.e('error-alt')">
            {{ alt || description }}
          </div>
        </div>
      </slot>
      <slot v-if="isLoading && (showLoader || $slots.loader)" name="loader">
        <div :class="nsImage.e('loader')">
          <div :class="nsImage.e('loader-spin')">
            <TuIcon>
              <Loading />
            </TuIcon>
            <div :class="nsImage.e('loader-spin-text')">
              {{ t('tu.image.loading') }}
            </div>
          </div>
        </div>
      </slot>
    </div>
    <ImageFooter
      v-if="showFooter"
      :class="footerClass"
      :prefix-cls="nsImage"
      :title="title"
      :description="description"
    >
      <template v-if="$slots.extra" #extra>
        <slot name="extra" />
      </template>
    </ImageFooter>
    <ImagePreview
      v-if="isLoaded && mergePreview"
      v-bind="previewProps"
      :src="src"
      :visible="mergedPreviewVisible"
      :render-to-body="renderToBody"
      @close="onPreviewClose"
    >
      <template #actions>
        <slot name="preview-actions" />
      </template>
    </ImagePreview>
  </div>
</template>
<script lang="ts">
import {
  ref,
  toRefs,
  computed,
  reactive,
  inject,
  CSSProperties,
  useAttrs,
  StyleValue,
  watchEffect,
  defineComponent
} from 'vue';
import { imageProps, imageEmits } from './image';
import { useNamespace, useMergeState, useLocale } from '@tu-view-plus/hooks';
import useImageLoadStatus from '../hooks/use-image-load-status';
import { omit, isBoolean, isServerRendering } from '@tu-view-plus/utils';
import { normalizeImageSizeProp } from '../utils/normalize-image-size-prop';
import { PreviewGroupInjectionKey } from './constants';
import { TuIcon } from '../../icon';
import { Loading, Picture } from '@tu-view-plus/icons-vue';
import ImageFooter from './image-footer.vue';
import ImagePreview from './image-preview.vue';
import '../style/image.scss';

let uuid = 0;

export default defineComponent({
  components: {
    Loading,
    Picture,
    ImageFooter,
    ImagePreview,
    TuIcon
  },

  inheritAttrs: false,

  name: 'TuImage',

  props: imageProps,

  emits: imageEmits,

  setup(props, { attrs, slots, emit }) {
    const { t } = useLocale();

    const nsImage = useNamespace('image');

    const refImg = ref();

    const {
      height,
      width,
      hideFooter,
      title,
      description,
      src,
      footerPosition,
      defaultPreviewVisible,
      previewVisible,
      preview,
      previewProps
    } = toRefs(props);

    const groupContext = inject(PreviewGroupInjectionKey, undefined);

    const { isLoaded, isError, isLoading, setLoadStatus } =
      useImageLoadStatus();

    const sizeStyle = computed(() => ({
      width: normalizeImageSizeProp(width?.value),
      height: normalizeImageSizeProp(height?.value)
    }));

    const fitStyle = computed<CSSProperties>(() => {
      if (props.fit) {
        return { objectFit: props.fit };
      }
      return {};
    });

    const wrapperClasses = computed(() => ({
      [nsImage.b()]: true,
      [nsImage.m('loading')]: isLoading.value,
      [nsImage.m('loading-error')]: isError.value,
      [nsImage.m('with-footer-inner')]:
        isLoaded && showFooter && footerPosition.value === 'inner',
      [nsImage.m('with-footer-outer')]:
        isLoaded && showFooter && footerPosition.value === 'outer',
        ...(attrs.class as Object)
    }));

    const wrapperStyles = computed<StyleValue[]>(() => [
      sizeStyle.value,
      attrs.style as StyleValue
    ]);

    const showFooter = computed(() => {
      if (!(title?.value || description?.value || slots.extra)) {
        return false;
      }
      if (isBoolean(hideFooter.value))
        return !hideFooter.value && isLoaded.value;
      return hideFooter.value === 'never';
    });

    const imgProps = computed(() => omit(attrs, ['class', 'style']));

    const [mergedPreviewVisible, setPreviewVisible] = useMergeState(
      defaultPreviewVisible.value,
      reactive({
        value: previewVisible
      })
    );

    const mergePreview = computed(
      () => !groupContext?.preview && preview.value
    );

    watchEffect(() => {
      if (isServerRendering || !refImg.value) return;
      refImg.value.src = src?.value;
      setLoadStatus('loading');
    });

    const imageId = uuid++;

    watchEffect((onInvalidate) => {
      const unRegister = groupContext?.registerImageUrl?.(
        imageId,
        (previewProps?.value?.src ?? src?.value) || '',
        preview.value
      );
      onInvalidate(() => {
        unRegister?.();
      });
    });

    const onImgLoaded = () => {
      setLoadStatus('loaded');
    };

    const onImgLoadError = () => {
      setLoadStatus('error');
    };

    const onImgClick = () => {
      if (!preview.value) return;
      if (groupContext?.preview) {
        groupContext.preview(imageId);
      } else {
        emit('preview-visible-change', true);
        setPreviewVisible(true);
      }
    };

    const onPreviewClose = () => {
      emit('preview-visible-change', false);
      setPreviewVisible(false);
    };

    return {
      t,
      wrapperClasses,
      wrapperStyles,
      imgProps,
      nsImage,
      sizeStyle,
      fitStyle,
      isLoaded,
      isError,
      isLoading,
      mergedPreviewVisible,
      mergePreview,
      showFooter,
      refImg,
      onImgLoaded,
      onImgLoadError,
      onImgClick,
      onPreviewClose
    };
  }
});
</script>
