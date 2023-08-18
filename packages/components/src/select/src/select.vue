<template>
  <div ref="selectRef" v-click-outside:[]="handleClose">
    <tu-trigger ref="triggerRef" trigger="click" :popupVisible="true">
      <template #default> 默认内容 </template>
      <template #content> 弹出框内容 </template>
    </tu-trigger>
  </div>
</template>

<script lang="ts" setup>
import { selectProps, selectEmits } from './select';
import { vClickOutside } from '@tu-view-plus/directives';
import { TuTrigger } from '../../trigger';
import useSelect from './use-select';
import '../style/select.scss';

defineOptions({
  name: 'TuSelect'
});

const props = defineProps(selectProps);
const emit = defineEmits(selectEmits);

const { handleClose } = useSelect(props, emit);
</script>
