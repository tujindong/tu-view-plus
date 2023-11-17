<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { selectViewProps } from './select-view';
import '../style/select-view.scss';

defineOptions({
  name: 'TuSelectView'
});

const props = defineProps(selectViewProps);
</script>
