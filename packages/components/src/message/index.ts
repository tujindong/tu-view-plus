import { withInstallFunction } from '@tu-view-plus/utils';
import Message from './src/methods';

export const TuMessage = withInstallFunction(Message, '$message');
export default TuMessage;

export * from './src/message';
