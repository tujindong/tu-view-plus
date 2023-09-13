import type { ExtractPropTypes, PropType } from 'vue';
export declare type EmitType<T> = T | T[];
export declare const dropdownPanelProps: {
    readonly loading: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly isEmpty: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly bottomOffset: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly onScroll: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => ((ev: Event) => void) | ((ev: Event) => void)[]) | (() => EmitType<(ev: Event) => void>) | ((new (...args: any[]) => ((ev: Event) => void) | ((ev: Event) => void)[]) | (() => EmitType<(ev: Event) => void>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onReachBottom: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => ((ev: Event) => void) | ((ev: Event) => void)[]) | (() => EmitType<(ev: Event) => void>) | ((new (...args: any[]) => ((ev: Event) => void) | ((ev: Event) => void)[]) | (() => EmitType<(ev: Event) => void>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export declare const dropdownPanelEmits: {
    scroll: ({ scrollTop, scrollLeft }: {
        scrollTop: number;
        scrollLeft: number;
    }) => boolean;
};
export declare type DropdownPanelProps = ExtractPropTypes<typeof dropdownPanelProps>;
export declare type DropdownPanelEmits = typeof dropdownPanelEmits;
