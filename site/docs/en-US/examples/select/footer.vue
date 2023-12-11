<template>
  <tu-select placeholder="Please select" v-model="value">
    <tu-select-option>Option 1</tu-select-option>
    <tu-select-option>Option 2</tu-select-option>
    <tu-select-option>Option 3</tu-select-option>
    <tu-select-option>Option 4</tu-select-option>
    <tu-select-option>Option 5</tu-select-option>
    <tu-select-option>Option 6</tu-select-option>
    <template #footer>
      <div style="padding: 6px 12px; text-align: right">
        <tu-space>
          <tu-button size="small">Cancel</tu-button>
          <tu-button size="small" type="primary">Confirm</tu-button>
        </tu-space>
      </div>
    </template>
  </tu-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('');
</script>
