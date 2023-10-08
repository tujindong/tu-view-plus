import type { ExtractPropTypes, PropType } from 'vue';
import type TabsNavIndicate from './tabs-nav-indicate.vue';
export declare const tabsNavIndicateProps: {
    readonly activeTabRef: {
        readonly type: PropType<HTMLElement>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly direction: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => ("horizontal" | "vertical") & {}) | (() => "horizontal" | "vertical") | ((new (...args: any[]) => ("horizontal" | "vertical") & {}) | (() => "horizontal" | "vertical"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: BooleanConstructor;
    readonly animation: BooleanConstructor;
};
export declare type TabsNavIndicateProps = ExtractPropTypes<typeof tabsNavIndicateProps>;
export declare type TabsNavIndicateInstance = InstanceType<typeof TabsNavIndicate>;
