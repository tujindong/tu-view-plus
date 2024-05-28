<template>
  <tu-layout class="layout-demo">
    <tu-layout-sider collapsible breakpoint="xl">
      <div class="logo" />
      <tu-menu style="width: 200px" :default-selected-keys="['1']">
        <tu-menu-item key="1">
          <template #icon>
            <tu-icon>
              <Menu />
            </tu-icon>
          </template>
          导航一
        </tu-menu-item>
        <tu-menu-item key="2">
          <template #icon>
            <tu-icon>
              <Tools />
            </tu-icon>
          </template>
          导航二
        </tu-menu-item>
        <tu-sub-menu key="3" title="导航三">
          <template #icon>
            <tu-icon>
              <UploadFilled />
            </tu-icon>
          </template>
          <tu-menu-item-group title="分组一">
            <tu-menu-item key="3-1">选项一</tu-menu-item>
            <tu-menu-item key="3-2">选项二</tu-menu-item>
          </tu-menu-item-group>
          <tu-menu-item-group title="分组二">
            <tu-menu-item key="3-3">选项三</tu-menu-item>
            <tu-menu-item key="3-4">选项四</tu-menu-item>
          </tu-menu-item-group>
        </tu-sub-menu>
        <tu-menu-item key="4">
          <template #icon>
            <tu-icon>
              <Promotion />
            </tu-icon>
          </template>
          导航四
        </tu-menu-item>
      </tu-menu>
      <template #trigger="{ collapsed }">
        <IconCaretRight v-if="collapsed"></IconCaretRight>
        <IconCaretLeft v-else></IconCaretLeft>
      </template>
    </tu-layout-sider>
    <tu-layout>
      <tu-layout-header style="padding-left: 20px;">
        Header
      </tu-layout-header>
      <tu-layout style="padding: 0 24px;">
        <tu-breadcrumb :style="{ margin: '16px 0' }">
          <tu-breadcrumb-item>Home</tu-breadcrumb-item>
          <tu-breadcrumb-item>List</tu-breadcrumb-item>
          <tu-breadcrumb-item>App</tu-breadcrumb-item>
        </tu-breadcrumb>
        <tu-layout-content>Content</tu-layout-content>
        <tu-layout-footer>Footer</tu-layout-footer>
      </tu-layout>
    </tu-layout>
  </tu-layout>
</template>

<script lang="ts" setup>

</script>