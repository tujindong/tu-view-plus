<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { provide, reactive, toRefs } from 'vue';
import { formProps } from './form';
import { formContextKey } from './constants';
import '../style/form.scss';

defineOptions({
  name: 'TuForm'
});

const props = defineProps(formProps);

provide(formContextKey, reactive({ ...toRefs(props) }));
</script>
