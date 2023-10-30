<template>
  <tu-progress :percentage="50"></tu-progress>
  <tu-progress :percentage="50" :stroke-width="15"></tu-progress>
  <tu-progress type="circle" :percentage="25" />
  <tu-progress type="circle" :percentage="25" :stroke-width="15" />
</template>

<style scoped>
.tu-progress {
  margin-bottom: 20px;
}

.tu-progress--circle {
  margin-right: 15px;
}
</style>
