<template>
  <div>
    <empty-image />
  </div>
</template>

<script lang="ts" setup>
import { emptyProps } from './empty';
import EmptyImage from './empty-image.vue';
import '../style/empty.scss';

defineOptions({
  name: 'TuEmpty'
});

const props = defineProps(emptyProps);
</script>
