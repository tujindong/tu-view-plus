<template>
  <tu-space>
    <tu-date-picker style="width: 268px" v-model="value">
      <tu-button>{{ value || 'Please select Date' }}</tu-button>
    </tu-date-picker>
    <tu-range-picker style="width: 268px" v-model="rangeValue">
      <tu-button>
        {{
          (rangeValue && rangeValue.join(' - ')) || 'Please select date range'
        }}
      </tu-button>
    </tu-range-picker>
  </tu-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref();
const rangeValue = ref();
</script>
