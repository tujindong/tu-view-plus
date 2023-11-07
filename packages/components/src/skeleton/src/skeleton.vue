<template>
  <div :class="classes" v-if="props.loading">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, provide, watch } from 'vue';
import { skeletonProps } from './skeleton';
import { useNamespace } from '@tu-view-plus/hooks';
import TuSkeletonLine from './skeleton-line.vue';
import '../style/skeleton.scss';

defineOptions({
  name: 'TuSkeleton'
});

const props = defineProps(skeletonProps);

const nsSnsSkeleton = useNamespace('skeleton');

const classes = computed(() => ({
  [nsSnsSkeleton.b()]: true,
  [nsSnsSkeleton.is('animation')]: props.animation
}));
</script>
