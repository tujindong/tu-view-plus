import type { ExtractPropTypes, StyleValue } from 'vue';
import type Scrollbar from './scrollbar.vue';
export declare const scrollbarProps: {
    readonly height: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly maxHeight: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly native: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly wrapStyle: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => StyleValue & {}) | (() => StyleValue) | ((new (...args: any[]) => StyleValue & {}) | (() => StyleValue))[], unknown, unknown, "", boolean>;
    readonly wrapClass: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
    readonly viewClass: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
    readonly viewStyle: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
    readonly noresize: BooleanConstructor;
    readonly tag: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
    readonly always: BooleanConstructor;
    readonly minSize: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
};
export declare const scrollbarEmits: {
    scroll: ({ scrollTop, scrollLeft }: {
        scrollTop: number;
        scrollLeft: number;
    }) => boolean;
};
export declare type ScrollbarEmits = typeof scrollbarEmits;
export declare type ScrollbarProps = ExtractPropTypes<typeof scrollbarProps>;
export declare type ScrollbarInstance = InstanceType<typeof Scrollbar>;
