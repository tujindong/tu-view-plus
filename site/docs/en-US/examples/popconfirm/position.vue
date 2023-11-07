<template>
  <tu-configProvider :locale="en">
    <div :style="{ position: 'relative', width: '440px', height: '280px' }">
      <tu-popconfirm content="Are you sure to delete this?" position="tl">
        <tu-button style="position: absolute; top: 0; left: 90px">
          tl
        </tu-button>
      </tu-popconfirm>
      <tu-popconfirm content="Are you sure to delete this?" position="top">
        <tu-button style="position: absolute; top: 0; left: 180px">
          top
        </tu-button>
      </tu-popconfirm>
      <tu-popconfirm content="Are you sure to delete this?" position="tr">
        <tu-button style="position: absolute; top: 0; left: 280px">
          tr
        </tu-button>
      </tu-popconfirm>
      <tu-popconfirm content="Are you sure to delete this?" position="bl">
        <tu-button style="position: absolute; top: 240px; left: 80px">
          bl
        </tu-button>
      </tu-popconfirm>
      <tu-popconfirm content="Are you sure to delete this?" position="bottom">
        <tu-button style="position: absolute; top: 240px; left: 180px">
          bottom
        </tu-button>
      </tu-popconfirm>
      <tu-popconfirm content="Are you sure to delete this?" position="br">
        <tu-button style="position: absolute; top: 240px; left: 280px">
          br
        </tu-button>
      </tu-popconfirm>
      <tu-popconfirm content="Are you sure to delete this?" position="lt">
        <tu-button style="position: absolute; top: 60px; left: 10px">
          lt
        </tu-button>
      </tu-popconfirm>
      <tu-popconfirm content="Are you sure to delete this?" position="left">
        <tu-button style="position: absolute; top: 120px; left: 10px">
          left
        </tu-button>
      </tu-popconfirm>
      <tu-popconfirm content="Are you sure to delete this?" position="lb">
        <tu-button style="position: absolute; top: 180px; left: 10px">
          lb
        </tu-button>
      </tu-popconfirm>
      <tu-popconfirm content="Are you sure to delete this?" position="rt">
        <tu-button style="position: absolute; top: 60px; left: 350px">
          rt
        </tu-button>
      </tu-popconfirm>
      <tu-popconfirm content="Are you sure to delete this?" position="right">
        <tu-button style="position: absolute; top: 120px; left: 350px">
          right
        </tu-button>
      </tu-popconfirm>
      <tu-popconfirm content="Are you sure to delete this?" position="rb">
        <tu-button style="position: absolute; top: 180px; left: 350px">
          rb
        </tu-button>
      </tu-popconfirm>
    </div>
  </tu-configProvider>
</template>

<script lang="ts" setup>
import { en } from 'tu-view-plus/locale/index.mjs';
</script>

<style scoped lang="scss">
.tu-button {
  width: 80px;
}
</style>
