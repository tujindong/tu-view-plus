<template>
  <tu-radio-group
    v-model="collapseEffect"
    type="button"
    style="margin-bottom: 20px"
  >
    <tu-radio label="line">Line</tu-radio>
    <tu-radio label="up">Up shadow</tu-radio>
    <tu-radio label="down">Down shadow</tu-radio>
  </tu-radio-group>

  <tu-collapse :effect="collapseEffect">
    <tu-collapse-item title="Tu view plus" name="1">
      Our mission has always been focused on bringing openness and transparency
      to the design process. We've always believed that by providing a space
      where designers can share ongoing work not only empowers them to make
      better products, it also helps them grow. We're proud to be a part of
      creating a more open culture and to continue building a product that
      supports this vision.
    </tu-collapse-item>
    <tu-collapse-item title="Tu view plus" name="2">
      Our mission has always been focused on bringing openness and transparency
      to the design process. We've always believed that by providing a space
      where designers can share ongoing work not only empowers them to make
      better products, it also helps them grow. We're proud to be a part of
      creating a more open culture and to continue building a product that
      supports this vision.
    </tu-collapse-item>
    <tu-collapse-item title="Tu view plus" name="3">
      Our mission has always been focused on bringing openness and transparency
      to the design process. We've always believed that by providing a space
      where designers can share ongoing work not only empowers them to make
      better products, it also helps them grow. We're proud to be a part of
      creating a more open culture and to continue building a product that
      supports this vision.
    </tu-collapse-item>
  </tu-collapse>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const collapseEffect = ref('line');
</script>
