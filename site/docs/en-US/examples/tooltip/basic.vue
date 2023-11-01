<template>
  <tu-tooltip content="This is tooltip content.">
    <tu-button>Mouse over to display tooltip</tu-button>
  </tu-tooltip>
  <tu-tooltip>
    <template #content>
      <div>This is a two-line tooltip content.</div>
      <div>This is a two-line tooltip content.</div>
    </template>
    <tu-button>Mouse over to display tooltip</tu-button>
  </tu-tooltip>
</template>
