<template>
  <tu-dropdown>
    <tu-button>Dropdown list</tu-button>
    <template #content>
      <tu-dropdown-item>Option 1</tu-dropdown-item>
      <tu-dropdown-submenu value="option-1">
        <template #default>Option 2</template>
        <template #content>
          <tu-dropdown-item>Option 2-1</tu-dropdown-item>
          <tu-dropdown-submenu value="option-2-2" trigger="hover">
            <template #default>Option 2-2</template>
            <template #content>
              <tu-dropdown-item>Option 2-1</tu-dropdown-item>
              <tu-dropdown-item>Option 2-2</tu-dropdown-item>
              <tu-dropdown-item>Option 2-3</tu-dropdown-item>
            </template>
            <template #footer>
              <div style="padding: 6px; text-align: center">
                <tu-button>confrim</tu-button>
              </div>
            </template>
          </tu-dropdown-submenu>
          <tu-dropdown-item>Option 2-3</tu-dropdown-item>
        </template>
      </tu-dropdown-submenu>
      <tu-dropdown-item>Option 3</tu-dropdown-item>
    </template>
  </tu-dropdown>
</template>
