<template>
  <div>
    <tu-button
      type="primary"
      @click="
        () => {
          timestamp = Date.now();
        }
      "
      style="margin-bottom: 20px"
    >
      重新加载
    </tu-button>
  </div>
  <tu-image
    width="200"
    height="200"
    :src="`https://cdn.pixabay.com/photo/2020/04/04/03/42/paperwork-5000691_640.png?timestamp=${timestamp}`"
  >
    <template #loader>
      <img
        width="200"
        src="https://cdn.pixabay.com/photo/2020/04/04/03/42/paperwork-5000691_640.png"
        style="filter: blur(2px)"
      />
    </template>
  </tu-image>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const timestamp = ref();
</script>
