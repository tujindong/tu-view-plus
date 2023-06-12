import { computed, ref } from 'vue';
import { debugWarn, ensureArray } from '@tu-view-plus/utils';
import type { Arrayable } from '@tu-view-plus/utils';
import type { FormItemContext } from './types';
import type { FormItemProp } from './form-item';

const SCOPE = 'TuForm';

export function useFormLabelWidth() {
  const potentialLabelWidthArr = ref<number[]>([]);

  const autoLabelWidth = computed(() => {
    if (!potentialLabelWidthArr.value.length) return '0';
    const max = Math.max(...potentialLabelWidthArr.value);
    return max ? `${max}px` : '';
  });

  function getLabelWidthIndex(width: number) {
    const index = potentialLabelWidthArr.value.indexOf(width);
    if (index === -1 && autoLabelWidth.value === '0') {
      debugWarn(SCOPE, `unexpected width ${width}`);
    }
    return index;
  }

  function registerLabelWidth(val: number, oldVal: number) {
    if (val && oldVal) {
      const index = getLabelWidthIndex(oldVal);
      potentialLabelWidthArr.value.splice(index, 1, val);
    } else if (val) {
      potentialLabelWidthArr.value.push(val);
    }
  }

  function deregisterLabelWidth(val: number) {
    const index = getLabelWidthIndex(val);
    if (index > -1) {
      potentialLabelWidthArr.value.splice(index, 1);
    }
  }

  return {
    autoLabelWidth,
    registerLabelWidth,
    deregisterLabelWidth
  };
}

export const filterFields = (
  fields: FormItemContext[],
  props: Arrayable<FormItemProp>
) => {
  const normalized = ensureArray(props);
  return normalized.length > 0
    ? fields.filter((field) => field.prop && normalized.includes(field.prop))
    : fields;
};
