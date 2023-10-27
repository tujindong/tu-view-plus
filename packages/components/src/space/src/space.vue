<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { spaceProps } from './space';
import '../style/space.scss';

defineOptions({
  name: 'TuSpace'
});

const props = defineProps(spaceProps);
</script>
