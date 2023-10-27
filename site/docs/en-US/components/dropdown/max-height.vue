<template>
  <tu-dropdown>
    <tu-button>默认高度</tu-button>
    <template #content>
      <tu-dropdown-item v-for="i in 12" :key="i">
        选项{{ i + 1 }}
      </tu-dropdown-item>
    </template>
  </tu-dropdown>

  <tu-dropdown :popup-max-height="100">
    <tu-button>指定高度</tu-button>
    <template #content>
      <tu-dropdown-item v-for="i in 12" :key="i">
        选项{{ i + 1 }}
      </tu-dropdown-item>
    </template>
  </tu-dropdown>

  <tu-dropdown :popup-max-height="false">
    <tu-button>内容高度</tu-button>
    <template #content>
      <tu-dropdown-item v-for="i in 12" :key="i">
        选项{{ i + 1 }}
      </tu-dropdown-item>
    </template>
  </tu-dropdown>
</template>