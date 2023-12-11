<template>
  <tu-select placeholder="Please select" v-model="value" multiple allow-clear>
    <template #header>
      <div style="padding: 6px 12px">
        <tu-checkbox
          v-model="checkAll"
          :indeterminate="indeterminate"
          @change="handleCheckAll"
        >
          Check All
        </tu-checkbox>
      </div>
    </template>
    <tu-select-option v-for="option in options" :key="option">
      {{ option }}
    </tu-select-option>
  </tu-select>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

const options = Array(8)
  .fill(null)
  .map((_, index) => `Option  ${index + 1}`);

const checkAll = ref(false);
const indeterminate = ref(false);
const value = ref<string[]>([]);

watch(value, (val) => {
  if (val.length === 0) {
    checkAll.value = false;
    indeterminate.value = false;
  } else if (val.length === options.length) {
    checkAll.value = true;
    indeterminate.value = false;
  } else {
    indeterminate.value = true;
  }
});

const handleCheckAll = (val: Boolean) => {
  indeterminate.value = false;
  value.value = val ? options : [];
};
</script>
