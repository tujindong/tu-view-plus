<template>
  <tu-radio-group v-model="size">
    <tu-radio label="mini">Mini</tu-radio>
    <tu-radio label="small">Small</tu-radio>
    <tu-radio label="medium">Medium</tu-radio>
    <tu-radio label="large">Large</tu-radio>
  </tu-radio-group>

  <tu-descriptions title="With border" :column="3" :size="size" border>
    <template #extra>
      <tu-button type="primary" :size="size">Operation</tu-button>
    </template>

    <tu-descriptions-item>
      <template #label>
        <div class="cell-item">
          <tu-icon>
            <Sunny />
          </tu-icon>
          Username
        </div>
      </template>
      Tom
    </tu-descriptions-item>

    <tu-descriptions-item label="Telephone">18100000000</tu-descriptions-item>
    <tu-descriptions-item label="Place">Hefei</tu-descriptions-item>
    <tu-descriptions-item label="Remarks">
      <tu-tag :size="size">School</tu-tag>
    </tu-descriptions-item>
    <tu-descriptions-item label="Address">
      High tech District, Hefei, Anhui Province
    </tu-descriptions-item>
  </tu-descriptions>

  <tu-descriptions title="Without border" :column="3" :size="size">
    <template #extra>
      <tu-button type="primary" :size="size">Operation</tu-button>
    </template>

    <tu-descriptions-item>
      <template #label>
        <div class="cell-item">
          <tu-icon>
            <Sunny />
          </tu-icon>
          Username
        </div>
      </template>
      Tom
    </tu-descriptions-item>

    <tu-descriptions-item label="Telephone">18100000000</tu-descriptions-item>
    <tu-descriptions-item label="Place">Hefei</tu-descriptions-item>
    <tu-descriptions-item label="Remarks">
      <tu-tag :size="size">School</tu-tag>
    </tu-descriptions-item>
    <tu-descriptions-item label="Address">
      High tech District, Hefei, Anhui Province
    </tu-descriptions-item>
  </tu-descriptions>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Sunny } from '@tu-view-plus/icons-vue';

const size = ref('medium');

</script>

<style scoped>
.tu-descriptions {
  margin-top: 20px;
}

.cell-item {
  display: inline-block;
  align-items: center;
}
</style>
