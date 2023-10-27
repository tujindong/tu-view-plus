<template>
  <tu-checkbox-group v-model="custom">
    <tu-checkbox label="hideHeader">隐藏头部</tu-checkbox>
    <tu-checkbox label="hideFooter">隐藏尾部</tu-checkbox>
    <tu-checkbox label="hideCancel">隐藏取消按钮</tu-checkbox>
  </tu-checkbox-group>

  <br />
  <br />

  <tu-button @click="visible = true">开启抽屉</tu-button>

  <tu-drawer
    v-model:visible="visible"
    :header="!custom.includes('hideHeader')"
    :footer="!custom.includes('hideFooter')"
    :hide-cancel="custom.includes('hideCancel')"
    @ok="visible = false"
    @cancel="visible = false"
  >
    <template #title> 送元二使安西 </template>
    <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
    <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
  </tu-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref(false);
const custom = ref([] as string[]);
</script>