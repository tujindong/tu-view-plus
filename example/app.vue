
<template>
  <div>
    <tu-tooltip
      content="This is tooltip content"
      @popup-visible-change="popupVisibleChange"
    >
      <tu-button>Mouse over to display tooltip</tu-button>
    </tu-tooltip>
    <tu-button loading :loading-icon="Tools"> 加载中 </tu-button>
  </div>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue';
import { useToggle } from '@vueuse/core';
import { Tools } from '@tu-view-plus/icons-vue';

const [visible, toggleVisible] = useToggle();

const radio = ref(1);

function popupVisibleChange(e: any) {
  console.log('123', e);
}
</script>
<style lang="scss">
</style>
  