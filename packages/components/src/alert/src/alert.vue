<template>
  <transition :name="`${defaultNamespace}-fade`">
    <div role="alert" v-show="visible" :class="alertClasses">
      <tu-icon v-if="showIcon && iconComponent">
        <component :is="iconComponent" />
      </tu-icon>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { alertProps, alertEmits } from './alert';
import { useNamespace, defaultNamespace } from '@tu-view-plus/hooks';
import { TypeComponentsMap } from '@tu-view-plus/utils';
import { TuIcon } from '../../icon';
import '../style/alert.scss';

defineOptions({
  name: 'TuAlert'
});

const props = defineProps(alertProps);
const emit = defineEmits(alertEmits);

const nsAlert = useNamespace('alert');

const visible = ref(false);

const alertClasses = computed(() => ({
  [nsAlert.b()]: true,
  [nsAlert.m(props.effect)]: props.effect,
  [nsAlert.m(props.size)]: props.size,
  [nsAlert.is('center')]: props.center
}));

const iconComponent = computed(() => TypeComponentsMap[props.type]);
</script>
