<template>
  <tu-avatar
    :style="{
      marginRight: '24px',
      verticalAlign: 'middle',
      backgroundColor: '#14a9f8'
    }"
  >
    {{ text }}
  </tu-avatar>
  <tu-button type="text" @click="onClick" :style="{ verticalAlign: 'middle' }">
    Change
  </tu-button>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
const list = ['B', 'tu', 'view', 'Tom', 'AD'];
const index = ref(0);
const text = computed(() => list[index.value]);

const onClick = () => {
  index.value = index.value >= list.length - 1 ? 0 : index.value + 1;
};
</script>

<style lang="scss" scoped></style>
