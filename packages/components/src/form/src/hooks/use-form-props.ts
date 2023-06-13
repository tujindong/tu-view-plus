import { computed, inject, ref, unref } from 'vue';
import { useProp, useGlobalSize } from '@tu-view-plus/hooks';
import { formContextKey, formItemContextKey } from '../constants';

import { MaybeRef } from '@vueuse/core';
import { Size } from '@tu-view-plus/constants';

export const useFormSize = (
  fallback?: MaybeRef<Size | undefined>,
  ignore: Partial<Record<'prop' | 'form' | 'formItem' | 'global', boolean>> = {}
) => {
  const emptyRef = ref(undefined);
  const size = ignore.prop ? emptyRef : useProp<Size>('size');
  const globalConfig = ignore.global ? emptyRef : useGlobalSize();

  const form = ignore.form
    ? { size: undefined }
    : inject(formContextKey, undefined);
  const formItem = ignore.formItem
    ? { size: undefined }
    : inject(formItemContextKey, undefined);

  return computed(
    (): Size =>
      unref(fallback) ||
      size.value ||
      formItem?.size ||
      form?.size ||
      globalConfig.value ||
      ''
  );
};

export const useFormDisabled = (fallback?: MaybeRef<boolean | undefined>) => {
  const disabled = useProp<boolean>('disabled');
  const form = inject(formContextKey, undefined);
  return computed(
    () => disabled.value || unref(fallback) || form?.disabled || false
  );
};
