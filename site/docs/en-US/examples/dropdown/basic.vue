<template>
  <tu-dropdown @select="handleSelect">
    <tu-button>Dropdown list</tu-button>
    <template #content>
      <tu-dropdown-item>Option 1</tu-dropdown-item>
      <tu-dropdown-item disabled>Option 2</tu-dropdown-item>
      <tu-dropdown-item :value="'3'">Option 3</tu-dropdown-item>
    </template>
  </tu-dropdown>

  <tu-dropdown disabled>
    <tu-button disabled>Disabled dropdown list</tu-button>
    <template #content>
      <tu-dropdown-item>Option 1</tu-dropdown-item>
      <tu-dropdown-item disabled>Option 2</tu-dropdown-item>
      <tu-dropdown-item :value="'3'">Option 3</tu-dropdown-item>
    </template>
  </tu-dropdown>
</template>

<script lang="ts" setup>
const handleSelect = (v: string) => {
  console.log(v);
};
</script>
