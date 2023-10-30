<template>
  <tu-row :gutter="10">
    <tu-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div>col</div></tu-col>
    <tu-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div>col</div></tu-col>
    <tu-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div>col</div></tu-col>
    <tu-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div>col</div></tu-col>
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
  color: #465eb8;
}
.tu-col:nth-of-type(2n + 1) > div {
  background: #7693f5;
}
.tu-col:nth-of-type(2n) > div {
  background: #beccfa;
}
</style>