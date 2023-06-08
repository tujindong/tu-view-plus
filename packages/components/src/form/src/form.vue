<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { formProps } from './form'
import '../style/form.scss';

defineOptions({
  name: 'TuForm',
})

const props = defineProps(formProps)

</script>
