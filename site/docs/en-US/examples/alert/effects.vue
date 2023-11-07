<template>
  <tu-alert title="This is an up alert." effect="up" />
  <tu-alert title="This is an down alert." effect="down" />
  <tu-alert title="This is an dark alert." effect="dark" type="success" />
  <tu-alert title="This is an light alert." effect="light" type="success" />
  <tu-alert title="This is an plain alert." effect="plain" type="success" />
</template>

<style>
.tu-alert:not(:last-child) {
  margin-bottom: 20px;
}
</style>
