<template>
  <tu-switch v-model="value4" active-text="开启" inactive-text="关闭" />

  <tu-switch
    class="ml-2"
    v-model="value1"
    inline-prompt
    active-text="是"
    inactive-text="否"
  />

  <tu-switch
    v-model="value2"
    class="ml-2"
    width="70"
    inline-prompt
    active-text="超出省略"
    inactive-text="超出省略"
  />

  <tu-switch
    class="ml-2"
    v-model="value3"
    inline-prompt
    active-text="完整内容"
    inactive-text="完整内容"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(false);
const value2 = ref(false);
const value3 = ref(false);
const value4 = ref(false);
</script>
