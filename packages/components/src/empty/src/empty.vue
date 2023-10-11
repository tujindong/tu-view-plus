<template>
  <div :class="nsEmpty.b()">
    <div :class="nsEmpty.e('image')" :style="{ width: addUnit(imageSize) }">
      <img v-if="image" :src="image" ondragstart="return false" />
      <slot v-else name="image">
        <empty-image />
      </slot>
    </div>
    <div :class="nsEmpty.e('description')">
      <slot v-if="$slots.description" name="description" />
      <p v-else>{{ description || t('tu.table.emptyText') }}</p>
    </div>
    <div v-if="$slots.default" :class="nsEmpty.e('bottom')">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { emptyProps } from './empty';
import { useNamespace, useLocale } from '@tu-view-plus/hooks';
import { addUnit } from '@tu-view-plus/utils';
import EmptyImage from './empty-image.vue';
import '../style/empty.scss';

defineOptions({
  name: 'TuEmpty'
});

const props = defineProps(emptyProps);

const nsEmpty = useNamespace('empty');

const { t } = useLocale();
</script>
