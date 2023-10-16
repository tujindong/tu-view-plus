<template>
  <div>
    <tu-row :style="{ marginBottom: '24px' }">
      <tu-radio-group @change="handleLabelPositionChange" v-model="position">
        <tu-radio label="same">同侧</tu-radio>
        <tu-radio label="relative">交替</tu-radio>
      </tu-radio-group>
    </tu-row>

    <tu-timeline mode="left" :labelPosition="position">
      <tu-timeline-item label="2023-09-30" dotColor="#52C419">
        第一节点
      </tu-timeline-item>
      <tu-timeline-item
        label="2023-10-01"
        dotColor="#F5222D"
        labelPosition="same"
      >
        第二节点
      </tu-timeline-item>
      <tu-timeline-item label="2023-10-02" position="bottom">
        第三节点
      </tu-timeline-item>
    </tu-timeline>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const position = ref('same');

const handleLabelPositionChange = (_pos: string) => {
  position.value = _pos;
};

</script>

