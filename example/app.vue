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

    <tu-select v-model="value" class="m-2" placeholder="Select">
      <tu-select-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </tu-select>

    <br />
    <br />
    <tu-button @click="handleClick">Open Modal</tu-button>
    <tu-modal
      v-model:visible="visible"
      messageType="success"
      size="small"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <template #title> Title </template>
      <div>
        You can customize modal body text by the current situation. This modal
        will be closed immediately once you press the OK button.
      </div>
    </tu-modal>

    <br />
    <br />
    <tu-button @click="handleClickFunc">函数调用</tu-button>

    <tu-button type="success" @click="openSuccess">成功消息</tu-button>
    <tu-button type="danger" @click="openError">错误消息</tu-button>
    <tu-button type="warning" @click="openWarning">警告消息</tu-button>
    <tu-button type="info" @click="openInfo">信息消息</tu-button>
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

const openIcon = () => {
  TuMessage.success({
    message: '并不了解问题',
    icon: Search
  });
};

const value = ref('');

const visible = ref(false);

const handleClick = () => {
  visible.value = true;
};

const handleOk = () => {
  visible.value = false;
};

const handleCancel = () => {
  visible.value = false;
};

const handleClickFunc = () => {
  TuModal.info({
    simple: false,
    hideCancel: false,
    title: 'Info Title',
    content: 'This is an nest info message'
  });
};

const options = [
  {
    value: 'Option1',
    label: 'Option1'
  },
  {
    value: 'Option2',
    label: 'Option2'
  },
  {
    value: 'Option3',
    label: 'Option3'
  },
  {
    value: 'Option4',
    label: 'Option4'
  },
  {
    value: 'Option5',
    label: 'Option5'
  }
];

const openError = () => {
  TuModal.error({
    title: '送元二使安西',
    content: '渭城朝雨浥轻尘，客舍青青柳色新。'
  });
};

const openWarning = () => {
  TuModal.warning({
    title: '送元二使安西',
    content: '渭城朝雨浥轻尘，客舍青青柳色新。'
  });
};

const openSuccess = () => {
  TuModal.success({
    title: '送元二使安西',
    content: '渭城朝雨浥轻尘，客舍青青柳色新。'
  });
};

const openInfo = () => {
  TuModal.info({
    title: '送元二使安西',
    content: '渭城朝雨浥轻尘，客舍青青柳色新。'
  });
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
