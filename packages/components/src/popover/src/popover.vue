<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { popoverProps } from './popover'
import '../style/popover.scss';

defineOptions({
  name: 'TuPopover',
})

const props = defineProps(popoverProps)

</script>
