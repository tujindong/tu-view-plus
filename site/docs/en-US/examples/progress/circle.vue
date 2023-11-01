<template>
  <tu-progress type="circle" :percentage="25" status="exception" />
  <tu-progress type="circle" :percentage="50" status="warning" />
  <tu-progress type="circle" :percentage="70" />
  <tu-progress type="circle" :percentage="100" status="success" />
</template>

<style scoped>
.tu-progress--circle {
  margin-right: 15px;
}
</style>
