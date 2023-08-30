<template>
  <div style="width: 100%">
    <div style="width: 100%; background: #fff">1111111111111111</div>
    <tu-trigger trigger="click" :unmount-on-close="false">
      <tu-button>点击</tu-button>
      <template #content>
        <div class="demo-trigger-basic">这是内容</div>
      </template>
    </tu-trigger>

    <br />
    <br />
    <tu-configProvider :locale="en">
      <tu-button>provider按钮</tu-button>
    </tu-configProvider>

    <tu-button @click="openIcon">打开图标</tu-button>

    <tu-button type="primary">打开图标</tu-button>

    <br />
    <br />
    <tu-virtual-list :data="vData">
      <template #item="scope">
        <div>{{ scope.index }}</div>
      </template>
    </tu-virtual-list>

    <br />
    <br />

    <tu-button @click="openModal('mini')">超小模态框</tu-button>
    <tu-button @click="openModal('small')">小型模态框</tu-button>
    <tu-button @click="openModal('medium')">默认模态框</tu-button>
    <tu-button @click="openModal('large')">大型模态框</tu-button>

    <tu-modal v-model:visible="visible" :size="size" @cancel="visible = false">
      <template #title> 送元二使安西 </template>
      <div class="demo-modal-content">
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
      </div>
      <template #footer> 送元二使安西 </template>
    </tu-modal>

    <div style="height: 800px"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, getCurrentInstance } from 'vue';
import { useToggle } from '@vueuse/core';
import { TuMessage, TuModal } from '@tu-view-plus/components';
import zhCn from 'tu-view-plus/locale/lang/zh-cn.mjs';
import en from 'tu-view-plus/locale/lang/en.mjs';
import { Search, Close, Tools } from '@tu-view-plus/icons-vue';

const vm = getCurrentInstance()!;

const { $message, $modal } = vm.appContext.config.globalProperties;

let vData: any = [];

for (let i = 0; i < 100000; i++) {
  vData.push({ index: i });
}

const visible = ref(false);
const size = ref();

const openModal = (modalSize: string) => {
  size.value = modalSize;
  visible.value = true;
};

onMounted(() => {});
</script>
<style lang="scss">
.demo-trigger-basic {
  display: flex;
  height: 80px;
  width: 180px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 2px 6px 0 #cccccc;
  font-size: 14px;
}
.demo-button-row {
  align-items: baseline;
}
.demo-input-row {
  align-items: baseline;
}
</style>
