<template>
  <tu-row :gutter="20">
    <tu-col :span="12">
      <tu-input-number
        placeholder="请输入"
        v-model="num1"
        :min="1"
        :max="10"
        @change="handleChange1"
      />
    </tu-col>
    <tu-col :span="12">
      <tu-input-number
        placeholder="请输入"
        v-model="num2"
        :controls="false"
        @change="handleChange2"
      />
    </tu-col>
  </tu-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const num1 = ref(1);
const num2 = ref();

const handleChange1 = (value: number) => {
  console.log(value);
};

const handleChange2 = (value: number) => {
  console.log(value);
};
</script>