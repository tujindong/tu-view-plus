import { MaybeRef } from '@vueuse/core';
import { Size } from '@tu-view-plus/constants';
export declare const useFormSize: (fallback?: MaybeRef<Size | undefined>, ignore?: Partial<Record<'prop' | 'form' | 'formItem' | 'global', boolean>>) => import("vue").ComputedRef<"" | "small" | "mini" | "medium" | "large">;
export declare const useFormDisabled: (fallback?: MaybeRef<boolean | undefined>) => import("vue").ComputedRef<boolean>;
