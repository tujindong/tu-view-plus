<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { uploadProps } from './upload'
import '../style/upload.scss';

defineOptions({
  name: 'TuUpload',
})

const props = defineProps(uploadProps)

</script>
