<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { breadcrumbProps } from './breadcrumb'
import '../style/breadcrumb.scss';

defineOptions({
  name: 'TuBreadcrumb',
})

const props = defineProps(breadcrumbProps)

</script>
