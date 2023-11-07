<template>
  <tu-button @click="visible = true">Open modal</tu-button>

  <tu-modal width="auto" v-model:visible="visible" @cancel="visible = false">
    <template #title> Modal title </template>
    <div class="demo-modal-content">
      Stay organized, reduce stress, and accomplish personal and business goals
      with a daily schedule template. It’s a simple yet effective
      time-management tool for any daily activity, whether you’re managing a
      busy work schedule, academic assignments or family chores.
    </div>
  </tu-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref(false);
</script>
