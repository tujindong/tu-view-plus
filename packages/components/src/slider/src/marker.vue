<template>
  <div :class="nsSlider.e('marks-text')" :style="style">
    {{ label }}
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { markerProps } from './marker';
import { useNamespace } from '@tu-view-plus/hooks';
import { isString } from '@tu-view-plus/utils';

defineOptions({
  name: 'TuSliderMarker'
});

const props = defineProps(markerProps);

const nsSlider = useNamespace('slider');

const label = computed(() =>
  isString(props.mark) ? props.mark : props.mark!.label
);

const style = computed(() =>
  isString(props.mark) ? undefined : props.mark!.style
);
</script>
