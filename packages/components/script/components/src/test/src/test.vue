<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { testProps } from './test'
import '../style/test.scss';

defineOptions({
  name: 'TuTest',
})

const props = defineProps(testProps)

// init here
</script>
