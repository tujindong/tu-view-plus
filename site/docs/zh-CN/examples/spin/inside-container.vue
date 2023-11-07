<template>
  <tu-row :gutter="20">
    <tu-col :span="12">
      <tu-spin :loading="loading">
        <tu-card effect="up">
          <p>泉眼无声惜细流，树阴照水爱晴柔。</p>
          <p>小荷才露尖尖角，早有蜻蜓立上头。</p>
        </tu-card>
      </tu-spin>
    </tu-col>
    <tu-col :span="12">
      <tu-spin :loading="loading" dot>
        <tu-card effect="up">
          <p>泉眼无声惜细流，树阴照水爱晴柔。</p>
          <p>小荷才露尖尖角，早有蜻蜓立上头。</p>
        </tu-card>
      </tu-spin>
    </tu-col>
  </tu-row>
  <tu-switch v-model="loading" class="mt-2"></tu-switch>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const loading = ref(false);
</script>

<style scoped></style>
