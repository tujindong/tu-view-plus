<template>
  <tu-popover title="送元二使安西">
    <tu-button>悬停</tu-button>
    <template #content>
      <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
      <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
    </template>
  </tu-popover>
  <tu-popover title="送元二使安西" trigger="click">
    <tu-button>点击</tu-button>
    <template #content>
      <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
      <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
    </template>
  </tu-popover>
</template>