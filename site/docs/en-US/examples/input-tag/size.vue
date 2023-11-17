<template>
  <tu-row :gutter="20" class="demo-input-tag-row">
    <tu-col :span="6">
      <tu-input-tag size="mini" placeholder="Please input" />
    </tu-col>

    <tu-col :span="6">
      <tu-input-tag size="small" placeholder="Please input" />
    </tu-col>

    <tu-col :span="6">
      <tu-input-tag placeholder="Please input" />
    </tu-col>

    <tu-col :span="6">
      <tu-input-tag size="large" placeholder="Please input" />
    </tu-col>
  </tu-row>
</template>

<style>
.demo-input-tag-row {
  align-items: baseline;
}
</style>
