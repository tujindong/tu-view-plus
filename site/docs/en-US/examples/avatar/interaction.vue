<template>
  <tu-space size="large">
    <tu-avatar
      :trigger-icon-style="{ color: '#3491FA' }"
      :auto-fix-font-size="false"
      @click="toast"
      :style="{ backgroundColor: '#168CFF' }"
    >
      A
      <template #trigger-icon>
        <tu-icon>
          <Service />
        </tu-icon>
      </template>
    </tu-avatar>
    <tu-avatar @click="toast" :style="{ backgroundColor: '#14C9C9' }">
      <tu-icon>
        <User />
      </tu-icon>
      <template #trigger-icon>
        <tu-icon>
          <Edit />
        </tu-icon>
      </template>
    </tu-avatar>
    <tu-avatar
      @click="toast"
      shape="square"
      :style="{ backgroundColor: '#FFC72E' }"
    >
      <tu-icon>
        <User />
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
import { Service, User, Edit } from '@tu-view-plus/icons-vue';
import { TuMessage } from 'tu-view-plus';
const toast = () => {
  TuMessage('这是一条消息。');
};
</script>

<style lang="scss" scoped></style>
