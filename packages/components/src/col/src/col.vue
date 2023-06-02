<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { colProps } from './col'
import '../style/col.scss';

defineOptions({
  name: 'TuCol',
})

const props = defineProps(colProps)

</script>
