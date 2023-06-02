
<template>
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
  