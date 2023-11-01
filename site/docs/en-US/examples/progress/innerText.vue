<template>
  <tu-progress :text-inside="true" :stroke-width="22" :percentage="70" />
  <tu-progress
    status="success"
    :text-inside="true"
    :stroke-width="22"
    :percentage="100"
  />
  <tu-progress
    status="warning"
    :text-inside="true"
    :stroke-width="22"
    :percentage="80"
  />
  <tu-progress
    status="exception"
    :text-inside="true"
    :stroke-width="22"
    :percentage="50"
  />
</template>

<style scoped>
.tu-progress--line {
  margin-bottom: 15px;
}
</style>
