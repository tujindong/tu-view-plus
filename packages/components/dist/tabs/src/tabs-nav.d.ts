import type { ExtractPropTypes, PropType } from 'vue';
import type TabsNav from './tabs-nav.vue';
import type { TabData } from './constants';
export declare const tabsNavProps: {
    readonly tabs: {
        readonly type: PropType<TabData[]>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly direction: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown>>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly type: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "button" | "line" | "text" | "card-down" | "card-up" | "slider-down" | "slider-up" | "button-round") | (() => "button" | "line" | "text" | "card-down" | "card-up" | "slider-down" | "slider-up" | "button-round") | ((new (...args: any[]) => "button" | "line" | "text" | "card-down" | "card-up" | "slider-down" | "slider-up" | "button-round") | (() => "button" | "line" | "text" | "card-down" | "card-up" | "slider-down" | "slider-up" | "button-round"))[], unknown, unknown>>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly activeKey: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly activeIndex: {
        readonly type: PropType<number>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly position: {
        readonly type: PropType<string>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly showAddButton: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly editable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly animation: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly headerPadding: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
};
export declare const tabsNavEmits: {
    click: (key: string | number, evt: Event) => boolean;
    add: (ev: Event) => boolean;
    delete: (key: string | number, ev: Event) => boolean;
};
export type TabsNavProps = ExtractPropTypes<typeof tabsNavProps>;
export type TabsNavInstance = InstanceType<typeof TabsNav>;
export type TabsNavEmits = typeof tabsNavEmits;
