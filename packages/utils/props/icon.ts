import {
  CircleCheck,
  CircleClose,
  CircleCloseFilled,
  Close,
  InfoFilled,
  Loading,
  SuccessFilled,
  WarningFilled
} from '@tu-view-plus/icons-vue';
import { definePropType } from '../runtime';

import type { Component } from 'vue';

export const iconPropType = definePropType<string | Component>([
  String,
  Object,
  Function
]);

export const CloseComponents = {
  Close
};

export const TypeComponents = {
  Close,
  SuccessFilled,
  InfoFilled,
  WarningFilled,
  CircleCloseFilled
};

export const TypeComponentsMap = {
  success: SuccessFilled,
  warning: WarningFilled,
  error: CircleCloseFilled,
  info: InfoFilled
};

export const TypeMap = {
  success: 'success',
  warning: 'warning',
  error: 'danger',
  info: 'info'
};

export const ValidateComponentsMap = {
  validating: Loading,
  success: CircleCheck,
  error: CircleClose
};
