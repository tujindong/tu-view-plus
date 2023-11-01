<template>
  <tu-switch v-model="value4" active-text="On" inactive-text="Off" />

  <tu-switch
    class="ml-2"
    v-model="value1"
    inline-prompt
    active-text="On"
    inactive-text="Off"
  />

  <tu-switch
    v-model="value2"
    class="ml-2"
    width="70"
    inline-prompt
    active-text="Exceeding ellipsis"
    inactive-text="Exceeding ellipsis"
  />

  <tu-switch
    class="ml-2"
    v-model="value3"
    inline-prompt
    active-text="Full content"
    inactive-text="Full content"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(false);
const value2 = ref(false);
const value3 = ref(false);
const value4 = ref(false);
</script>
