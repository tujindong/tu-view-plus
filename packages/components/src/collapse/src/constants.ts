import type { InjectionKey, Ref } from 'vue';
import type { CollapseActiveName } from './collapse';

export const collapseEffects = ['line', 'down', 'up'] as const;

export interface CollapseContext {
  activeNames: Ref<CollapseActiveName[]>;
  handleItemClick: (name: CollapseActiveName) => void;
}

export const collapseContextKey: InjectionKey<CollapseContext> =
  Symbol('collapseContextKey');

export type CollapseEffects = (typeof collapseEffects)[number];
