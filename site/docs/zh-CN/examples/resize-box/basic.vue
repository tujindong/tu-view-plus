<template>
  <tu-resize-box
    style="
      width: 300px;
      min-width: 200px;
      max-width: 100%;
      height: 150px;
      min-height: 50px;
      text-align: center;
    "
    :directions="['right', 'bottom', 'top', 'left']"
  >
    <p>送元二使安西</p>
    <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
    <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
  </tu-resize-box>
</template>
