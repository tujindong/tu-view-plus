<template>
  <tu-alert title="This is an outset alert." effect="outset" />
  <tu-alert title="This is an inset alert." effect="inset" />
  <tu-alert title="This is an dark alert." effect="dark" type="success" />
  <tu-alert title="This is an light alert." effect="light" type="success" />
  <tu-alert title="This is an plain alert." effect="plain" type="success" />
</template>

<style>
.tu-alert:not(:last-child) {
  margin-bottom: 20px;
}
</style>
