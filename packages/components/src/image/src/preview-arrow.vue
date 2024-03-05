<template>
  <div :class="nsImage.e('preview-arrow')">
    <div
      :class="leftIconClasses"
      @click="
        (e) => {
          e.preventDefault();
          onPrev && onPrev();
        }
      "
    >
      <tu-icon>
        <ArrowLeft />
      </tu-icon>
    </div>
    <div
      :class="rightIconClasses"
      @click="
        (e) => {
          e.preventDefault();
          onNext && onNext();
        }
      "
    >
      <tu-icon>
        <ArrowRight />
      </tu-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, computed } from 'vue';
import { previewArrowProps } from './preview-arrow';
import { useNamespace } from '@tu-view-plus/hooks';
import { TuIcon } from '../../icon';
import { ArrowLeft, ArrowRight } from '@tu-view-plus/icons-vue';

defineOptions({
  name: 'TuPreviewArrow'
});

const props = defineProps(previewArrowProps);

const nsImage = useNamespace('image');

const leftIconClasses = computed(() => ({
  [nsImage.e('preview-arrow-left')]: true,
  [nsImage.em('preview-arrow-left', 'disabled')]: !props.onPrev
}));

const rightIconClasses = computed(() => ({
  [nsImage.e('preview-arrow-right')]: true,
  [nsImage.em('preview-arrow-right', 'disabled')]: !props.onNext
}));
</script>
