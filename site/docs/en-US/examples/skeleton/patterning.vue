<template>
  <tu-skeleton>
    <tu-row>
      <tu-col :span="6"> <tu-skeleton-shape size="mini" /></tu-col>
      <tu-col :span="6"><tu-skeleton-shape size="small" /></tu-col>
      <tu-col :span="6"><tu-skeleton-shape /></tu-col>
      <tu-col :span="6"><tu-skeleton-shape size="large" /></tu-col>
    </tu-row>

    <tu-row>
      <tu-col :span="6">
        <tu-skeleton-shape shape="circle" size="mini"
      /></tu-col>
      <tu-col :span="6"
        ><tu-skeleton-shape shape="circle" size="mini"
      /></tu-col>
      <tu-col :span="6"><tu-skeleton-shape shape="circle" /></tu-col>
      <tu-col :span="6"
        ><tu-skeleton-shape shape="circle" size="large"
      /></tu-col>
    </tu-row>
  </tu-skeleton>
</template>

<script lang="ts" setup></script>
