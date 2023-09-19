<template>
  <tu-progress type="circle" :percentage="25" />
  <tu-progress type="circle" :percentage="100" status="success" />
  <tu-progress type="circle" :percentage="70" status="warning" />
  <tu-progress type="circle" :percentage="50" status="exception" />
</template>
<style scoped>
.tu-progress--circle {
  margin-right: 15px;
}
</style>
