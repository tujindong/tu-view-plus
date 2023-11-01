<template>
  <tu-popover title="Popover title">
    <tu-button>Hover</tu-button>
    <template #content>
      <p style="line-height: 2">Here is the text content.</p>
      <p style="line-height: 2">Here is the text content.</p>
    </template>
  </tu-popover>
  <tu-popover title="Popover title" trigger="click">
    <tu-button>Click</tu-button>
    <template #content>
      <p style="line-height: 2">Here is the text content.</p>
      <p style="line-height: 2">Here is the text content.</p>
    </template>
  </tu-popover>
</template>
