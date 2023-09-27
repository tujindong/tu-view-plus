import { InjectionKey } from 'vue';

import type { Slots } from 'vue';

export const tabsPosition = ['left', 'right', 'top', 'bottom'] as const;
export type TabsPosition = (typeof tabsPosition)[number];

export const tabsType = [
  'line',
  'card',
  'slider',
  'text',
  'button',
  'button-round'
] as const;
export type TabsType = (typeof tabsType)[number];

export const tabDirection = ['horizontal', 'vertical'] as const;
export type TabDirection = (typeof tabDirection)[number];

export const tabTriggerEvent = ['click', 'hover'] as const;
export type TabTriggerEvent = (typeof tabTriggerEvent)[number];

export interface TabData {
  key: string | number;
  title?: string;
  disabled?: boolean;
  closable?: boolean;
  slots: Slots;
}

export interface TabsContext {
  lazyLoad: boolean;
  destroyOnHide: boolean;
  activeKey: string | number;
  addItem: (id: number, data: TabData) => void;
  removeItem: (id: number) => void;
  trigger: TabTriggerEvent;
}

export const tabsInjectionKey: InjectionKey<TabsContext> = Symbol('ArcoTabs');
