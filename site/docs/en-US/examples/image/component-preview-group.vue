<template>
  <tu-button type="primary" @click="handleClick">preview multiple image</tu-button>
  <tu-image-preview-group
    v-model:visible="visible"
    v-model:current="current"
    infinite
    :srcList="[
      'https://cdn.pixabay.com/photo/2020/05/25/13/41/chalet-5218666_640.png',
      'https://cdn.pixabay.com/photo/2020/02/06/15/59/forest-4824759_640.png',
      'https://cdn.pixabay.com/photo/2020/02/07/21/12/everest-4828404_640.png',
      'https://cdn.pixabay.com/photo/2020/02/23/19/20/tent-4874436_640.png'
    ]"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const visible = ref(false);
const current = ref(3);
const handleClick = () => {
  visible.value = true;
};
</script>
