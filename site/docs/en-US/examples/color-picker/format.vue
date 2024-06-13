<template>
  <tu-row>
    <tu-col :span="8">
      <p>hex</p>
      <tu-color-picker defaultValue="#49629A" format="hex" showText />
    </tu-col>
    <tu-col :span="8">
      <p>rgb</p>
      <tu-color-picker defaultValue="#49629A" format="rgb" showText />
    </tu-col>
  </tu-row>
</template>
