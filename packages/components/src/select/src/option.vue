<template>
  <li>
    option
    <slot></slot>
  </li>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'TuOption'
});
</script>