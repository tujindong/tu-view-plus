<template>
  <div>
    <tu-button-group size="large">
      <tu-button>上一页</tu-button>
      <tu-button>中间页</tu-button>
      <tu-button>下一页</tu-button>
    </tu-button-group>

    <tu-button-group>
      <tu-button>上一页</tu-button>
      <tu-button>中间页</tu-button>
      <tu-button>下一页</tu-button>
    </tu-button-group>

    <tu-button-group type="primary">
      <tu-button>上一页</tu-button>
      <tu-button>中间页</tu-button>
      <tu-button>下一页</tu-button>
    </tu-button-group>

    <tu-button-group size="small">
      <tu-button>上一页</tu-button>
      <tu-button>下一页</tu-button>
    </tu-button-group>

    <tu-button-group size="mini">
      <tu-button>上一页</tu-button>
      <tu-button>下一页</tu-button>
    </tu-button-group>

    <!-- <br />

    <tu-icon class="is-loading" color="red" size="20">
      <Loading />
    </tu-icon>
    <br />
    <tu-icon>
      <template #prefix>
        <span>设置</span>
      </template>
      <Edit />
    </tu-icon> -->
  </div>
</template>

<script lang="ts" setup>
import { Edit, Loading } from '@tu-view-plus/icons-vue';

function handleButtonClick() {
  console.log('handleButtonClick');
}
</script>