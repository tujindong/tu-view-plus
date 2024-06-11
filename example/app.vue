<template>
  <div style="width: 100%">
    <br />
    <br />
    <tu-configProvider>
      <tu-button>provider按钮</tu-button>
    </tu-configProvider>
    <br />
    <br />
    <br />
    <br />
    <tu-color-picker v-model="value" />
    <br />
    <br />
    <tu-color-picker :modelValue="value" showPreset showHistory showText />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';


const value = ref('#165DFF');
</script>
<style lang="scss"></style>
