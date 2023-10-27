<template>
  <tu-checkbox
    v-model="checkAll"
    :indeterminate="isIndeterminate"
    @change="handleCheckAllChange"
    >全选
  </tu-checkbox>
  <br />
  <tu-checkbox-group v-model="checkedList" @change="handleCheckedChange">
    <tu-checkbox v-for="option in options" :key="option" :label="option">
      {{ option }}
    </tu-checkbox>
  </tu-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const options = ['选项1', '选项2', '选项3', '选项4'];
const checkAll = ref(false);
const isIndeterminate = ref(false);
const checkedList = ref([] as string[]);

const handleCheckAllChange = (val: boolean) => {
  checkedList.value = val ? options : [];
  isIndeterminate.value = false;
};

const handleCheckedChange = (val: string[]) => {
  const checkedCount = val.length;
  checkAll.value = checkedCount === options.length;
  isIndeterminate.value = checkedCount > 0 && checkedCount < options.length;
};
</script>