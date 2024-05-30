<template>
  <tu-scrollbar height="260px">
    <div class="demo-scrollbar-item" v-for="item in 20" :key="item">
      {{ item }}
    </div>
  </tu-scrollbar>
</template>

<style scoped>
.demo-scrollbar-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  margin: 10px;
  text-align: center;
  border-radius: 2px;
  font-size: 14px;
  background: rgba(128, 128, 128, 0.2);
  color: #71757f;
}
</style>
