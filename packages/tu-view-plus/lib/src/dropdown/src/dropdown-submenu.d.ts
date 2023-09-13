import type { ExtractPropTypes, PropType } from 'vue';
export declare const dropdownSubmenuProps: {
    readonly value: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly trigger: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ("hover" | "click" | ("hover" | "click")[]) & {}) | (() => "hover" | "click" | ("hover" | "click")[]) | ((new (...args: any[]) => ("hover" | "click" | ("hover" | "click")[]) & {}) | (() => "hover" | "click" | ("hover" | "click")[]))[], unknown, unknown, "click", boolean>;
    readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ("lt" | "rt") & {}) | (() => "lt" | "rt") | ((new (...args: any[]) => ("lt" | "rt") & {}) | (() => "lt" | "rt"))[], unknown, unknown, "rt", boolean>;
    readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly optionProps: {
        readonly type: PropType<Record<string, any>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export declare const dropdownSubmenuEmits: {
    'update:popupVisible': (visible: boolean) => boolean;
    /**
     * @zh 下拉框显示状态发生改变时触发
     * @en Triggered when the display status of the drop-down box changes
     * @property {boolean} visible
     */
    popupVisibleChange: (visible: boolean) => boolean;
};
export declare type DropdownSubmenuProps = ExtractPropTypes<typeof dropdownSubmenuProps>;
export declare type DropdownSubmenuEmit = typeof dropdownSubmenuEmits;
