import { computed, getCurrentInstance, inject, provide, ref, unref } from 'vue';
import { MaybeRef } from '@vueuse/core';
import { configProviderContextKey } from '../constants';
import {
  SIZE_INJECTION_KEY,
  defaultNamespace,
  defaultInitialZIndex,
  localeContextKey,
  namespaceContextKey,
  zIndexContextKey,
  useNamespace,
  useLocale,
  useZIndex
} from '@tu-view-plus/hooks';
import { debugWarn, keysOf } from '@tu-view-plus/utils';

import type { ConfigProviderContext } from '../constants';
import type { App, Ref } from 'vue';

const globalConfig = ref<ConfigProviderContext>();

const mergeConfig = (
  a: ConfigProviderContext,
  b: ConfigProviderContext
): ConfigProviderContext => {
  const keys = [...new Set([...keysOf(a), ...keysOf(b)])];
  const obj: Record<string, any> = {};
  for (const key of keys) {
    obj[key] = b[key] ?? a[key];
  }
  return obj;
};

export function useGlobalConfig<
  K extends keyof ConfigProviderContext,
  D extends ConfigProviderContext[K]
>(
  key: K,
  defaultValue?: D
): Ref<Exclude<ConfigProviderContext[K], undefined> | D>;

export function useGlobalConfig(): Ref<ConfigProviderContext>;

export function useGlobalConfig(
  key?: keyof ConfigProviderContext,
  defaultValue = undefined
) {
  const config = getCurrentInstance()
    ? inject(configProviderContextKey, globalConfig)
    : globalConfig;
  if (key) {
    return computed(() => config.value?.[key] ?? defaultValue);
  } else {
    return config;
  }
}

export const provideGlobalConfig = (
  config: MaybeRef<ConfigProviderContext>,
  app?: App,
  global = false
) => {
  const inSetup = !!getCurrentInstance();
  const oldConfig = inSetup ? useGlobalConfig() : undefined;

  const provideFn = app?.provide ?? (inSetup ? provide : undefined);
  if (!provideFn) {
    debugWarn(
      'provideGlobalConfig',
      'provideGlobalConfig() can only be used inside setup().'
    );
    return;
  }

  const context = computed(() => {
    const cfg = unref(config);
    if (!oldConfig?.value) return cfg;
    return mergeConfig(oldConfig.value, cfg);
  });
  provideFn(configProviderContextKey, context);
  provideFn(
    localeContextKey,
    computed(() => context.value.locale)
  );
  provideFn(
    namespaceContextKey,
    computed(() => context.value.namespace)
  );
  provideFn(
    zIndexContextKey,
    computed(() => context.value.zIndex)
  );

  provideFn(SIZE_INJECTION_KEY, {
    size: computed(() => context.value.size || '')
  });

  if (global || !globalConfig.value) {
    globalConfig.value = context.value;
  }
  return context;
};

// for components like `TuMessage` `TuNotification` `TuMessageBox`
export function useGlobalComponentSettings(
  block: string,
  sizeFallback?: MaybeRef<ConfigProviderContext['size']>
) {
  const config = useGlobalConfig();

  const ns = useNamespace(
    block,
    computed(() => config.value?.namespace || defaultNamespace)
  );

  const locale = useLocale(computed(() => config.value?.locale));

  const zIndex = useZIndex(
    computed(() => config.value?.zIndex || defaultInitialZIndex)
  );

  const size = computed(
    () => unref(sizeFallback) || config.value?.size || 'medium'
  );

  provideGlobalConfig(computed(() => unref(config) || {}));

  return {
    ns,
    locale,
    zIndex,
    size
  };
}
