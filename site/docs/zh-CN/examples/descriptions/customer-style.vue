<template>
  <tu-descriptions title="自定义样式" :column="3" border>
    <tu-descriptions-item
      label="姓名"
      label-align="right"
      align="center"
      label-class-name="my-label"
      class-name="my-content"
      width="150px"
    >
      汤姆
    </tu-descriptions-item>
    <tu-descriptions-item label="手机号" label-align="right" align="center">
      18100000000
    </tu-descriptions-item>
    <tu-descriptions-item label="地点" label-align="right" align="center">
      合肥
    </tu-descriptions-item>
    <tu-descriptions-item label="备注" label-align="right" align="center">
      学校
    </tu-descriptions-item>
    <tu-descriptions-item label="住址" label-align="right" align="center">
      安徽省合肥市高新区
    </tu-descriptions-item>
  </tu-descriptions>
</template>

<style scoped>
:deep(.my-label) {
  color: #5e7ce0 !important;
}
:deep(.my-content) {
  color: #fa9841 !important;
}
</style>
