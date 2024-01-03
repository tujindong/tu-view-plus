<template>
  <div :class="nsPicker.e('dropdown-footer')">
    <div v-if="$slots.extra" :class="nsPicker.e('dropdown-footer-extra-wrap')">
      <slot name="extra" />
    </div>
    <div v-if="showTodayBtn" :class="nsPicker.e('dropdown-footer-now-wrap')">
      <tu-button type="text" @click="onTodayClick">
        {{ datePickerTransform('tu.datepicker.today') }}
      </tu-button>
    </div>
    <div
      v-if="$slots.btn || showConfirmBtn"
      :class="nsPicker.e('dropdown-footer-button-wrap')"
    >
      <slot name="button" />
      <tu-button
        v-if="showConfirmBtn"
        type="primary"
        size="mini"
        :class="`${prefixCls}-btn-confirm`"
        :disabled="confirmBtnDisabled"
        @click="onConfirmBtnClick"
      >
        {{ datePickerTransform('datePicker.ok') }}
      </tu-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { footerProps, footerEmits } from './footer';
import { useNamespace } from '@tu-view-plus/hooks';
import { useDatePickerTransform } from '../hooks';
import { TuButton } from '../../../button';

defineOptions({
  name: 'TuFooter'
});

const props = defineProps(footerProps);
const emit = defineEmits(footerEmits);

const nsPicker = useNamespace('picker');

const datePickerTransform = useDatePickerTransform();

const onTodayClick = () => {
  emit('today-btn-click');
};

const onConfirmBtnClick = () => {
  emit('confirm-btn-click');
};
</script>
