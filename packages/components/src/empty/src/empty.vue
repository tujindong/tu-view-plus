<template>
  <div><slot /> 空状态</div>
</template>

<script lang="ts" setup>
import { emptyProps } from './empty';
import '../style/empty.scss';

defineOptions({
  name: 'TuEmpty'
});

const props = defineProps(emptyProps);
</script>
