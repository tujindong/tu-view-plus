<template>
  <div :style="{ position: 'relative', width: '440px', height: '280px' }">
    <tu-popover
      title="Popover title"
      content="Here is the text content."
      position="tl"
    >
      <tu-button style="position: absolute; top: 0; left: 90px"> tl </tu-button>
    </tu-popover>
    <tu-popover
      title="Popover title"
      content="Here is the text content."
      position="top"
    >
      <tu-button style="position: absolute; top: 0; left: 180px">
        top
      </tu-button>
    </tu-popover>
    <tu-popover
      title="Popover title"
      content="Here is the text content."
      position="tr"
    >
      <tu-button style="position: absolute; top: 0; left: 280px">
        tr
      </tu-button>
    </tu-popover>
    <tu-popover
      title="Popover title"
      content="Here is the text content."
      position="bl"
    >
      <tu-button style="position: absolute; top: 240px; left: 80px">
        bl
      </tu-button>
    </tu-popover>
    <tu-popover
      title="Popover title"
      content="Here is the text content."
      position="bottom"
    >
      <tu-button style="position: absolute; top: 240px; left: 180px">
        bottom
      </tu-button>
    </tu-popover>
    <tu-popover
      title="Popover title"
      content="Here is the text content."
      position="br"
    >
      <tu-button style="position: absolute; top: 240px; left: 280px">
        br
      </tu-button>
    </tu-popover>
    <tu-popover
      title="Popover title"
      content="Here is the text content."
      position="lt"
    >
      <tu-button style="position: absolute; top: 60px; left: 10px">
        lt
      </tu-button>
    </tu-popover>
    <tu-popover
      title="Popover title"
      content="Here is the text content."
      position="left"
    >
      <tu-button style="position: absolute; top: 120px; left: 10px">
        left
      </tu-button>
    </tu-popover>
    <tu-popover
      title="Popover title"
      content="Here is the text content."
      position="lb"
    >
      <tu-button style="position: absolute; top: 180px; left: 10px">
        lb
      </tu-button>
    </tu-popover>
    <tu-popover
      title="Popover title"
      content="Here is the text content."
      position="rt"
    >
      <tu-button style="position: absolute; top: 60px; left: 350px">
        rt
      </tu-button>
    </tu-popover>
    <tu-popover
      title="Popover title"
      content="Here is the text content."
      position="right"
    >
      <tu-button style="position: absolute; top: 120px; left: 350px">
        right
      </tu-button>
    </tu-popover>
    <tu-popover
      title="Popover title"
      content="Here is the text content."
      position="rb"
    >
      <tu-button style="position: absolute; top: 180px; left: 350px">
        rb
      </tu-button>
    </tu-popover>
  </div>
</template>

<style scoped lang="scss">
.tu-button {
  width: 80px;
}
</style>
