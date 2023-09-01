import { nextTick, render, createVNode } from 'vue';
import { messageTypes } from '../../message';
import {
  isFunction,
  getSlotFunction,
  omit,
  getOverlay
} from '@tu-view-plus/utils';
import { ModalConfig, ModalUpdateConfig, ModalMethod } from './interface';
import ModalComponent from './modal.vue';

import type { AppContext, App } from 'vue';

const open = (config: ModalConfig, appContext?: AppContext) => {
  let container: HTMLElement | null = getOverlay('modal');

  const handleOk = () => {
    if (vm.component) {
      vm.component.props.visible = false;
    }

    if (isFunction(config.onOk)) {
      config.onOk();
    }
  };

  const handleCancel = () => {
    if (vm.component) {
      vm.component.props.visible = false;
    }

    if (isFunction(config.onCancel)) {
      config.onCancel();
    }
  };

  const handleClose = async () => {
    await nextTick();
    if (container) {
      render(null, container);
      document.body.removeChild(container);
    }
    container = null;

    if (isFunction(config.onClose)) {
      config.onClose();
    }
  };

  const handleReturnClose = () => {
    if (vm.component) {
      vm.component.props.visible = false;
    }
  };

  const handleUpdateConfig = (config: ModalUpdateConfig) => {
    if (vm.component) {
      Object.entries(config).forEach(([key, value]) => {
        vm.component!.props[key] = value;
      });
    }
  };

  const defaultConfig = {
    visible: true,
    renderToBody: false,
    unmountOnClose: true,
    onOk: handleOk,
    onCancel: handleCancel,
    onClose: handleClose
  };

  const vm = createVNode(
    ModalComponent,
    {
      ...defaultConfig,
      ...omit(config, [
        'content',
        'title',
        'footer',
        'visible',
        'unmountOnClose',
        'onOk',
        'onCancel',
        'onClose'
      ]),
      ...{
        footer: typeof config.footer === 'boolean' ? config.footer : undefined
      }
    },
    {
      default: getSlotFunction(config.content),
      title: getSlotFunction(config.title),
      footer:
        typeof config.footer !== 'boolean'
          ? getSlotFunction(config.footer)
          : undefined
    }
  );

  if (appContext ?? ModalComponent._context) {
    vm.appContext = appContext ?? ModalComponent._context;
  }

  render(vm, container);
  document.body.appendChild(container);

  return {
    close: handleReturnClose,
    update: handleUpdateConfig
  };
};

const Modal: ModalMethod = {
  open,
  confirm: (config: ModalConfig, appContext?: AppContext) => {
    const modalConfig = { simple: true, ...config };

    return open(modalConfig, appContext);
  },
  ...messageTypes.reduce((pre, value) => {
    pre[value] = (config: ModalConfig, appContext?: AppContext) => {
      const modalConfig = {
        simple: true,
        hideCancel: true,
        messageType: value,
        ...config
      };
      return open(modalConfig, appContext);
    };

    return pre;
  }, {} as Pick<ModalMethod, 'info' | 'success' | 'warning' | 'error'>)
};

export default Modal;
