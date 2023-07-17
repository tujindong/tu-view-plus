<template>
  <tu-switch
    v-model="value1"
    inline-prompt
    :active-icon="Check"
    :inactive-icon="Close"
  />

  <tu-switch
    class="ml-2"
    v-model="value2"
    :active-icon="Check"
    :inactive-icon="Close"
  />
</template>

<script lang="ts" setup>
import { Check, Close } from '@tu-view-plus/icons-vue';
import { ref } from 'vue';

const value1 = ref(false);
const value2 = ref(false);
</script>
