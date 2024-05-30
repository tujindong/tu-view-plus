<template>
  <tu-scrollbar>
    <div class="demo-scrollbar-content">
      <div v-for="item in 50" :key="item" class="demo-scrollbar-item">
        {{ item }}
      </div>
    </div>
  </tu-scrollbar>
</template>

<style scoped>
.demo-scrollbar-content {
  display: flex;
}
.demo-scrollbar-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
  margin: 10px;
  text-align: center;
  border-radius: 2px;
  font-size: 14px;
  background: rgba(128, 128, 128, 0.2);
  color: #71757f;
}
</style>
