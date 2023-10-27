<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { avatarProps } from './avatar'
import '../style/avatar.scss';

defineOptions({
  name: 'TuAvatar',
})

const props = defineProps(avatarProps)

</script>
