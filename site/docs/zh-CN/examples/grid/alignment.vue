<template>
  <p>Justify start</p>
  <tu-row>
    <tu-col :span="6">col-6</tu-col>
    <tu-col :span="6">col-6</tu-col>
    <tu-col :span="6">col-6</tu-col>
  </tu-row>
  <p>Justify center</p>
  <tu-row justify="center">
    <tu-col :span="6">col-6</tu-col>
    <tu-col :span="6">col-6</tu-col>
    <tu-col :span="6">col-6</tu-col>
  </tu-row>
  <p>Justify end</p>
  <tu-row justify="end">
    <tu-col :span="6">col-6</tu-col>
    <tu-col :span="6">col-6</tu-col>
    <tu-col :span="6">col-6</tu-col>
  </tu-row>
  <p>Justify space-between</p>
  <tu-row justify="space-between">
    <tu-col :span="6">col-6</tu-col>
    <tu-col :span="6">col-6</tu-col>
    <tu-col :span="6">col-6</tu-col>
  </tu-row>
  <p>Justify space-around</p>
  <tu-row justify="space-around">
    <tu-col :span="6">col-6</tu-col>
    <tu-col :span="6">col-6</tu-col>
    <tu-col :span="6">col-6</tu-col>
  </tu-row>
</template>

<style lang="scss" scoped>
.tu-row:not(:last-of-type) {
  margin-bottom: 20px;
}
.tu-col {
  text-align: center;
  min-height: 28px;
  line-height: 28px;
  font-size: 12px;
  color: #71757f;
}
.tu-col:nth-of-type(2n + 1) {
  background: rgba(128, 128, 128, 0.2);
}
.tu-col:nth-of-type(2n) {
  background: rgba(128, 128, 128, 0.1);
}
</style>
