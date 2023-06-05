
<template>
  <tu-button type="primary">1233</tu-button>
  <tu-row>
    <tu-col :span="24"><div class="grid-content bg-purple-dark"></div></tu-col>
  </tu-row>
  <tu-row>
    <tu-col :span="12"><div class="grid-content bg-purple"></div></tu-col>
    <tu-col :span="12"><div class="grid-content bg-purple-light"></div></tu-col>
  </tu-row>
  <tu-row>
    <tu-col :span="8"><div class="grid-content bg-purple"></div></tu-col>
    <tu-col :span="8"><div class="grid-content bg-purple-light"></div></tu-col>
    <tu-col :span="8"><div class="grid-content bg-purple"></div></tu-col>
  </tu-row>
  <tu-row>
    <tu-col :span="6"><div class="grid-content bg-purple"></div></tu-col>
    <tu-col :span="6"><div class="grid-content bg-purple-light"></div></tu-col>
    <tu-col :span="6"><div class="grid-content bg-purple"></div></tu-col>
    <tu-col :span="6"><div class="grid-content bg-purple-light"></div></tu-col>
  </tu-row>
  <tu-row>
    <tu-col :span="4"><div class="grid-content bg-purple"></div></tu-col>
    <tu-col :span="4"><div class="grid-content bg-purple-light"></div></tu-col>
    <tu-col :span="4"><div class="grid-content bg-purple"></div></tu-col>
    <tu-col :span="4"><div class="grid-content bg-purple-light"></div></tu-col>
    <tu-col :span="4"><div class="grid-content bg-purple"></div></tu-col>
    <tu-col :span="4"><div class="grid-content bg-purple-light"></div></tu-col>
  </tu-row>

  <br />
  <br />
  <tu-row :gutter="20">
    <tu-col :span="6"><div class="grid-content bg-purple"></div></tu-col>
    <tu-col :span="6"><div class="grid-content bg-purple"></div></tu-col>
    <tu-col :span="6"><div class="grid-content bg-purple"></div></tu-col>
    <tu-col :span="6"><div class="grid-content bg-purple"></div></tu-col>
  </tu-row>

  <br />
  <h4>分栏偏移</h4>
  <br />
  <tu-row :gutter="20">
    <tu-col :span="6"><div class="grid-content bg-purple"></div></tu-col>
    <tu-col :span="6" :offset="6"
      ><div class="grid-content bg-purple"></div
    ></tu-col>
  </tu-row>
  <tu-row :gutter="20">
    <tu-col :span="6" :offset="6"
      ><div class="grid-content bg-purple"></div
    ></tu-col>
    <tu-col :span="6" :offset="6"
      ><div class="grid-content bg-purple"></div
    ></tu-col>
  </tu-row>
  <tu-row :gutter="20">
    <tu-col :span="12" :offset="6"
      ><div class="grid-content bg-purple"></div
    ></tu-col>
  </tu-row>

  <br />
  <h4>对齐方式</h4>
  <br />
  <tu-row class="row-bg">
    <tu-col :span="6"><div class="grid-content bg-purple"></div></tu-col>
    <tu-col :span="6"><div class="grid-content bg-purple-light"></div></tu-col>
    <tu-col :span="6"><div class="grid-content bg-purple"></div></tu-col>
  </tu-row>
  <tu-row class="row-bg" justify="center">
    <tu-col :span="6"><div class="grid-content bg-purple"></div></tu-col>
    <tu-col :span="6"><div class="grid-content bg-purple-light"></div></tu-col>
    <tu-col :span="6"><div class="grid-content bg-purple"></div></tu-col>
  </tu-row>
  <tu-row class="row-bg" justify="end">
    <tu-col :span="6"><div class="grid-content bg-purple"></div></tu-col>
    <tu-col :span="6"><div class="grid-content bg-purple-light"></div></tu-col>
    <tu-col :span="6"><div class="grid-content bg-purple"></div></tu-col>
  </tu-row>
  <tu-row class="row-bg" justify="space-between">
    <tu-col :span="6"><div class="grid-content bg-purple"></div></tu-col>
    <tu-col :span="6"><div class="grid-content bg-purple-light"></div></tu-col>
    <tu-col :span="6"><div class="grid-content bg-purple"></div></tu-col>
  </tu-row>
  <tu-row class="row-bg" justify="space-around">
    <tu-col :span="6"><div class="grid-content bg-purple"></div></tu-col>
    <tu-col :span="6"><div class="grid-content bg-purple-light"></div></tu-col>
    <tu-col :span="6"><div class="grid-content bg-purple"></div></tu-col>
  </tu-row>

  <br />
  <h4>响应式布局</h4>
  <br />
  <tu-row :gutter="10">
    <tu-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
      ><div class="grid-content bg-purple"></div
    ></tu-col>
    <tu-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
      ><div class="grid-content bg-purple-light"></div
    ></tu-col>
    <tu-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
      ><div class="grid-content bg-purple"></div
    ></tu-col>
    <tu-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
      ><div class="grid-content bg-purple-light"></div
    ></tu-col>
  </tu-row>
</template>
  
  
<style lang="scss">
.tu-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.tu-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
  