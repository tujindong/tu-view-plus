<template>
  <tu-row :gutter="20">
    <tu-col :span="12">
      <tu-spin :loading="loading">
        <tu-card effect="up">
          We've always believed that by providing a space where designers can
          share ongoing work not only empowers them to make better products, it
          also helps them grow.
        </tu-card>
      </tu-spin>
    </tu-col>
    <tu-col :span="12">
      <tu-spin :loading="loading" dot>
        <tu-card effect="up">
          We've always believed that by providing a space where designers can
          share ongoing work not only empowers them to make better products, it
          also helps them grow.
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
