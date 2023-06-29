
<template>
  <div>
    <tu-tooltip
      content="This is tooltip content"
      @popup-visible-change="popupVisibleChange"
    >
      <tu-button>Mouse over to display tooltip</tu-button>
    </tu-tooltip>
  </div>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue';
import { useToggle } from '@vueuse/core';

const [visible, toggleVisible] = useToggle();

const radio = ref(1);

function popupVisibleChange(e: any) {
  console.log('123', e);
}
</script>
<style lang="scss">
</style>
  