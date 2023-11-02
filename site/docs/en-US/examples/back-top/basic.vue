<template>
  <div class="demo-backtop-wrapper">
    <ul id="demo-backtop">
      <li v-for="i in 40" :key="i">{{ i + 1 }}. This is the content.</li>
    </ul>
    <tu-back-top target="#demo-backtop" :style="{ position: 'absolute' }" />
  </div>
</template>

<style lang="scss" scoped>
.demo-backtop-wrapper {
  position: relative;

  ul {
    height: 200px;
    overflow-y: auto;

    li {
      list-style: none;
    }
  }
}
</style>
