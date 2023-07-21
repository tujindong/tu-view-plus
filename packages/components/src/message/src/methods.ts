import { createVNode, render } from 'vue';
import {
  debugWarn,
  isClient,
  isHTMLElement,
  isFunction,
  isNumber,
  isString,
  isVNode
} from '@tu-view-plus/utils';
import { messageConfig } from '../../config-provider';
import MessageConstructor from './message.vue';
import { messageDefaults } from './message';
import { messageTypes } from './constants';
import { instances } from './instance';

import type { MessageContext } from './instance';
import type { AppContext } from 'vue';
import type {
  Message,
  MessageFn,
  MessageHandler,
  MessageOptions,
  MessageParams,
  MessageParamsNormalized,
  messageType
} from './message';

let seed = 1;

const normalizeOptions = (params?: MessageParams) => {
  const options: MessageOptions =
    !params || isString(params) || isVNode(params) || isFunction(params)
      ? { message: params }
      : params;

  const normalized = {
    ...messageDefaults,
    ...options
  };

  if (!normalized.appendTo) {
    normalized.appendTo = document.body;
  } else if (isString(normalized.appendTo)) {
    let appendTo = document.querySelector<HTMLElement>(normalized.appendTo);

    if (!isHTMLElement(appendTo)) {
      debugWarn(
        'TuMessage',
        'the appendTo option is not an HTMLElement. Falling back to document.body.'
      );
      appendTo = document.body;
    }

    normalized.appendTo = appendTo;
  }

  return normalized as MessageParamsNormalized;
};

const closeMessage = (instance: MessageContext) => {
  const idx = instances.indexOf(instance);
  if (idx === -1) return;

  instances.splice(idx, 1);
  const { handler } = instance;
  handler.close();
};

const createMessage = (
  { appendTo, ...options }: MessageParamsNormalized,
  context?: AppContext | null
): MessageContext => {
  const id = `message_${seed++}`;
  const userOnClose = options.onClose;

  const container = document.createElement('div');

  const props = {
    ...options,
    id,
    onClose: () => {
      userOnClose?.();
      closeMessage(instance);
    },

    onDestroy: () => {
      render(null, container);
    }
  };
  const vnode = createVNode(
    MessageConstructor,
    props,
    isFunction(props.message) || isVNode(props.message)
      ? {
          default: isFunction(props.message)
            ? props.message
            : () => props.message
        }
      : null
  );
  vnode.appContext = context || message._context;

  render(vnode, container);

  appendTo.appendChild(container.firstElementChild!);

  const vm = vnode.component!;

  const handler: MessageHandler = {
    close: () => {
      vm.exposed!.visible.value = false;
    }
  };

  const instance: MessageContext = {
    id,
    vnode,
    vm,
    handler,
    props: (vnode.component as any).props
  };

  return instance;
};

const message: MessageFn &
  Partial<Message> & { _context: AppContext | null } = (
  options = {},
  context
) => {
  if (!isClient) return { close: () => undefined };

  if (isNumber(messageConfig.max) && instances.length >= messageConfig.max) {
    return { close: () => undefined };
  }

  const normalized = normalizeOptions(options);

  if (normalized.grouping && instances.length) {
    const instance = instances.find(
      ({ vnode: vm }) => vm.props?.message === normalized.message
    );
    if (instance) {
      instance.props.repeatNum += 1;
      instance.props.type = normalized.type;
      return instance.handler;
    }
  }

  const instance = createMessage(normalized, context);

  instances.push(instance);
  return instance.handler;
};

messageTypes.forEach((type) => {
  message[type] = (options = {}, appContext) => {
    const normalized = normalizeOptions(options);
    return message({ ...normalized, type }, appContext);
  };
});

export function closeAll(type?: messageType): void {
  for (const instance of instances) {
    if (!type || type === instance.props.type) {
      instance.handler.close();
    }
  }
}

message.closeAll = closeAll;
message._context = null;

export default message as Message;
