import type { ExtractPropTypes, PropType } from 'vue';
export declare const layoutSiderProps: {
    readonly collapsed: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly defaultCollapsed: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly collapsible: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly width: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
    readonly collapsedWidth: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 56, boolean>;
    readonly reverseArrow: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly breakpoint: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "xxl" | "xl" | "lg" | "md" | "sm" | "xs") | (() => "xxl" | "xl" | "lg" | "md" | "sm" | "xs") | ((new (...args: any[]) => "xxl" | "xl" | "lg" | "md" | "sm" | "xs") | (() => "xxl" | "xl" | "lg" | "md" | "sm" | "xs"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly resizeDirections: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ("bottom" | "left" | "right" | "top")[]) | (() => ("bottom" | "left" | "right" | "top")[]) | ((new (...args: any[]) => ("bottom" | "left" | "right" | "top")[]) | (() => ("bottom" | "left" | "right" | "top")[]))[], unknown, unknown, undefined, boolean>;
    readonly hideTrigger: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export declare const layoutSiderEmits: string[];
export type LayoutSiderProps = ExtractPropTypes<typeof layoutSiderProps>;
