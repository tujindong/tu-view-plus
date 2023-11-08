<template>
  <tu-space wrap>
    <tu-button v-for="i in 10" :key="i">Button {{ i + 1 }}</tu-button>
  </tu-space>
</template>
