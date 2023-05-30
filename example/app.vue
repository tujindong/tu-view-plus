<template>
  <div>
    <tu-button type="primary" @click="handleButtonClick">primary</tu-button>
    <br />
    <br />
    <tu-button>Default</tu-button>
    <br />
    <br />
    <tu-button type="danger">Danger</tu-button>
    <br />
    <br />
    <tu-button type="warning">Warning</tu-button>
    <br />
    <br />
    <tu-button type="info">Info</tu-button>
    <br />
    <br />
    <tu-button type="success">Success</tu-button>
    <br />
    <br />
    <tu-button type="text">Text</tu-button>
    <br />
    禁用
    <br />
    <tu-button disabled>禁用</tu-button>
    <br />
    <br />
    <tu-button disabled type="danger">Danger</tu-button>
    <br />
    <br />
    <tu-button disabled type="warning">Warning</tu-button>
    <br />
    <br />
    <tu-button disabled type="info">Info</tu-button>
    <br />
    <br />
    <tu-button disabled type="success">Success</tu-button>
    <br />
    <br />
    <tu-button disabled type="text">Text</tu-button>

    <br />
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