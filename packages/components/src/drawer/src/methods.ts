import type { App, AppContext } from 'vue';
import { createVNode, nextTick, render } from 'vue';
import {
  getOverlay,
  isFunction,
  omit,
  getSlotFunction
} from '@tu-view-plus/utils';
import DrawerComponent from './drawer.vue';
import type {
  DrawerConfig,
  DrawerMethod,
  DrawerUpdateConfig
} from './interface';

const open = (config: DrawerConfig, appContext?: AppContext) => {
  let container: HTMLElement | null = getOverlay('drawer');

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

  const handleUpdateConfig = (config: DrawerUpdateConfig) => {
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
    DrawerComponent,
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
        header: typeof config.header === 'boolean' ? config.header : undefined,
        footer: typeof config.footer === 'boolean' ? config.footer : undefined
      }
    },
    {
      default: getSlotFunction(config.content),
      header:
        typeof config.header !== 'boolean'
          ? getSlotFunction(config.header)
          : undefined,
      title: getSlotFunction(config.title),
      footer:
        typeof config.footer !== 'boolean'
          ? getSlotFunction(config.footer)
          : undefined
    }
  );

  if (appContext ?? DrawerComponent._context) {
    vm.appContext = appContext ?? DrawerComponent._context;
  }

  render(vm, container);
  document.body.appendChild(container);

  return {
    close: handleReturnClose,
    update: handleUpdateConfig
  };
};

const Drawer: DrawerMethod = { open };

export type { DrawerMethod, DrawerConfig, DrawerReturn } from './interface';

export type DrawerInstance = InstanceType<typeof DrawerComponent>;

export default Drawer;
