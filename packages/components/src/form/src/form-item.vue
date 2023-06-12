<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue';
import { formItemProps } from './form-item';
import { formContextKey, formItemContextKey } from './constants';
defineOptions({
  name: 'TuFormItem'
});

const props = defineProps(formItemProps);

const formContext = inject(formContextKey, undefined);
</script>
