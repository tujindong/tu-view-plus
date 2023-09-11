import type { VNode } from 'vue';
import type { NotificationOptions, Notify } from './notification';
export declare function close(id: string, position: NotificationOptions['position'], userOnClose?: (vm: VNode) => void): void;
export declare function closeAll(): void;
declare const _default: Notify;
export default _default;
