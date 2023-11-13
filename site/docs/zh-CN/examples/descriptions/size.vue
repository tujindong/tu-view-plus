<template>
  <tu-radio-group v-model="size">
    <tu-radio label="mini">超小</tu-radio>
    <tu-radio label="small">较小</tu-radio>
    <tu-radio label="medium">默认</tu-radio>
    <tu-radio label="large">较大</tu-radio>
  </tu-radio-group>

  <tu-descriptions title="有边框" :column="3" :size="size" border>
    <template #extra>
      <tu-button type="primary" :size="size">操作</tu-button>
    </template>

    <tu-descriptions-item>
      <template #label>
        <div class="cell-item">
          <tu-icon>
            <Sunny />
          </tu-icon>
          姓名
        </div>
      </template>
      汤姆
    </tu-descriptions-item>

    <tu-descriptions-item label="手机号">18100000000</tu-descriptions-item>
    <tu-descriptions-item label="地点">合肥</tu-descriptions-item>
    <tu-descriptions-item label="备注">
      <tu-tag :size="size">学校</tu-tag>
    </tu-descriptions-item>
    <tu-descriptions-item label="住址">安徽省合肥市高新区</tu-descriptions-item>
  </tu-descriptions>

  <tu-descriptions title="无边框" :column="3" :size="size">
    <template #extra>
      <tu-button type="primary" :size="size">操作</tu-button>
    </template>

    <tu-descriptions-item>
      <template #label>
        <div class="cell-item">
          <tu-icon>
            <Sunny />
          </tu-icon>
          姓名
        </div>
      </template>
      汤姆
    </tu-descriptions-item>

    <tu-descriptions-item label="手机号">18100000000</tu-descriptions-item>
    <tu-descriptions-item label="地点">合肥</tu-descriptions-item>
    <tu-descriptions-item label="备注">
      <tu-tag :size="size">学校</tu-tag>
    </tu-descriptions-item>
    <tu-descriptions-item label="住址">安徽省合肥市高新区</tu-descriptions-item>
  </tu-descriptions>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Sunny } from '@tu-view-plus/icons-vue';

const size = ref('medium');
</script>

<style scoped>
.tu-descriptions {
  margin-top: 20px;
}

.cell-item {
  display: inline-block;
  align-items: center;
}
</style>
