<template>
  <div class="demo-block">
    <div>{{ title }}</div>
    <!-- copy your demo source code -->
    <div @click="handleCopy">Copy Code</div>
    <!-- The description is rendered in the desc slot -->
    <slot name="desc" />
    <!-- The demo is rendered in the default slot -->
    <slot />
    <!-- highlighted code for the demo -->
    <div class="language-vue" v-html="highlightedHtml"></div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
  sfcTsCode: string;
  sfcJsCode: string;
  sfcTsHtml: string;
  sfcJsHtml: string;
  title: string;
  metadata: object;
}>();

const sfcCode = computed(() =>
  decodeURIComponent(props.sfcTsCode || props.sfcJsCode)
);

const highlightedHtml = computed(() =>
  decodeURIComponent(props.sfcTsHtml || props.sfcJsHtml)
);

function handleCopy() {
  navigator.clipboard.writeText(sfcCode.value);
}
</script>

