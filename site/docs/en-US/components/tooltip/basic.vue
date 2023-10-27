<template>
  <tu-tooltip content="渭城朝雨浥轻尘，客舍青青柳色新。">
    <tu-button>显示单行文字</tu-button>
  </tu-tooltip>
  <tu-tooltip>
    <template #content>
      <div>渭城朝雨浥轻尘，客舍青青柳色新。</div>
      <div>劝君更尽一杯酒，西出阳关无故人。</div>
    </template>
    <tu-button>显示多行文字</tu-button>
  </tu-tooltip>
</template>