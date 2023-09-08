import { withInstallFunction } from '@tu-view-plus/utils';
import Notification from './src/notify';

export const TuNotification = withInstallFunction(Notification, '$notify');
export default TuNotification;

export * from './src/notification';
