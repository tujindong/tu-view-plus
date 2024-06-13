<template>
  <tu-color-picker
    defaultValue="#49629A"
    showHistory
    showPreset
    :historyColors="history"
    @popup-visible-change="addHistory"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const history = ref<string[]>(['#49629A']);

const addHistory = (visible: boolean, color: string) => {
  if (!visible) {
    const index = history.value.indexOf(color);
    if (index !== -1) {
      history.value.splice(index, 1);
    }
    history.value.unshift(color);
  }
};
</script>
