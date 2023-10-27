<template>
  <div class="demo-drawer-container" id="parentNode">
    <tu-button @click="visible = true">开启抽屉</tu-button>
  </div>

  <tu-drawer
    v-model:visible="visible"
    popup-container="#parentNode"
    size="small"
    @ok="visible = false"
    @cancel="visible = false"
  >
    <template #title> 行路难 </template>
    <p>金樽清酒斗十千，玉盘珍羞直万钱。</p>
    <p>停杯投箸不能食，拔剑四顾心茫然。</p>
    <p>欲渡黄河冰塞川，将登太行雪满山。</p>
    <p>闲来垂钓碧溪上，忽复乘舟梦日边。</p>
  </tu-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref(false);
</script>

<style scoped>
.demo-drawer-container {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 240px;
  box-shadow: 0px 0px 6px var(--vp-c-divider);
}
</style>