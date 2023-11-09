<template>
  <tu-space size="large">
    <tu-avatar-group>
      <tu-avatar :style="{ backgroundColor: '#7BC616' }">A</tu-avatar>
      <tu-avatar :style="{ backgroundColor: '#14C9C9' }">B</tu-avatar>
      <tu-avatar :style="{ backgroundColor: '#168CFF' }">C</tu-avatar>
      <tu-avatar :style="{ backgroundColor: '#FF7D00' }">tu</tu-avatar>
      <tu-avatar :style="{ backgroundColor: '#FFC72E' }">view</tu-avatar>
    </tu-avatar-group>

    <tu-avatar-group :size="24">
      <tu-avatar :style="{ backgroundColor: '#7BC616' }">A</tu-avatar>
      <tu-avatar :style="{ backgroundColor: '#14C9C9' }">B</tu-avatar>
      <tu-avatar :style="{ backgroundColor: '#168CFF' }">C</tu-avatar>
      <tu-avatar :style="{ backgroundColor: '#FF7D00' }">tu</tu-avatar>
      <tu-avatar :style="{ backgroundColor: '#FFC72E' }">view</tu-avatar>
    </tu-avatar-group>

    <tu-avatar-group :size="24" :max-count="3">
      <tu-avatar :style="{ backgroundColor: '#7BC616' }">A</tu-avatar>
      <tu-avatar :style="{ backgroundColor: '#14C9C9' }">B</tu-avatar>
      <tu-avatar :style="{ backgroundColor: '#168CFF' }">C</tu-avatar>
      <tu-avatar :style="{ backgroundColor: '#FF7D00' }">tu</tu-avatar>
      <tu-avatar :style="{ backgroundColor: '#FFC72E' }">view</tu-avatar>
    </tu-avatar-group>
  </tu-space>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
