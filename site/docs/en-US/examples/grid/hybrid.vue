<template>
  <tu-row :gutter="20">
    <tu-col :span="16">col-16</tu-col>
    <tu-col :span="8">col-8</tu-col>
  </tu-row>
  <tu-row :gutter="20">
    <tu-col :span="8">col-8</tu-col>
    <tu-col :span="8">col-8</tu-col>
    <tu-col :span="4">col-4</tu-col>
    <tu-col :span="4">col-4</tu-col>
  </tu-row>
  <tu-row :gutter="20">
    <tu-col :span="4">col-4</tu-col>
    <tu-col :span="16">col-16</tu-col>
    <tu-col :span="4">col-4</tu-col>
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
