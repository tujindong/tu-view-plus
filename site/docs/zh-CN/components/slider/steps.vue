<template>
  <p>步长为 10</p>
  <tu-slider :default-value="20" :step="10" />
  <p>步长为 20</p>
  <tu-slider :default-value="20" :step="20" />
  <p>步长为 20 并显示步长刻度线</p>
  <tu-slider :default-value="20" :step="20" :show-ticks="true" />
</template>
