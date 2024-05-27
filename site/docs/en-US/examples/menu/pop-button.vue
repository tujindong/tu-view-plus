<template>
  <div class="menu-demo">
    <tu-trigger
      :trigger="['click', 'hover']"
      :popupOffset="20"
      clickClose
      position="top"
      v-model:popupVisible="visible"
    >
      <tu-button class="menu-trigger-demo">Menu</tu-button>

      <template #content>
        <tu-menu style="width: 200px" mode="popButton" showCollapseButton>
          <tu-menu-item key="1">
            <template #icon>
              <tu-icon>
                <Menu />
              </tu-icon>
            </template>
            Navigation 1
          </tu-menu-item>
          <tu-menu-item key="2">
            <template #icon>
              <tu-icon>
                <Tools />
              </tu-icon>
            </template>
            Navigation 2
          </tu-menu-item>
        </tu-menu>
      </template>
    </tu-trigger>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Menu, Tools } from '@tu-view-plus/icons-vue';

const visible = ref(false);
</script>

<style lang="scss" scoped>
.menu-demo {
  position: relative;
  box-sizing: border-box;
  width: 660px;
  height: 180px;
  padding: 40px;
}
.menu-trigger-demo{
  position: absolute;
  bottom: 20px;
}
</style>
