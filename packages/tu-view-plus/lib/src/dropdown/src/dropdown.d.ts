import type { ExtractPropTypes, PropType } from 'vue';
import type Dropdown from './dropdown.vue';
export declare const dropdownProps: {
    readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly trigger: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ("hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[]) & {}) | (() => "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[]) | ((new (...args: any[]) => ("hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[]) & {}) | (() => "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[]))[], unknown, unknown, "click", boolean>;
    readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ("top" | "tl" | "tr" | "bottom" | "bl" | "br") & {}) | (() => "top" | "tl" | "tr" | "bottom" | "bl" | "br") | ((new (...args: any[]) => ("top" | "tl" | "tr" | "bottom" | "bl" | "br") & {}) | (() => "top" | "tl" | "tr" | "bottom" | "bl" | "br"))[], unknown, unknown, "bottom", boolean>;
    readonly popupContainer: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement) | ((new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly popupMaxHeight: import("@tu-view-plus/utils").EpPropFinalized<readonly [BooleanConstructor, NumberConstructor], unknown, unknown, true, boolean>;
    readonly hideOnSelect: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
};
export declare const dropdownEmits: {
    'update:popupVisible': (visible: boolean) => boolean;
    popupVisibleChange: (visible: boolean) => boolean;
    select: (value: string | number | Record<string, any> | undefined, ev: Event) => boolean;
};
export declare type DropdownProps = ExtractPropTypes<typeof dropdownProps>;
export declare type DropdownInstance = InstanceType<typeof Dropdown>;
export declare type DropdownEmits = typeof dropdownEmits;
