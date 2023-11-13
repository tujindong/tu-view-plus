<template>
  <tu-radio-group v-model="size">
    <tu-radio label="mini">Mini</tu-radio>
    <tu-radio label="small">Small</tu-radio>
    <tu-radio label="medium">Medium</tu-radio>
    <tu-radio label="large">Large</tu-radio>
  </tu-radio-group>

  <tu-descriptions
    class="mt-2"
    title="With border"
    :column="3"
    :size="size"
    border
  >
    <template #extra>
      <tu-button :size="size">Operation</tu-button>
    </template>

    <tu-descriptions-item>
      <template #label>
        <div class="demo-descritions-cell-item">
          <tu-icon>
            <UserFilled />
          </tu-icon>
          Username
        </div>
      </template>
      Tom
    </tu-descriptions-item>
    <tu-descriptions-item label="Telephone">18100000000</tu-descriptions-item>
    <tu-descriptions-item label="Place">Hefei</tu-descriptions-item>
    <tu-descriptions-item label="Remarks">School</tu-descriptions-item>
    <tu-descriptions-item label="Address">
      High tech District, Hefei, Anhui Province
    </tu-descriptions-item>
  </tu-descriptions>

  <tu-descriptions class="mt-2" title="Without border" :column="3" :size="size">
    <template #extra>
      <tu-button :size="size">Operation</tu-button>
    </template>

    <tu-descriptions-item>
      <template #label>
        <div class="demo-descritions-cell-item">
          <tu-icon>
            <UserFilled />
          </tu-icon>
          Username
        </div>
      </template>
      Tom
    </tu-descriptions-item>
    <tu-descriptions-item label="Telephone">18100000000</tu-descriptions-item>
    <tu-descriptions-item label="Place">Hefei</tu-descriptions-item>
    <tu-descriptions-item label="Remarks">School</tu-descriptions-item>
    <tu-descriptions-item label="Address">
      High tech District, Hefei, Anhui Province
    </tu-descriptions-item>
  </tu-descriptions>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { UserFilled } from '@tu-view-plus/icons-vue';

const size = ref('medium');
</script>

<style lang="scss" scoped>
.demo-descritions-cell-item {
  display: inline-flex;
  align-items: center;
  > .tu-icon {
    margin-right: 6px;
  }
}
</style>
