<template>
  <tu-row :gutter="20">
    <tu-col :span="12">
      <tu-input-tag :default-value="['标签1']" placeholder="请输入" disabled />
    </tu-col>
    <tu-col :span="12">
      <tu-input-tag :default-value="['标签1']" placeholder="请输入" readonly />
    </tu-col>
  </tu-row>
</template>
