
<template>
  <tu-radio v-model="radio" :label="1">选项1</tu-radio>
  <tu-radio v-model="radio" :label="2">选项2</tu-radio>
  <div style="width: 300px; height: 300px"></div>
  <tu-button @click="toggleVisible()">按钮</tu-button>
  <br />
  <br />
  <tu-only-client>嗖嗖嗖嗖</tu-only-client>
  <br />
  <br />
  <Transition name="tu-fade-in">
    <div v-show="visible">测试 transition</div>
  </Transition>
  <br />
  <br />
  <div style="width: 300px; height: 300px"></div>
  <br />
  <tu-trigger position="top" auto-fit-position :unmount-on-close="false">
    <span>hover</span>
    <template #content>
      <div class="demo-basic">占位文字</div>
    </template>
  </tu-trigger>
  <br />
  <br />
  <tu-trigger position="top" auto-fit-position :unmount-on-close="false">
    <tu-radio v-model="radio" :label="1">选项1</tu-radio>
    <template #content>
      <div class="demo-basic">占位文字</div>
    </template>
  </tu-trigger>
  <br />
  <br />
  <tu-trigger position="top" auto-fit-position :unmount-on-close="false">
    <tu-button>Hover</tu-button>
    <template #content>
      <div class="demo-basic">占位文字</div>
    </template>
  </tu-trigger>
  <br />
  <br />
  <tu-trigger trigger="click" :unmount-on-close="false">
    <tu-button>Click Me</tu-button>
    <template #content>
      <div class="demo-basic">占位文字</div>
    </template>
  </tu-trigger>
  <br />
  <br />
  <tu-trigger trigger="focus">
    <input placeholder="Focus on me" />
    <template #content>
      <div class="demo-basic">占位文字</div>
    </template>
  </tu-trigger>
  <br />
  <br />
  <tu-trigger
    show-arrow
    trigger="click"
    position="top"
    auto-fit-position
    :unmount-on-close="false"
  >
    <span>show Arrow</span>
    <template #content>
      <div class="demo-basic">占位文字</div>
    </template>
  </tu-trigger>
  <div style="width: 300px; height: 300px"></div>
</template>
  
<script lang="ts" setup>
import { Transition, ref } from 'vue';
import { useToggle } from '@vueuse/core';

const [visible, toggleVisible] = useToggle();

const radio = ref(1);
</script>
<style lang="scss">
</style>
  