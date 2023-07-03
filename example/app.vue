<template>
  <div>
    <tu-tooltip
      content="This is tooltip content"
      @popup-visible-change="popupVisibleChange"
    >
      <tu-button>Mouse over to display tooltip</tu-button>
    </tu-tooltip>
    <tu-button loading :loading-icon="Tools"> 加载中 </tu-button>

    <tu-radio v-model="radio" :label="1" type="border">选项1</tu-radio>

    <br />

    <tu-radio-group v-model="radio" textColor="red">
      <tu-radio :label="1">选项1</tu-radio>
      <tu-radio :label="2">选项2</tu-radio>
      <tu-radio :label="3">选项3</tu-radio>
    </tu-radio-group>

    <br />
    <br />
    <tu-icon size="26" loading>
      <Tools />
    </tu-icon>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useToggle } from '@vueuse/core';
import { Tools, Search } from '@tu-view-plus/icons-vue';

const [visible, toggleVisible] = useToggle();

const radio = ref(1);

function popupVisibleChange(e: any) {
  console.log('123', e);
}
</script>
<style lang="scss"></style>
