<template>
  <transition :name="`${defaultNamespace}-opacity`">
    <div role="alert" v-show="visible" :class="alertClasses">
      <div :class="nsAlert.e('icon-type')">
        <tu-icon v-if="showIcon && iconComponent">
          <component :is="iconComponent" />
        </tu-icon>
      </div>

      <div :class="nsAlert.e('content')">
        <span v-if="title || $slots.title" :class="nsAlert.e('title')">
          <slot name="title">{{ title }}</slot>
        </span>

        <div
          v-if="$slots.default || description"
          :class="nsAlert.e('description')"
        >
          <slot>{{ description }}</slot>
        </div>
      </div>

      <template v-if="closable">
        <div
          v-if="closeText"
          :class="nsAlert.e('icon-close')"
          @click="handleClose"
        >
          {{ closeText }}
        </div>
        <tu-icon v-else :class="nsAlert.e('icon-close')" @click="handleClose">
          <Close />
        </tu-icon>
      </template>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref, computed, useSlots } from 'vue';
import { alertProps, alertEmits } from './alert';
import { useNamespace, defaultNamespace } from '@tu-view-plus/hooks';
import { TypeComponentsMap } from '@tu-view-plus/utils';
import { TuIcon } from '../../icon';
import { Close } from '@tu-view-plus/icons-vue';
import '../style/alert.scss';

defineOptions({
  name: 'TuAlert'
});

const props = defineProps(alertProps);
const emit = defineEmits(alertEmits);

const nsAlert = useNamespace('alert');

const slots = useSlots();

const visible = ref(true);

const alertClasses = computed(() => ({
  [nsAlert.b()]: true,
  [nsAlert.m(props.type)]: props.type,
  [nsAlert.m(props.size)]: props.size,
  [nsAlert.m(props.effect)]: props.effect,
  [nsAlert.is('center')]: props.center,
  [nsAlert.is('with-description')]: props.description || slots.default
}));

const iconComponent = computed(() => TypeComponentsMap[props.type]);

const handleClose = (evt: MouseEvent) => {
  visible.value = false;
  emit('close', evt);
};
</script>
