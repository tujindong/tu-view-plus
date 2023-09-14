<template>
  <tu-dropdown>
    <tu-button>多级菜单</tu-button>
    <template #content>
      <tu-dropdown-item>选项1</tu-dropdown-item>
      <tu-dropdown-submenu value="option-1">
        <template #default>选项2</template>
        <template #content>
          <tu-dropdown-item>选项2-1</tu-dropdown-item>
          <tu-dropdown-submenu value="option-2-2" trigger="hover">
            <template #default>选项2-2</template>
            <template #content>
              <tu-dropdown-item>选项2-1</tu-dropdown-item>
              <tu-dropdown-item>选项2-2</tu-dropdown-item>
              <tu-dropdown-item>选项2-3</tu-dropdown-item>
            </template>
            <template #footer>
              <div style="padding: 6px; text-align: center">
                <tu-button>确定</tu-button>
              </div>
            </template>
          </tu-dropdown-submenu>
          <tu-dropdown-item>选项2-3</tu-dropdown-item>
        </template>
      </tu-dropdown-submenu>
      <tu-dropdown-item>选项3</tu-dropdown-item>
    </template>
  </tu-dropdown>
</template>