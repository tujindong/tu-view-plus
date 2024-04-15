<template>
  <tu-button type="primary" @click="handleClick">preview image</tu-button>
  <tu-image-preview
    src="https://cdn.pixabay.com/photo/2020/04/04/03/42/paperwork-5000691_640.png"
    v-model:visible="visible"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const visible = ref(false);
const handleClick = () => {
  visible.value = true;
};
</script>
