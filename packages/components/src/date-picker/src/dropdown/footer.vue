<template>
  <div :class="nsPicker.e('dropdown-footer')">
    <div v-if="$slots.extra" :class="nsPicker.e('extra-wrap')">
      <slot name="extra" />
    </div>
    <div v-if="showTodayBtn" :class="nsPicker.e('now-wrap')">
      <tu-button type="text" @click="onTodayClick">
        {{ t('tu.datepicker.today') }}
      </tu-button>
    </div>
    <div v-if="$slots.btn || showConfirmBtn" :class="nsPicker.e('button-wrap')">
      <slot name="button" />
      <tu-button
        v-if="showConfirmBtn"
        type="primary"
        size="mini"
        :class="nsPicker.e('button-confirm')"
        :disabled="confirmBtnDisabled"
        @click="onConfirmBtnClick"
      >
        {{ t('tu.datepicker.confirm') }}
      </tu-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { footerProps, footerEmits } from './footer';
import { useNamespace, useLocale } from '@tu-view-plus/hooks';
import { TuButton } from '../../../button';

defineOptions({
  name: 'TuFooter'
});

const props = defineProps(footerProps);
const emit = defineEmits(footerEmits);

const nsPicker = useNamespace('picker');

const { t } = useLocale();

const onTodayClick = () => {
  emit('today-btn-click');
};

const onConfirmBtnClick = () => {
  emit('confirm-btn-click');
};
</script>
