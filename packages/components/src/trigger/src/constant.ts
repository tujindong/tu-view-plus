import type { InjectionKey } from 'vue';

export interface TriggerContext {
  onMouseenter: (ev: MouseEvent) => void;
  onMouseleave: (ev: MouseEvent) => void;
  addChildRef: (ref: any) => void;
  removeChildRef: (ref: any) => void;
}

export const TRIGGER_EVENTS = [
  'hover',
  'click',
  'focus',
  'contextMenu'
] as const;

export const TRIGGER_POSITIONS = [
  'top',
  'tl',
  'tr',
  'bottom',
  'bl',
  'br',
  'left',
  'lt',
  'lb',
  'right',
  'rt',
  'rb'
] as const;

export type TriggerEvent = (typeof TRIGGER_EVENTS)[number];

export type TriggerPosition = (typeof TRIGGER_POSITIONS)[number];

export type TriggerPopupTranslate =
  | [number, number]
  | { [key in TriggerPosition]?: [number, number] };

export const triggerInjectionKey: InjectionKey<TriggerContext> =
  Symbol('TuTriggerInjectKey');
