<template>
  <div>
    <transition></transition>
  </div>
</template>

<script lang="ts" setup>
import { messageProps } from './message';
import { useNamespace } from '@tu-view-plus/hooks';
import '../style/message.scss';

defineOptions({
  name: 'TuMessage'
});

const props = defineProps(messageProps);

const {} = useNamespace('');
</script>
