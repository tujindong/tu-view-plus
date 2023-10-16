import type { InjectionKey, Ref } from 'vue';
import type { CollapseActiveName } from './collapse';

export const collapseTypes = ['line', 'neumorphic'] as const;

export interface CollapseContext {
  activeNames: Ref<CollapseActiveName[]>;
  size: String;
  handleItemClick: (name: CollapseActiveName) => void;
}

export const collapseContextKey: InjectionKey<CollapseContext> =
  Symbol('collapseContextKey');

export type CollapseTypes = (typeof collapseTypes)[number];
