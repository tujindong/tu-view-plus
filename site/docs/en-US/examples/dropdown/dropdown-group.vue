<template>
  <tu-dropdown>
    <tu-button>Dropdown group list</tu-button>
    <template #content>
      <tu-dropdown-group title="Title 1">
        <tu-dropdown-item>Option 1</tu-dropdown-item>
        <tu-dropdown-item>Option 2</tu-dropdown-item>
        <tu-dropdown-item>Option 3</tu-dropdown-item>
      </tu-dropdown-group>
      <tu-dropdown-group title="Title 2">
        <tu-dropdown-item>Option 4</tu-dropdown-item>
        <tu-dropdown-item>Option 5</tu-dropdown-item>
        <tu-dropdown-item>Option 6</tu-dropdown-item>
      </tu-dropdown-group>
    </template>
  </tu-dropdown>
</template>
