<template>
  <div :style="{ position: 'relative', width: '440px', height: '280px' }">
    <tu-tooltip content="This is tooltip content." position="tl">
      <tu-button style="position: absolute; top: 0; left: 90px"> tl </tu-button>
    </tu-tooltip>
    <tu-tooltip content="This is tooltip content." position="top">
      <tu-button style="position: absolute; top: 0; left: 180px">
        top
      </tu-button>
    </tu-tooltip>
    <tu-tooltip content="This is tooltip content." position="tr">
      <tu-button style="position: absolute; top: 0; left: 280px">
        tr
      </tu-button>
    </tu-tooltip>
    <tu-tooltip content="This is tooltip content." position="bl">
      <tu-button style="position: absolute; top: 240px; left: 80px">
        bl
      </tu-button>
    </tu-tooltip>
    <tu-tooltip content="This is tooltip content." position="bottom">
      <tu-button style="position: absolute; top: 240px; left: 180px">
        bottom
      </tu-button>
    </tu-tooltip>
    <tu-tooltip content="This is tooltip content." position="br">
      <tu-button style="position: absolute; top: 240px; left: 280px">
        br
      </tu-button>
    </tu-tooltip>
    <tu-tooltip content="This is tooltip content." position="lt">
      <tu-button style="position: absolute; top: 60px; left: 10px">
        lt
      </tu-button>
    </tu-tooltip>
    <tu-tooltip content="This is tooltip content." position="left">
      <tu-button style="position: absolute; top: 120px; left: 10px">
        left
      </tu-button>
    </tu-tooltip>
    <tu-tooltip content="This is tooltip content." position="lb">
      <tu-button style="position: absolute; top: 180px; left: 10px">
        lb
      </tu-button>
    </tu-tooltip>
    <tu-tooltip content="This is tooltip content." position="rt">
      <tu-button style="position: absolute; top: 60px; left: 350px">
        rt
      </tu-button>
    </tu-tooltip>
    <tu-tooltip content="This is tooltip content." position="right">
      <tu-button style="position: absolute; top: 120px; left: 350px">
        right
      </tu-button>
    </tu-tooltip>
    <tu-tooltip content="This is tooltip content." position="rb">
      <tu-button style="position: absolute; top: 180px; left: 350px">
        rb
      </tu-button>
    </tu-tooltip>
  </div>
</template>

<style scoped lang="scss">
.tu-button {
  width: 80px;
}
</style>
