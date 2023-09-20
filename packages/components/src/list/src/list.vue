<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { listProps } from './list'
import '../style/list.scss';

defineOptions({
  name: 'TuList',
})

const props = defineProps(listProps)

</script>
