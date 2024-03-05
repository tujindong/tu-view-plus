<template>
  <slot />
  <TuPreview
    in-group
    v-bind="{ ...$attrs, groupArrowProps }"
    :src="currentUrl"
    :visible="mergedVisible"
    :mask-closable="maskClosable"
    :closable="closable"
    :actions-layout="actionsLayout"
    :popup-container="popupContainer"
    :render-to-body="renderToBody"
    @close="onClose"
  >
    <template v-if="$slots.actions" #actions>
      <slot name="actions" :url="currentUrl" />
    </template>
  </TuPreview>
</template>

<script lang="ts" setup>
import { ref, toRefs, computed, reactive, watch, provide } from 'vue';
import { previewGroupProps, previewGroupEmits } from './preview-group';
import { useMergeState } from '@tu-view-plus/hooks';
import { isArray, isUndefined } from '@tu-view-plus/utils';
import TuPreview from './preview.vue';
import { PreviewGroupContext, PreviewGroupInjectionKey } from './constants';

defineOptions({
  name: 'TuPreviewGroup',
  inheritAttrs: false
});

const props = defineProps(previewGroupProps);
const emit = defineEmits(previewGroupEmits);

const { srcList, visible, defaultVisible, current, defaultCurrent, infinite } =
  toRefs(props);

const [mergedVisible, setLocalVisible] = useMergeState(
  defaultVisible.value,
  reactive({
    value: visible
  })
);

const setVisible = (newVisible: boolean) => {
  if (newVisible !== mergedVisible.value) {
    emit('visible-change', newVisible);
    emit('update:visible', newVisible);
    setLocalVisible(newVisible);
  }
};

const propImageUrlMap = computed(
  () =>
    new Map(
      isArray(srcList?.value)
        ? srcList?.value.map((url, index) => [index, { url, canPreview: true }])
        : []
    )
);

const imageUrlMap = ref(new Map(propImageUrlMap.value || []));

const imageIdList = computed(() => Array.from(imageUrlMap.value.keys()));

const imageCount = computed(() => imageIdList.value.length);

const registerImageUrl = (id: number, url: string, canPreview: boolean) => {
  if (!propImageUrlMap.value.has(id))
    imageUrlMap.value.set(id, { url, canPreview });
  return function unRegisterPreviewUrl() {
    if (!propImageUrlMap.value.has(id)) {
      imageUrlMap.value.delete(id);
    }
  };
};

watch(propImageUrlMap, () => {
  imageUrlMap.value = new Map(propImageUrlMap.value || []);
});

const [currentIndex, setLocalCurrentIndex] = useMergeState(
  defaultCurrent.value,
  reactive({
    value: current
  })
);

const setCurrentIndex = (index: number) => {
  if (index !== currentIndex.value) {
    emit('change', index);
    emit('update:current', index);
    setLocalCurrentIndex(index);
  }
};

const currentId = computed(() => imageIdList.value[currentIndex.value]);

const setCurrentId = (nextId: number) => {
  const nextIndex = imageIdList.value.indexOf(nextId);
  if (nextIndex !== currentIndex.value) {
    setCurrentIndex(nextIndex);
  }
};

const currentUrl = computed(() => imageUrlMap.value.get(currentId.value)?.url);

provide<PreviewGroupContext>(
  PreviewGroupInjectionKey,
  reactive({
    registerImageUrl,
    preview: (imageId: number) => {
      console.log('imag', imageId);
      setVisible(true);
      setCurrentId(imageId);
    }
  })
);

const nextIndex = computed(() => {
  const findNext = (start: number, end: number) => {
    for (let i = start; i <= end; i++) {
      const id = imageIdList.value[i];
      if (imageUrlMap.value.get(id)?.canPreview) {
        return i;
      }
    }
    return undefined;
  };

  const next = findNext(currentIndex.value + 1, imageCount.value - 1);
  return isUndefined(next) && infinite.value
    ? findNext(0, currentIndex.value - 1)
    : next;
});

const prevIndex = computed(() => {
  const findPrev = (start: number, end: number) => {
    for (let i = start; i >= end; i--) {
      const id = imageIdList.value[i];
      if (imageUrlMap.value.get(id)?.canPreview) {
        return i;
      }
    }
    return undefined;
  };

  const prev = findPrev(currentIndex.value - 1, 0);
  return isUndefined(prev) && infinite.value
    ? findPrev(imageCount.value - 1, currentIndex.value + 1)
    : prev;
});

const onPrev = computed(() =>
  !isUndefined(prevIndex.value)
    ? () => {
        !isUndefined(prevIndex.value) && setCurrentIndex(prevIndex.value);
      }
    : undefined
);

const onNext = computed(() =>
  !isUndefined(nextIndex.value)
    ? () => {
        !isUndefined(nextIndex.value) && setCurrentIndex(nextIndex.value);
      }
    : undefined
);

const groupArrowProps = reactive({
  onPrev,
  onNext
});

const onClose = () => {
  setVisible(false);
};
</script>
