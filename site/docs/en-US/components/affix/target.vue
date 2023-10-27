<template>
  <div class="affix-container">
    <tu-affix target=".affix-container" :offset="120">
      <tu-button>距离顶部120px</tu-button>
    </tu-affix>
  </div>
</template>

<style scoped>
.affix-container {
  text-align: center;
  height: 400px;
  border-radius: 4px;
  box-shadow: 0 2px 6px 0 var(--vp-c-divider);
}
</style>
