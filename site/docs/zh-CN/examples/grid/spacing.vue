<template>
  <tu-row :gutter="20">
    <tu-col :span="6"><div>col-6</div></tu-col>
    <tu-col :span="6"><div>col-6</div></tu-col>
    <tu-col :span="6"><div>col-6</div></tu-col>
    <tu-col :span="6"><div>col-6</div></tu-col>
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
.tu-col:nth-of-type(2n + 1) > div {
  background: rgba(128, 128, 128, 0.2);
}
.tu-col:nth-of-type(2n) > div {
  background: rgba(128, 128, 128, 0.1);
}
</style>
