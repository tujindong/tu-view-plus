<template>
  <div>
    triggers
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { triggerProps } from './trigger';
import '../style/trigger.scss';
import { useFirstElement } from '@tu-view-plus/hooks';

defineOptions({
  name: 'TuTrigger'
});

const props = defineProps(triggerProps);

const { children, firstElement } = useFirstElement;
</script>
