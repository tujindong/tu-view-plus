<template>
  <tu-checkbox-group v-model="custom">
    <tu-checkbox label="hideHeader">hide header</tu-checkbox>
    <tu-checkbox label="hideFooter">hide footer</tu-checkbox>
    <tu-checkbox label="hideCancel">hide cancel</tu-checkbox>
  </tu-checkbox-group>

  <br />
  <br />

  <tu-button @click="visible = true">Open drawer</tu-button>

  <tu-drawer
    v-model:visible="visible"
    :header="!custom.includes('hideHeader')"
    :footer="!custom.includes('hideFooter')"
    :hide-cancel="custom.includes('hideCancel')"
    @ok="visible = false"
    @cancel="visible = false"
  >
    <template #title> Drawer title </template>
    <p style="line-height: 2">This is drawer content.</p>
    <p style="line-height: 2">This is drawer content.</p>
  </tu-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref(false);
const custom = ref([] as string[]);
</script>
