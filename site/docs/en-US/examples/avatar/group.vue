<template>
  <tu-space size="large">
    <tu-avatar-group>
      <tu-avatar>A</tu-avatar>
      <tu-avatar>B</tu-avatar>
      <tu-avatar>C</tu-avatar>
      <tu-avatar>Tu</tu-avatar>
      <tu-avatar>View</tu-avatar>
    </tu-avatar-group>

    <tu-avatar-group :size="24">
      <tu-avatar>A</tu-avatar>
      <tu-avatar>B</tu-avatar>
      <tu-avatar>C</tu-avatar>
      <tu-avatar>Tu</tu-avatar>
      <tu-avatar>View</tu-avatar>
    </tu-avatar-group>

    <tu-avatar-group :size="24" :max-count="3">
      <tu-avatar>A</tu-avatar>
      <tu-avatar>B</tu-avatar>
      <tu-avatar>C</tu-avatar>
      <tu-avatar>Tu</tu-avatar>
      <tu-avatar>View</tu-avatar>
    </tu-avatar-group>
  </tu-space>
</template>
