import { withInstallFunction } from '@tu-view-plus/utils';
import Message from './src/message.vue';

export const TuMessage = withInstallFunction(Message, '$message');
export default TuMessage;

export * from './src/message';
