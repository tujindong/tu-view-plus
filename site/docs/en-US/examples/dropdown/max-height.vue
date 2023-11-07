<template>
  <tu-dropdown>
    <tu-button>Default Height</tu-button>
    <template #content>
      <tu-dropdown-item v-for="i in 12" :key="i">
        Option {{ i + 1 }}
      </tu-dropdown-item>
    </template>
  </tu-dropdown>

  <tu-dropdown :popup-max-height="100">
    <tu-button>Specify the height</tu-button>
    <template #content>
      <tu-dropdown-item v-for="i in 12" :key="i">
        Option {{ i + 1 }}
      </tu-dropdown-item>
    </template>
  </tu-dropdown>

  <tu-dropdown :popup-max-height="false">
    <tu-button>Autosize Height</tu-button>
    <template #content>
      <tu-dropdown-item v-for="i in 12" :key="i">
        Option {{ i + 1 }}
      </tu-dropdown-item>
    </template>
  </tu-dropdown>
</template>
