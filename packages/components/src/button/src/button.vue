<template>
  <button class="tu-button">1233<slot /></button>
</template>

<script lang="ts" setup>
import { useNamespace } from '@tu-view-plus/hooks';
import '../style/index.scss';
defineOptions({ name: 'TuButton' });

const ns = useNamespace('button');
console.log('ns', ns.b());
</script>

