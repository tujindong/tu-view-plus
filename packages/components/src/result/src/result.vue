<template>
  <div :class="nsResult.b()">
    <div :class="resultClasses">
      <div :class="nsResult.e('icon-tip')">
        <slot name="icon">
          <tu-icon
            v-if="
              iconComponent &&
              (status === 'info' ||
                status === 'success' ||
                status === 'warning' ||
                status === 'error')
            "
            :class="typeClass"
            size="40"
          >
            <component :is="iconComponent" />
          </tu-icon>

          <ResultForbidden v-else-if="status === '403'" />
          <ResultNotFound v-else-if="status === '404'" />
          <ResultServerError v-else-if="status === '500'" />
        </slot>
      </div>
    </div>
    <div v-if="title || $slots.title" :class="nsResult.e('title')">
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <div v-if="subtitle || $slots.subtitle" :class="nsResult.e('subtitle')">
      <slot name="subtitle">
        {{ subtitle }}
      </slot>
    </div>
    <div v-if="$slots.extra" :class="nsResult.e('extra')">
      <slot name="extra"> </slot>
    </div>
    <div v-if="$slots.default" :class="nsResult.e('content')">
      <slot> </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { resultProps } from './result';
import { useNamespace } from '@tu-view-plus/hooks';
import { TypeComponentsMap } from '@tu-view-plus/utils';
import { TuIcon } from '../../icon';
import ResultForbidden from './result-forbidden.vue';
import ResultNotFound from './result-not-found.vue';
import ResultServerError from './result-server-error.vue';

import '../style/result.scss';

defineOptions({
  name: 'TuResult'
});

const props = defineProps(resultProps);

const nsResult = useNamespace('result');

const resultClasses = computed(() => ({
  [nsResult.e('icon')]: true,
  [nsResult.e('icon-custom')]: !props.status,
  [nsResult.em('icon', props.status)]: props.status
}));

const iconComponent = computed(() => TypeComponentsMap[props.status] || '');

const typeClass = computed(() => {
  const statusType = props.status;
  return {
    [nsResult.em('icon', statusType)]:
      statusType && TypeComponentsMap[statusType]
  };
});
</script>
