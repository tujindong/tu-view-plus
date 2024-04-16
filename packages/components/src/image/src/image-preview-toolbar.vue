<template>
  <div :class="nsImage.e('preview-toolbar')">
    <tu-icon size="40">
      <ImagePreviewAction
        v-for="item in resultActions"
        :key="item.key"
        :name="item.name"
        :disabled="item.disabled"
        @click="item.onClick"
      >
        <RenderFunction :render-func="item.content" />
      </ImagePreviewAction>
    </tu-icon>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, computed } from 'vue';
import { imagePreviewToolbarProps } from './image-preview-toolbar';
import { useNamespace } from '@tu-view-plus/hooks';
import { RenderFunction } from '@tu-view-plus/constants';
import ImagePreviewAction from './image-preview-action.vue';
import { ActionType } from './interface';
import { TuIcon } from '../../icon';

defineOptions({
  name: 'TuImagePreviewToolbar'
});

const props = defineProps(imagePreviewToolbarProps);

const nsImage = useNamespace('image');

const { actions, actionsLayout } = toRefs(props);

const resultActions = computed(() => {
  // 根据 layout 过滤
  const actionsLayoutSet = new Set(actionsLayout.value);
  const filterWithLayout = (item: ActionType) => actionsLayoutSet.has(item.key);
  const filteredActions = actions.value.filter(filterWithLayout);

  // 根据 layout 排序
  return filteredActions.sort((pre, cur) => {
    const preIndex = actionsLayout.value.indexOf(pre.key);
    const curIndex = actionsLayout.value.indexOf(cur.key);
    return preIndex > curIndex ? 1 : -1;
  });
});
</script>
