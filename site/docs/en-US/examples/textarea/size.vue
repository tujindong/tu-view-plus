<template>
  <tu-row :gutter="20" class="demo-input-row">
    <tu-col :span="6">
      <tu-textarea
        v-model="textareaValue1"
        size="mini"
        placeholder="Please input"
      />
    </tu-col>

    <tu-col :span="6">
      <tu-textarea
        v-model="textareaValue2"
        size="small"
        placeholder="Please input"
      />
    </tu-col>

    <tu-col :span="6">
      <tu-textarea v-model="textareaValue3" placeholder="Please input" />
    </tu-col>

    <tu-col :span="6">
      <tu-textarea
        v-model="textareaValue4"
        size="large"
        placeholder="Please input"
      />
    </tu-col>
  </tu-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const textareaValue1 = ref('');
const textareaValue2 = ref('');
const textareaValue3 = ref('');
const textareaValue4 = ref('');
</script>

<style>
.demo-input-row {
  align-items: baseline;
}
</style>
