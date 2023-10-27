<template>
  <tu-slider
    class="demo-slider"
    v-model="value"
    :max="max"
    @change="handleSliderChange"
  />
  <tu-scrollbar ref="scrollbarRef" height="260px" always @scroll="scroll">
    <div ref="innerRef">
      <div v-for="item in 20" :key="item" class="demo-scrollbar-item">
        {{ item }}
      </div>
    </div>
  </tu-scrollbar>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { TuScrollbar } from 'tu-view-plus';

const max = ref(0);
const value = ref(0);
const innerRef = ref<HTMLDivElement>();
const scrollbarRef = ref<InstanceType<typeof TuScrollbar>>();

onMounted(() => {
  max.value = innerRef.value!.clientHeight - 240;
});

const handleSliderChange = (value: number) => {
  scrollbarRef.value!.setScrollTop(value);
};

const scroll = ({ scrollTop }: { scrollTop: number }) => {
  value.value = scrollTop;
};
</script>

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
  background: #7693f5;
  color: #465eb8;
}
.demo-slider {
  margin-bottom: 40px;
}
</style>
