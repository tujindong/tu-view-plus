<template>
  <tu-dropdown>
    <tu-button>Click</tu-button>
    <template #content>
      <tu-dropdown-item>Option 1</tu-dropdown-item>
      <tu-dropdown-item>Option 2</tu-dropdown-item>
      <tu-dropdown-item>Option 3</tu-dropdown-item>
    </template>
  </tu-dropdown>
  <tu-dropdown trigger="hover">
    <tu-button>Hover</tu-button>
    <template #content>
      <tu-dropdown-item>Option 1</tu-dropdown-item>
      <tu-dropdown-item>Option 2</tu-dropdown-item>
      <tu-dropdown-item>Option 3</tu-dropdown-item>
    </template>
  </tu-dropdown>
</template>
