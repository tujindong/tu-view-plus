<template>
  <div style="width: 100%">
    <br />
    <br />
    <tu-configProvider :locale="en">
      <tu-button>provider按钮</tu-button>
    </tu-configProvider>

    <br />
    <br />
    <tu-button @click="visible = true">message</tu-button>
    <br />
    <br />

    <tu-popover title="Title">
      <tu-button style="margin-left: 200px">Hover</tu-button>
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </tu-popover>

    <br />
    <br />
    <div
      :style="{
        position: 'relative',
        width: '440px',
        height: '280px',
        marginLeft: '100px'
      }"
    >
      <tu-tooltip :default-popup-visible="true" content="123" position="tl">
        <tu-button style="position: absolute; top: 0; left: 90px">
          上左
        </tu-button>
      </tu-tooltip>
      <tu-tooltip :default-popup-visible="true" content="123" position="top">
        <tu-button style="position: absolute; top: 0; left: 180px">
          上方
        </tu-button>
      </tu-tooltip>
      <tu-tooltip :default-popup-visible="true" content="123" position="tr">
        <tu-button style="position: absolute; top: 0; left: 280px">
          上右
        </tu-button>
      </tu-tooltip>
      <tu-tooltip :default-popup-visible="true" content="123" position="bl">
        <tu-button style="position: absolute; top: 240px; left: 80px">
          下左
        </tu-button>
      </tu-tooltip>
      <tu-tooltip :default-popup-visible="true" content="123" position="bottom">
        <tu-button style="position: absolute; top: 240px; left: 180px">
          下方
        </tu-button>
      </tu-tooltip>
      <tu-tooltip :default-popup-visible="true" content="123" position="br">
        <tu-button style="position: absolute; top: 240px; left: 280px">
          下右
        </tu-button>
      </tu-tooltip>
      <tu-tooltip :default-popup-visible="true" content="123" position="lt">
        <tu-button style="position: absolute; top: 60px; left: 10px">
          左上
        </tu-button>
      </tu-tooltip>
      <tu-tooltip :default-popup-visible="true" content="123" position="left">
        <tu-button style="position: absolute; top: 120px; left: 10px">
          左方
        </tu-button>
      </tu-tooltip>
      <tu-tooltip :default-popup-visible="true" content="123" position="lb">
        <tu-button style="position: absolute; top: 180px; left: 10px">
          左下
        </tu-button>
      </tu-tooltip>
      <tu-tooltip :default-popup-visible="true" content="123" position="rt">
        <tu-button style="position: absolute; top: 60px; left: 350px">
          右上
        </tu-button>
      </tu-tooltip>
      <tu-tooltip :default-popup-visible="true" content="123" position="right">
        <tu-button style="position: absolute; top: 120px; left: 350px">
          右方
        </tu-button>
      </tu-tooltip>
      <tu-tooltip :default-popup-visible="true" content="123" position="rb">
        <tu-button style="position: absolute; top: 180px; left: 350px">
          右下
        </tu-button>
      </tu-tooltip>
    </div>

    <br />
    <br />

    <tu-select placeholder="请输入">
      <tu-option>北京</tu-option>
      <tu-option>上海</tu-option>
      <tu-option>广州</tu-option>
      <tu-option disabled>禁用</tu-option>
    </tu-select>

    <br />
    <br />
    <div style="height: 800px"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, getCurrentInstance } from 'vue';
import { useToggle } from '@vueuse/core';
import { TuMessage, TuModalBox } from '@tu-view-plus/components';
import zhCn from 'tu-view-plus/locale/lang/zh-cn.mjs';
import en from 'tu-view-plus/locale/lang/en.mjs';
import { Search, Close, Tools } from '@tu-view-plus/icons-vue';

const vm = getCurrentInstance()!;

const { $message, $modal } = vm.appContext.config.globalProperties;

const visible = ref(false);

console.log('vm.appContext.config', vm.appContext.config);

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
