<template>
  <tu-row>
    <tu-col :span="1">
      <tu-icon size="18" color="#465eb8">
        <Search />
      </tu-icon>
    </tu-col>
    <tu-col :span="1">
      <tu-icon size="18" class="is-loading">
        <Tools />
      </tu-icon>
    </tu-col>
  </tu-row>
</template>

<script lang="ts" setup>
import { Search, Tools } from '@tu-view-plus/icons-vue';
</script>