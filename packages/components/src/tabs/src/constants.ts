import type { ComputedRef, InjectionKey, Ref, Slots, UnwrapRef } from 'vue';
import { isNumber, isString } from '@tu-view-plus/utils';
import type { TabsProps } from './tabs';
import type { TabPaneProps } from './tab-pane';

export const tabPositions = ['top', 'right', 'bottom', 'left'] as const;

export const tabTypes = ['card', 'border', 'line', 'tag'] as const;

export const isPaneName = (value: unknown): value is string | number =>
  isString(value) || isNumber(value);

export type TabPaneName = string | number;

export type TabsPaneContext = UnwrapRef<{
  uid: number;
  slots: Slots;
  props: TabPaneProps;
  paneName: ComputedRef<string | number | undefined>;
  active: ComputedRef<boolean>;
  index: Ref<string | undefined>;
  isClosable: ComputedRef<boolean>;
}>;

export interface TabsRootContext {
  props: TabsProps;
  currentName: Ref<string | number>;
  registerPane: (pane: TabsPaneContext) => void;
  unregisterPane: (uid: number) => void;
}

export const tabsRootContextKey: InjectionKey<TabsRootContext> =
  Symbol('tabsRootContextKey');
