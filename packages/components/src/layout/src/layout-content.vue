<template>
  <main :class="nsLayout.e('content')">
    <slot />
  </main>
</template>

<script lang="ts" setup>
import { useNamespace } from '@tu-view-plus/hooks';
import '../style/layout.scss';

defineOptions({
  name: 'TuLayoutContent'
});

const nsLayout = useNamespace('layout');
</script>
