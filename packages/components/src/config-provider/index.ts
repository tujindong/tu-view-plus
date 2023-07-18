import { withInstall } from '@tu-view-plus/utils';
import ConfigProvider from './src/config-provider';

export const TuConfigProvider = withInstall(ConfigProvider);
export default TuConfigProvider;

export * from './src/config-provider';
