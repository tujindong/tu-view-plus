<template>
  <tu-carousel :default-current="2" :style="{ height: '240px' }">
    <tu-carousel-item v-for="item in 3">
      <h3>{{ item }}</h3>
    </tu-carousel-item>
  </tu-carousel>
</template>

<script lang="ts" setup></script>

<style scoped>
.tu-carousel__item:first-child {
  background-color: #875c00;
}

.tu-carousel__item:nth-child(2n) {
  background-color: #035880;
}

.tu-carousel__item:last-child {
  background-color: #2a3c85;
}

.tu-carousel h3 {
  text-align: center;
  line-height: 240px;
  margin-top: 0;
  color: #fff;
}
</style>
