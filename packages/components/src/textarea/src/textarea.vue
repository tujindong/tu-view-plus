<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { textareaProps } from './textarea'
import '../style/textarea.scss';

defineOptions({
  name: 'TuTextarea',
})

const props = defineProps(textareaProps)

</script>
