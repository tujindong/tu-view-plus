import { MaybeRef } from '@vueuse/core';
import { Size } from '@tu-view-plus/constants';
export declare const useFormSize: (fallback?: MaybeRef<Size | undefined>, ignore?: Partial<Record<'prop' | 'form' | 'formItem' | 'global', boolean>>) => import("vue").ComputedRef<"" | "small" | "medium" | "large" | "mini">;
export declare const useFormDisabled: (fallback?: MaybeRef<boolean | undefined>) => import("vue").ComputedRef<boolean>;
export declare const useSize: (fallback?: MaybeRef<Size | undefined>, ignore?: Partial<Record<'prop' | 'form' | 'formItem' | 'global', boolean>>) => import("vue").ComputedRef<"" | "small" | "medium" | "large" | "mini">;
export declare const useDisabled: (fallback?: MaybeRef<boolean | undefined>) => import("vue").ComputedRef<boolean>;
