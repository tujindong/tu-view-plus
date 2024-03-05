<template>
  <tu-image
    width="200"
    src="https://cdn.pixabay.com/photo/2020/04/04/03/42/paperwork-5000691_640.png"
    :preview-props="{
      actionsLayout: ['zoomIn', 'zoomOut', 'originalSize']
    }"
  >
    <template #preview-actions>
      <tu-preview-action name="下载">
        <tu-icon>
          <Download />
        </tu-icon>
      </tu-preview-action>
    </template>
  </tu-image>
</template>

<script lang="ts" setup>
import { Download } from '@tu-view-plus/icons-vue';
</script>
