<template>
  <template v-if="descriptions.direction === 'vertical'">
    <tr>
      <template v-for="(cell, index) in row" :key="`tr1-${index}`">
        <TuDescriptionsCell :cell="cell" tag="th" type="label" />
      </template>
    </tr>
    <tr>
      <template v-for="(cell, index) in row" :key="`tr2-${index}`">
        <TuDescriptionsCell :cell="cell" tag="td" type="content" />
      </template>
    </tr>
  </template>
  <tr v-else>
    <template v-for="(cell, index) in row" :key="`tr3-${index}`">
      <template v-if="descriptions.border">
        <TuDescriptionsCell :cell="cell" tag="th" type="label" />
        <TuDescriptionsCell :cell="cell" tag="td" type="content" />
      </template>
      <TuDescriptionsCell v-else :cell="cell" tag="td" type="both" />
    </template>
  </tr>
</template>

<script lang="ts" setup>
import { inject } from 'vue';
import { descriptionsInjectionKey, IDescriptionsInject } from './constants';
import { descriptionsRowProps } from './descriptions-row';
import TuDescriptionsCell from './descriptions-cell';

defineOptions({
  name: 'TuDescriptionsRow'
});

const props = defineProps(descriptionsRowProps);

const descriptions = inject(descriptionsInjectionKey, {} as IDescriptionsInject);
</script>
