<template>
  <tu-avatar>
    {{ text }}
  </tu-avatar>
  <tu-button class="ml-2" @click="handleClick"> 改变字数 </tu-button>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

const list = ['A', 'AB', 'ABC', 'TuView', 'BCD', 'CD'];
const index = ref(0);
const text = computed(() => list[index.value]);

const handleClick = () => {
  index.value = index.value >= list.length - 1 ? 0 : index.value + 1;
};
</script>
