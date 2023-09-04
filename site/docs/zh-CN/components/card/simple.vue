<template>
  <tu-card>
    <div v-for="i in 4" :key="i" class="text item">
      {{ '列表内容 ' + i }}
    </div>
  </tu-card>
</template>
