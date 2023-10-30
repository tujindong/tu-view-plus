<template>
  <tu-progress :text-inside="true" :stroke-width="22" :percentage="70" />
  <tu-progress
    :text-inside="true"
    :stroke-width="22"
    :percentage="100"
    status="success"
  />
  <tu-progress
    :text-inside="true"
    :stroke-width="22"
    :percentage="80"
    status="warning"
  />
  <tu-progress
    :text-inside="true"
    :stroke-width="22"
    :percentage="50"
    status="exception"
  />
</template>

<style scoped>
.tu-progress--line {
  margin-bottom: 15px;
}
</style>
