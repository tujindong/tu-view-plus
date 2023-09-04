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

    <tu-drawer
      :width="340"
      :visible="visible"
      @ok="visible = false"
      @cancel="visible = false"
    >
      <template #title> 送元二使安西 </template>
      <div class="demo-modal-content">
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
        <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
      </div>
    </tu-drawer>

    <br />
    <br />

    <tu-card>
      <template #extra>
        <div class="header-extra">extra</div>
      </template>
    </tu-card>

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
