<template>
  <tu-resize-box
    style="
      min-width: 200px;
      max-width: 100%;
      min-height: 50px;
      text-align: center;
    "
    :directions="['right', 'bottom', 'top', 'left']"
    v-model:width="width"
    v-model:height="height"
  >
    <p>
      Stay organized, reduce stress, and accomplish personal and business goals
      with a daily schedule template.
    </p>
  </tu-resize-box>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const width = ref(300);
const height = ref(150);
</script>
