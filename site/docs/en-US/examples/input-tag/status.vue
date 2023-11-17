<template>
  <tu-row :gutter="20">
    <tu-col :span="12">
      <tu-input-tag
        :default-value="['Tag1']"
        placeholder="Please input"
        disabled
      />
    </tu-col>
    <tu-col :span="12">
      <tu-input-tag
        :default-value="['Tag1']"
        placeholder="Please input"
        readonly
      />
    </tu-col>
  </tu-row>
</template>
