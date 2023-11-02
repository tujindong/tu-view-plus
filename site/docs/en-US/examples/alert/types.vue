<template>
  <tu-alert title="This is an success alert." type="success" effect="light" />
  <tu-alert title="This is an warning alert." type="warning" effect="light" />
  <tu-alert title="This is an error alert." type="error" effect="light" />
  <tu-alert title="This is an info alert." type="info" effect="light" />
</template>

<style>
.tu-alert:not(:last-child) {
  margin-bottom: 20px;
}
</style>
