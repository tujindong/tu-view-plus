<template>
  <div>
    <tu-button type="primary" @click="handleButtonClick">primary</tu-button>

    <tu-button>Default</tu-button>

    <tu-button round>Default</tu-button>

    <tu-button round type="danger">
      <template #icon>
        <Edit />
      </template>
      Danger
    </tu-button>

    <tu-button type="danger">Danger</tu-button>

    <tu-button type="warning">Warning</tu-button>

    <tu-button type="info">Info</tu-button>

    <tu-button type="success">Success</tu-button>

    <tu-button type="text"
      ><template #icon> <Edit /> </template> Text</tu-button
    >

    <h4>禁用</h4>

    <tu-button disabled>禁用</tu-button>

    <tu-button disabled type="danger">Danger</tu-button>

    <tu-button disabled type="warning">Warning</tu-button>

    <tu-button disabled type="info">Info</tu-button>

    <tu-button disabled type="success">Success</tu-button>

    <tu-button disabled type="text">Text</tu-button>

    <h4>尺寸</h4>
    <tu-button size="large">大型按钮</tu-button>
    <tu-button size="medium">中等按钮</tu-button>
    <tu-button size="small">小型按钮</tu-button>
    <tu-button size="mini">
      <template #icon> <Edit /> </template>超小按钮</tu-button
    >
    <tu-button size="gogogo">GOGOGO</tu-button>

    <h4>加载中</h4>
    <tu-button type="primary" :loading="true">加载中</tu-button>
    <tu-button :loading="true">加载中</tu-button>

    <h4>圆型</h4>

    <tu-button circle>
      <template #icon>
        <Edit />
      </template>
    </tu-button>
    <tu-button circle size="large">
      <template #icon>
        <Edit />
      </template>
    </tu-button>
    <tu-button circle size="small">
      <template #icon>
        <Edit />
      </template>
    </tu-button>
    <tu-button circle size="mini">
      <template #icon>
        <Edit />
      </template>
    </tu-button>
    <br />
    <br />
    <tu-icon class="is-loading" color="red" size="20">
      <Loading />
    </tu-icon>
    <br />
    <tu-icon>
      <template #prefix>
        <span>设置</span>
      </template>
      <Edit />
    </tu-icon>
  </div>
</template>

<script lang="ts" setup>
import { Edit, Loading } from '@tu-view-plus/icons-vue';

function handleButtonClick() {
  console.log('handleButtonClick');
}
</script>