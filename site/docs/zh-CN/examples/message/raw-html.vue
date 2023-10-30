<template>
  <tu-button @click="open">使用HTML</tu-button>
</template>

<script lang="ts" setup>
import { TuMessage } from 'tu-view-plus';

const open = () => {
  TuMessage({
    dangerouslyUseHTMLString: true,
    message: '<span>这是一个 <i style="color: teal">HTML</i> 字符</span>'
  });
};
</script>