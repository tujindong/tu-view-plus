<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { layoutProps } from './layout'
import '../style/layout.scss';

defineOptions({
  name: 'TuLayout',
})

const props = defineProps(layoutProps)

</script>
