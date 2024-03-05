<template>
  <div :class="nsImage.e('footer')">
    <div
      v-if="props.title || props.description"
      :class="nsImage.e('footer-caption')"
    >
      <div
        v-if="props.title"
        :class="nsImage.e('footer-caption-title')"
        :title="props.title"
      >
        {{ props.title }}
      </div>
      <div
        v-if="props.description"
        :class="nsImage.e('footer-caption-description')"
        :title="props.description"
      >
        {{ props.description }}
      </div>
    </div>

    <div v-if="$slots.extra" :class="nsImage.e('extra')">
      <slot name="extra" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { imageFooterProps } from './image-footer';
import { useNamespace } from '@tu-view-plus/hooks';
import '../style/image.scss';

defineOptions({
  name: 'TuImageFooter'
});

const props = defineProps(imageFooterProps);

const nsImage = useNamespace('image');
</script>
