<template>
  <tu-space size="large">
    <tu-avatar
      :trigger-icon-style="{ color: '#5e7ce0' }"
      :auto-fix-font-size="false"
      @click="toast"
    >
      A
      <template #trigger-icon>
        <tu-icon>
          <Edit />
        </tu-icon>
      </template>
    </tu-avatar>

    <tu-avatar :trigger-icon-style="{ color: '#5e7ce0' }" @click="toast">
      <tu-icon size="20">
        <UserFilled />
      </tu-icon>
      <template #trigger-icon>
        <tu-icon>
          <Edit />
        </tu-icon>
      </template>
    </tu-avatar>

    <tu-avatar
      shape="square"
      :trigger-icon-style="{ color: '#5e7ce0' }"
      @click="toast"
    >
      <tu-icon size="20">
        <UserFilled />
      </tu-icon>
      <template #trigger-icon>
        <tu-icon>
          <Edit />
        </tu-icon>
      </template>
    </tu-avatar>

    <tu-avatar trigger-type="mask">
      <img
        alt="avatar"
        src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
      />
      <template #trigger-icon>
        <tu-icon>
          <Edit />
        </tu-icon>
      </template>
    </tu-avatar>
  </tu-space>
</template>

<script lang="ts" setup>
import { UserFilled, Edit } from '@tu-view-plus/icons-vue';
import { TuMessage } from 'tu-view-plus';

const toast = () => {
  TuMessage('Edit');
};
</script>
