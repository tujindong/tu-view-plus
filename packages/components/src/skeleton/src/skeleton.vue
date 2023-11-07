<template>
  <div :class="classes" v-if="props.loading">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { skeletonProps } from './skeleton';
import { useNamespace } from '@tu-view-plus/hooks';
import '../style/skeleton.scss';

defineOptions({
  name: 'TuSkeleton'
});

const props = defineProps(skeletonProps);

const nsSkeleton = useNamespace('skeleton');

const classes = computed(() => ({
  [nsSkeleton.b()]: true,
  [nsSkeleton.is('animation')]: props.animation
}));
</script>
