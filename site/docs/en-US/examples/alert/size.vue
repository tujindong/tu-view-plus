<template>
  <tu-alert title="This is alert description." size="mini" />
  <tu-alert title="This is alert description." size="small" />
  <tu-alert title="This is alert description." />
  <tu-alert title="This is alert description." size="large" />
</template>

<style>
.tu-alert:not(:last-child) {
  margin-bottom: 20px;
}
</style>
