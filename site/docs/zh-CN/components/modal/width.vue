<template>
  <tu-button @click="visible = true">开启模态框</tu-button>

  <tu-modal width="auto" v-model:visible="visible" @cancel="visible = false">
    <template #title> 行路难 </template>
    <div class="demo-modal-content">
      金樽清酒斗十千，玉盘珍羞直万钱。 停杯投箸不能食，拔剑四顾心茫然。
      欲渡黄河冰塞川，将登太行雪满山。 闲来垂钓碧溪上，忽复乘舟梦日边。
    </div>
  </tu-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref(false);
</script >