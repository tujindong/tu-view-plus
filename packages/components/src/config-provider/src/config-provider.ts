import { defineComponent } from 'vue';
import { configProviderProps } from './config-provider-props';

const ConfigProvider = defineComponent({
  name: 'TuConfigProvider',

  props: configProviderProps,

  setup(props, { slots }) {}
});

export default ConfigProvider;
