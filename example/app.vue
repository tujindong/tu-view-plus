
<template>
  <div>
    <tu-trigger
      trigger="click"
      :unmount-on-close="false"
      @popupVisibleChange="popupVisibleChange"
    >
      <tu-button>Click Me</tu-button>
      <template #content>
        <div class="demo-basic">占位文字</div>
      </template>
    </tu-trigger>

    <div style="width: 300px; height: 100px"></div>

    <tu-tooltip content="This is tooltip content">
      <tu-button>Mouse over to display tooltip</tu-button>
    </tu-tooltip>
    <tu-tooltip
      content="This is a two-line tooltip content.This is a two-line tooltip content."
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
  