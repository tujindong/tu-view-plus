import { createVNode, render } from 'vue';
import {
  debugWarn,
  isClient,
  isHTMLElement,
  isString,
  isVNode
} from '@tu-view-plus/utils';
import NotificationConstructor from './notification.vue';
import { notificationTypes } from './constants';

import type { AppContext, Ref, VNode } from 'vue';
import type {
  NotificationOptions,
  NotificationProps,
  NotificationQueue,
  Notify,
  NotifyFn
} from './notification';

const notifications: Record<
  NotificationOptions['position'],
  NotificationQueue
> = {
  tl: [],
  tr: [],
  bl: [],
  br: []
};

const GAP_SIZE = 16;
let seed = 1;

const notify: NotifyFn & Partial<Notify> & { _context: AppContext | null } =
  function (options = {}, context: AppContext | null = null) {
    if (!isClient) return { close: () => undefined };

    if (typeof options === 'string' || isVNode(options)) {
      options = { message: options };
    }

    const position = options.position || 'tr';

    let verticalOffset = options.offset || 0;
    notifications[position].forEach(({ vm }) => {
      verticalOffset += (vm.el?.offsetHeight || 0) + GAP_SIZE;
    });
    verticalOffset += GAP_SIZE;

    const id = `notification_${seed++}`;
    const userOnClose = options.onClose;
    const props: Partial<NotificationProps> = {
      ...options,
      offset: verticalOffset,
      id,
      onClose: () => {
        close(id, position, userOnClose);
      }
    };

    let appendTo: HTMLElement | null = document.body;
    if (isHTMLElement(options.appendTo)) {
      appendTo = options.appendTo;
    } else if (isString(options.appendTo)) {
      appendTo = document.querySelector(options.appendTo);
    }

    if (!isHTMLElement(appendTo)) {
      debugWarn(
        'ElNotification',
        'the appendTo option is not an HTMLElement. Falling back to document.body.'
      );
      appendTo = document.body;
    }

    const container = document.createElement('div');

    const vm = createVNode(
      NotificationConstructor,
      props,
      isVNode(props.message)
        ? {
            default: () => props.message
          }
        : null
    );
    vm.appContext = context ?? notify._context;
    vm.props!.onDestroy = () => {
      render(null, container);
    };

    render(vm, container);
    notifications[position].push({ vm });
    appendTo.appendChild(container.firstElementChild!);

    return {
      close: () => {
        (vm.component!.exposed as { visible: Ref<boolean> }).visible.value =
          false;
      }
    };
  };
notificationTypes.forEach((type) => {
  notify[type] = (options = {}) => {
    if (typeof options === 'string' || isVNode(options)) {
      options = {
        message: options
      };
    }
    return notify({
      ...options,
      type
    });
  };
});

/**
 * This function gets called when user click `x` button or press `esc` or the time reached its limitation.
 * Emitted by transition@before-leave event so that we can fetch the current notification.offsetHeight, if this was called
 * by @after-leave the DOM element will be removed from the page thus we can no longer fetch the offsetHeight.
 * @param {String} id notification id to be closed
 * @param {Position} position the positioning strategy
 * @param {Function} userOnClose the callback called when close passed by user
 */
export function close(
  id: string,
  position: NotificationOptions['position'],
  userOnClose?: (vm: VNode) => void
): void {
  const orientedNotifications = notifications[position];
  const idx = orientedNotifications.findIndex(
    ({ vm }) => vm.component?.props.id === id
  );
  if (idx === -1) return;
  const { vm } = orientedNotifications[idx];
  if (!vm) return;
  userOnClose?.(vm);

  const removedHeight = vm.el!.offsetHeight;
  const verticalPos = position.split('-')[0];
  orientedNotifications.splice(idx, 1);
  const len = orientedNotifications.length;
  if (len < 1) return;
  for (let i = idx; i < len; i++) {
    const { el, component } = orientedNotifications[i].vm;
    const pos =
      Number.parseInt(el!.style[verticalPos], 10) - removedHeight - GAP_SIZE;
    component!.props.offset = pos;
  }
}

export function closeAll(): void {
  for (const orientedNotifications of Object.values(notifications)) {
    orientedNotifications.forEach(({ vm }) => {
      (vm.component!.exposed as { visible: Ref<boolean> }).visible.value =
        false;
    });
  }
}

notify.closeAll = closeAll;
notify._context = null;

export default notify as Notify;
