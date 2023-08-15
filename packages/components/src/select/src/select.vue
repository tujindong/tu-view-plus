<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { selectProps } from './select'
import '../style/select.scss';

defineOptions({
  name: 'TuSelect',
})

const props = defineProps(selectProps)

</script>
