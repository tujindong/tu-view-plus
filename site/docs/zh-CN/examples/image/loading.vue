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
    show-loader
  />
  <tu-image
    width="200"
    height="200"
    :src="`https://cdn.pixabay.com/photo/2020/04/04/03/42/paperwork-5000691_640.png?timestamp=${timestamp}`"
    style="margin-left: 67px"
  >
    <template #loader>
      <div class="loader-animate" />
    </template>
  </tu-image>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const timestamp = ref();
</script>
<style scoped>
.loader-animate {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(128, 128, 128, 0.18) 25%,
    rgba(125, 125, 125, 0.1) 37%,
    rgba(128, 128, 128, 0.18) 63%
  );

  background-size: 400% 100%;
  animation: loop-circle 1.5s cubic-bezier(0.34, 0.69, 0.1, 1) infinite;
}
@keyframes loop-circle {
  0% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0 50%;
  }
}
</style>
