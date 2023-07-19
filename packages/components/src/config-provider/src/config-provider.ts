import { defineComponent, watch, renderSlot } from 'vue';
import { provideGlobalConfig } from './hooks/use-global-config';
import { configProviderProps } from './config-provider-props';

import type { MessageConfigContext } from '../../message';

export const messageConfig: MessageConfigContext = {};

const ConfigProvider = defineComponent({
  name: 'TuConfigProvider',

  props: configProviderProps,

  setup(props, { slots }) {
    watch(
      () => props.message,
      (val) => {
        Object.assign(messageConfig, val ?? {});
      },
      { immediate: true, deep: true }
    );
    const config = provideGlobalConfig(props);
    return () => renderSlot(slots, 'default', { config: config?.value });
  }
});

export default ConfigProvider;
