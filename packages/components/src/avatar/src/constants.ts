import type { InjectionKey } from 'vue';
import type { AvatarGroupProps } from './avatar-group';

export interface AvatarGroupContext {
  shape?: AvatarGroupProps['shape'];
  size?: AvatarGroupProps['size'];
  autoFixFontSize?: AvatarGroupProps['autoFixFontSize'];
  zIndexAscend?: AvatarGroupProps['zIndexAscend'];
  total: number;
}

export const avatarGroupInjectionKey: InjectionKey<AvatarGroupContext> =
  Symbol('tuButtonGroup');

export const shape = ['square', 'circle'] as const;
export const triggerType = ['mask', 'button'] as const;
export const avartEffects = [
  'outset',
  'inset',
  'bordered',
  'outlined',
  'flat'
] as const;

export type Shape = (typeof shape)[number];
export type TriggerType = (typeof triggerType)[number];
