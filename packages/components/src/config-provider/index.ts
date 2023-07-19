import { withInstall } from '@tu-view-plus/utils';
import ConfigProvider from './src/config-provider';

export const TuConfigProvider = withInstall(ConfigProvider);
export default TuConfigProvider;

export * from './src/config-provider';
export * from './src/config-provider-props';
export * from './src/constants';
export * from './src/hooks/use-global-config';
