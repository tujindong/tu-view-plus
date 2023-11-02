<template>
  <tu-button @click="open">Use HTML</tu-button>
</template>

<script lang="ts" setup>
import { TuMessage } from 'tu-view-plus';

const open = () => {
  TuMessage({
    dangerouslyUseHTMLString: true,
    message: '<span>This is a <i style="color: teal">HTML</i> string</span>'
  });
};
</script>
