<template>
  <tu-card>
    <div v-for="i in 4" :key="i">
      {{ 'Card content ' + i }}
    </div>
  </tu-card>
</template>
