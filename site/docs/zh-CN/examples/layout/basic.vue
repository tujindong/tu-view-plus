<template>
  <div class="layout-demo">
    <tu-layout style="height: 300px">
      <tu-layout-header></tu-layout-header>
      <tu-layout-content></tu-layout-content>
      <tu-layout-footer></tu-layout-footer>
    </tu-layout>

    <br />

    <tu-layout style="height: 300px">
      <tu-layout-header></tu-layout-header>
      <tu-layout>
        <tu-layout-sider></tu-layout-sider>
        <tu-layout-content></tu-layout-content>
      </tu-layout>
      <tu-layout-footer></tu-layout-footer>
    </tu-layout>

    <br />

    <tu-layout style="height: 300px">
      <tu-layout-header></tu-layout-header>
      <tu-layout>
        <tu-layout-content></tu-layout-content>
        <tu-layout-sider></tu-layout-sider>
      </tu-layout>
      <tu-layout-footer></tu-layout-footer>
    </tu-layout>

    <br />

    <tu-layout style="height: 300px">
      <tu-layout-sider :width="120"></tu-layout-sider>
      <tu-layout>
        <tu-layout-header></tu-layout-header>
        <tu-layout-content></tu-layout-content>
        <tu-layout-footer></tu-layout-footer>
      </tu-layout>
    </tu-layout>
  </div>
</template>

<style scoped lang="scss">
.layout-demo :deep(.tu-layout__header),
.layout-demo :deep(.tu-layout__footer),
.layout-demo :deep(.tu-layout__sider-children),
.layout-demo :deep(.tu-layout__content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-stretch: condensed;
  text-align: center;
  font-size: 14px;
  color: #71757f;
}

.layout-demo :deep(.tu-layout__header),
.layout-demo :deep(.tu-layout__footer) {
  height: 54px;
  background-color: rgba(128, 128, 128, 0.2);
}

.layout-demo :deep(.tu-layout__sider) {
  background-color: rgba(128, 128, 128, 0.1);
}

.layout-demo :deep(.tu-layout__content) {
  background-color: rgba(128, 128, 128, 0.16);
}
</style>
