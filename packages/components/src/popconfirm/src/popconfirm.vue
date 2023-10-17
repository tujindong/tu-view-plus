<template>
  <tu-trigger
    show-arrow
    trigger="click"
    animation-name="zoom-in-fade-out"
    auto-fit-transform-origin
    :class="popconfirmClasses"
    :position="position"
    :popup-visible="popconfirmVisibleComputed"
    :popup-offset="14"
    :popup-container="popupContainer"
    :content-class="contentClasses"
    :content-style="contentStyle"
    :arrow-class="arrowClasses"
    :arrow-style="arrowStyle"
    @popup-visible-change="handlePopconfirmVisibleChange"
  >
    <slot />
    <template #content>
      <div :class="nsPopconfirm.e('body')">
        <span v-if="type" :class="[nsPopconfirm.e('icon'), typeClass]">
          <tu-icon v-if="iconComponent">
            <component :is="iconComponent" />
          </tu-icon>
        </span>
        <span :class="nsPopconfirm.e('content')">
          <slot name="content">{{ content }}</slot>
        </span>
      </div>
      <div :class="nsPopconfirm.e('footer')">
        <tu-button
          size="small"
          v-bind="cancelButtonProps"
          @click="handleCancel"
        >
          {{ cancelText || t('tu.modal.cancel') }}
        </tu-button>
        <tu-button
          size="small"
          type="primary"
          v-bind="okButtonProps"
          :loading="okLoadingComputed"
          @click="handleOk"
        >
          {{ okText || t('tu.modal.confirm') }}
        </tu-button>
      </div>
    </template>
  </tu-trigger>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { popconfirmProps, popconfirmEmits } from './popconfirm';
import { TuTrigger } from '../../trigger';
import TuIcon from '../../icon';
import TuButton from '../../button';
import { useNamespace, useLocale } from '@tu-view-plus/hooks';
import {
  isFunction,
  isPromise,
  isBoolean,
  TypeComponentsMap
} from '@tu-view-plus/utils';
import '../style/popconfirm.scss';

let promiseNumber = 0;

defineOptions({
  name: 'TuPopconfirm'
});

const props = defineProps(popconfirmProps);
const emit = defineEmits(popconfirmEmits);

const { t } = useLocale();

const nsPopconfirm = useNamespace('popconfirm');

const visibleRef = ref(props.defaultPopupVisible);
const okLoadingRef = ref(false);

const popconfirmVisibleComputed = computed(
  () => props.popupVisible ?? visibleRef.value
);

const okLoadingComputed = computed(() => props.okLoading || okLoadingRef.value);

const iconComponent = computed(() => TypeComponentsMap[props.type] || '');

const typeClass = computed(() => {
  const type = props.type;
  return {
    [nsPopconfirm.em('icon', type)]: type && TypeComponentsMap[type]
  };
});

const popconfirmClasses = computed(() => ({
  [nsPopconfirm.b()]: true,
  [nsPopconfirm.m(props.size)]: props.size
}));

const contentClasses = computed(() => [
  nsPopconfirm.e('popup-content'),
  props.contentClass
]);

const arrowClasses = computed(() => [
  nsPopconfirm.e('popup-arrow'),
  props.arrowClass
]);

const close = () => {
  promiseNumber++;
  if (okLoadingRef.value) okLoadingRef.value = false;
  visibleRef.value = false;
  emit('update:popupVisible', false);
  emit('popupVisibleChange', false);
};

const handlePopconfirmVisibleChange = (visible: boolean) => {
  if (visible) {
    visibleRef.value = visible;
    emit('update:popupVisible', visible);
    emit('popupVisibleChange', visible);
  } else {
    close();
  }
};

const handleCancel = () => {
  let result = true;
  if (isFunction(props.onBeforeCancel))
    result = props.onBeforeCancel() ?? false;
  if (result) {
    emit('cancel');
    close();
  }
};

const handleOk = async () => {
  const currentPromiseNumber = promiseNumber;
  const closed = await new Promise<boolean>(async (resolve) => {
    if (isFunction(props.onBeforeOk)) {
      let result = props.onBeforeOk((closed = true) => resolve(closed));
      if (isPromise(result) || !isBoolean(result)) okLoadingRef.value = true;
      if (isPromise(result)) {
        try {
          result = (await result) ?? true;
        } catch (error) {
          result = false;
        }
      }
      if (isBoolean(result)) resolve(result);
    } else {
      resolve(true);
    }
  });

  if (currentPromiseNumber === promiseNumber) {
    if (closed) {
      emit('ok');
      close();
    } else if (okLoadingRef.value) {
      okLoadingRef.value = false;
    }
  }
};
</script>
