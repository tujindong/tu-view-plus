import type { ExtractPropTypes, PropType } from 'vue';
import type Dropdown from './dropdown.vue';
export declare const dropdownProps: {
    readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly trigger: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | ((new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]))[], unknown, unknown, "click", boolean>;
    readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "top" | "br" | "tr" | "bottom" | "tl" | "bl") | (() => "top" | "br" | "tr" | "bottom" | "tl" | "bl") | ((new (...args: any[]) => "top" | "br" | "tr" | "bottom" | "tl" | "bl") | (() => "top" | "br" | "tr" | "bottom" | "tl" | "bl"))[], unknown, unknown, "bottom", boolean>;
    readonly popupContainer: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly popupMaxHeight: import("@tu-view-plus/utils").EpPropFinalized<readonly [BooleanConstructor, NumberConstructor], unknown, unknown, true, boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly hideOnSelect: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
};
export declare const dropdownEmits: {
    'update:popupVisible': (visible: boolean) => boolean;
    popupVisibleChange: (visible: boolean) => boolean;
    select: (value: string | number | Record<string, any> | undefined, ev: Event) => boolean;
};
export type DropdownProps = ExtractPropTypes<typeof dropdownProps>;
export type DropdownInstance = InstanceType<typeof Dropdown>;
export type DropdownEmits = typeof dropdownEmits;
