import type { ExtractPropTypes } from 'vue';
import type Tabs from './tabs.vue';
import type { Awaitable } from '@tu-view-plus/utils';
import type { TabPaneName, TabsPaneContext } from './constants';
export declare const tabsProps: {
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "card" | "border-card", unknown, "", boolean>;
    readonly activeName: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly closable: BooleanConstructor;
    readonly addable: BooleanConstructor;
    readonly modelValue: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly editable: BooleanConstructor;
    readonly tabPosition: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "top" | "bottom" | "left" | "right", unknown, "top", boolean>;
    readonly beforeLeave: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (newName: TabPaneName, oldName: TabPaneName) => Awaitable<void | boolean>) | (() => (newName: TabPaneName, oldName: TabPaneName) => Awaitable<void | boolean>) | {
        (): (newName: TabPaneName, oldName: TabPaneName) => Awaitable<void | boolean>;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (newName: TabPaneName, oldName: TabPaneName) => Awaitable<void | boolean>) | (() => (newName: TabPaneName, oldName: TabPaneName) => Awaitable<void | boolean>) | {
        (): (newName: TabPaneName, oldName: TabPaneName) => Awaitable<void | boolean>;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => true, boolean>;
    readonly stretch: BooleanConstructor;
};
export declare const tabsEmits: {
    "update:modelValue": (name: TabPaneName) => boolean;
    tabClick: (pane: TabsPaneContext, ev: Event) => boolean;
    tabChange: (name: TabPaneName) => boolean;
    edit: (paneName: TabPaneName | undefined, action: 'remove' | 'add') => boolean;
    tabRemove: (name: TabPaneName) => boolean;
    tabAdd: () => boolean;
};
export declare type TabsProps = ExtractPropTypes<typeof tabsProps>;
export declare type TabsInstance = InstanceType<typeof Tabs>;
export declare type TabsEmits = typeof tabsEmits;
