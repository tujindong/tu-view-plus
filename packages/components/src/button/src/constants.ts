import type { InjectionKey } from 'vue';
import type { ButtonProps } from './button';

export interface ButtonGroupContext {
  size?: ButtonProps['size'];
  type?: ButtonProps['type'];
}

export const buttonGroupInjectionKey: InjectionKey<ButtonGroupContext> =
  Symbol('tuButtonGroup');
