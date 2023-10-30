<template>
  <tu-collapse>
    <tu-collapse-item title="送元二使安西" name="1">
      <template #extra>
        <tu-icon>
          <Setting />
        </tu-icon>
      </template>
      <p style="line-height: 1">渭城朝雨浥轻尘，客舍青青柳色新。</p>
      <p style="line-height: 1">劝君更尽一杯酒，西出阳关无故人。</p>
    </tu-collapse-item>
    <tu-collapse-item title="送元二使安西" extra="确定" name="2">
      <p style="line-height: 1">渭城朝雨浥轻尘，客舍青青柳色新。</p>
      <p style="line-height: 1">劝君更尽一杯酒，西出阳关无故人。</p>
    </tu-collapse-item>
    <tu-collapse-item title="送元二使安西" name="3">
      <template #extra>
        <tu-button size="small" @click.stop="save">保存</tu-button>
      </template>
      <p style="line-height: 1">渭城朝雨浥轻尘，客舍青青柳色新。</p>
      <p style="line-height: 1">劝君更尽一杯酒，西出阳关无故人。</p>
    </tu-collapse-item>
  </tu-collapse>
</template>

<script lang="ts" setup>
import { Setting } from '@tu-view-plus/icons-vue';

const save = () => {
  console.log('save');
};
</script>
