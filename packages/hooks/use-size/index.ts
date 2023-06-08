import { Ref, inject, InjectionKey, computed, unref } from 'vue';
import { buildProp } from '@tu-view-plus/utils';
import { SIZES } from '@tu-view-plus/constants';

import type { Size } from '@tu-view-plus/constants';

export const useSizeProp = buildProp({
  type: String,
  values: SIZES,
  required: false
});

export const useSizeProps = {
  size: useSizeProp
};

export interface SizeContext {
  size: Ref<Size>;
}

export const SIZE_INJECTION_KEY: InjectionKey<SizeContext> = Symbol('size');

export const useGlobalSize = () => {
  const injectedSize = inject(SIZE_INJECTION_KEY, {} as SizeContext);

  return computed<Size>(() => {
    return unref(injectedSize.size) || '';
  });
};
