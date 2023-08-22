<template>
  <tu-trigger
    trigger="click"
    position="bl"
    hide-empty
    prevent-focus
    auto-fit-popup-width
    auto-fit-transform-origin
    animation-name="slide-dynamic-origin"
    :disabled="selectDisabled"
    :popup-offset="4"
    :popup-visible="computedPopupVisible"
    :unmount-on-close="unmountOnClose"
    :click-to-close="!(allowSearch || allowCreate)"
    :popup-container="popupContainer"
    @popup-visible-change="handlePopupVisibleChange"
  >
    <tu-select-view v-bind="attrs" />
    <template #content>
      <div class="demo-trigger-basic">这是内容</div>
      <slot />
    </template>
  </tu-trigger>
</template>

<script lang="ts" setup>
import { toRefs, useAttrs } from 'vue';
import { selectProps, selectEmits } from './select';
import { useTrigger } from '@tu-view-plus/hooks';
import { TuTrigger } from '../../trigger';
import TuSelectView from './select-view.vue';
import useSelect from './use-select';
import { useFormDisabled } from '../../form';
import '../style/select.scss';

defineOptions({
  name: 'TuSelect',
  inheritAttrs: false
});

const props = defineProps(selectProps);
const emit = defineEmits(selectEmits);

const attrs = useAttrs();

const selectDisabled = useFormDisabled();

const { popupVisible } = toRefs(props);

const { computedPopupVisible, handlePopupVisibleChange } = useTrigger({
  popupVisible,
  emit
});

const { handleClose } = useSelect(props, emit);
</script>
