<template>
  <div>
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
    <div>13333333</div>
    <br />
    <br />
    <br />
    <br />
    <tu-spin tip="1233" :loading="true">11111</tu-spin>

    <br />
    <br />
    <tu-spin :loading="true" tip="456"></tu-spin>
    <br />
    <br />
    <tu-spin :loading="true" tip="这是提示tips" dot>
      <div style="width: 100%; height: 100px">
        ByteDance's core product, Toutiao ('Headlines'), is a content platform
        in China and around the world. Toutiao started out as a news
        recommendation engine and gradually evolved into a platform delivering
        content in various formats.
      </div>
    </tu-spin>
    <br />
    <br />
    <tu-spin :loading="true">
      <template #icon>
        <search />
      </template>
    </tu-spin>
    <br />
    <br />
    <div>dot</div>
    <tu-spin dot :loading="true" />
    <br />
    <br />

    <div>可以复制吗</div>

    <br />
    <div style="margin-bottom: 500px"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useToggle } from '@vueuse/core';
import { TuMessage } from '@tu-view-plus/components';
import zhCn from 'tu-view-plus/locale/lang/zh-cn.mjs';
import en from 'tu-view-plus/locale/lang/en.mjs';
import { Search, Close, Tools } from '@tu-view-plus/icons-vue';

const [visible, toggleVisible] = useToggle();

let vData: any = [];

for (let i = 0; i < 1100000; i++) {
  vData.push({ index: i });
}

const openIcon = () => {
  TuMessage.success({
    message: '并不了解问题',
    icon: Search
  });
};

const value = ref('');

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
