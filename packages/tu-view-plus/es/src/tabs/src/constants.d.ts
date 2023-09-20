import type { ComputedRef, InjectionKey, Ref, Slots, UnwrapRef } from 'vue';
import type { TabsProps } from './tabs';
import type { TabPaneProps } from './tab-pane';
export declare const tabPositions: readonly ["top", "right", "bottom", "left"];
export declare const isPaneName: (value: unknown) => value is string | number;
export declare type TabPaneName = string | number;
export declare type TabsPaneContext = UnwrapRef<{
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
export declare const tabsRootContextKey: InjectionKey<TabsRootContext>;
