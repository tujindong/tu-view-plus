<template>
  <tu-progress type="circle" status="exception" :percentage="25" />
  <tu-progress type="circle" status="warning" :percentage="50" />
  <tu-progress type="circle" :percentage="70" />
  <tu-progress type="circle" status="success" :percentage="100" />
</template>

<style scoped>
.tu-progress--circle {
  margin-right: 15px;
}
</style>
