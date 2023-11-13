import { MaybeRef } from '@vueuse/core';
import type { ConfigProviderContext } from '../constants';
import type { App, Ref } from 'vue';
export declare function useGlobalConfig<K extends keyof ConfigProviderContext, D extends ConfigProviderContext[K]>(key: K, defaultValue?: D): Ref<Exclude<ConfigProviderContext[K], undefined> | D>;
export declare function useGlobalConfig(): Ref<ConfigProviderContext>;
export declare const provideGlobalConfig: (config: MaybeRef<ConfigProviderContext>, app?: App, global?: boolean) => import("vue").ComputedRef<Partial<import("../config-provider-props").ConfigProviderProps>> | undefined;
export declare function useGlobalComponentSettings(block: string, sizeFallback?: MaybeRef<ConfigProviderContext['size']>): {
    ns: {
        derivedNamespace: import("vue").ComputedRef<string>;
        namespace: string;
        b: () => string;
        e: (element: string) => string;
        m: (modifier: string) => string;
        em: (element: string, modifier: string) => string;
        is: {
            (name: string, state: boolean | undefined): string;
            (name: string): string;
        };
    };
    locale: import("@tu-view-plus/hooks").LocaleContext;
    zIndex: {
        initialZIndex: import("vue").ComputedRef<number>;
        currentZIndex: import("vue").ComputedRef<number>;
        nextZIndex: () => number;
    };
    size: import("vue").ComputedRef<"small" | "medium" | "large" | "mini">;
};
