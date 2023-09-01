<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { drawerProps } from './drawer'
import '../style/drawer.scss';

defineOptions({
  name: 'TuDrawer',
})

const props = defineProps(drawerProps)

</script>
