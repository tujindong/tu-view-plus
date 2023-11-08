<template>
  <tu-space wrap>
    <tu-button v-for="i in 10" :key="i">按钮 {{ i + 1 }}</tu-button>
  </tu-space>
</template>
