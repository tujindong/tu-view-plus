import type { CollapseActiveName } from './collapse';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    readonly accordion: BooleanConstructor;
    readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number | CollapseActiveName[]) | (() => import("./collapse").CollapseModelValue) | ((new (...args: any[]) => string | number | CollapseActiveName[]) | (() => import("./collapse").CollapseModelValue))[], unknown, unknown, () => [], boolean>;
    readonly effect: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "flat" | "inset" | "outset" | "bordered" | "outlined") | (() => "flat" | "inset" | "outset" | "bordered" | "outlined") | ((new (...args: any[]) => "flat" | "inset" | "outset" | "bordered" | "outlined") | (() => "flat" | "inset" | "outset" | "bordered" | "outlined"))[], "flat" | "inset" | "outset" | "bordered" | "outlined", unknown, "outset", boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (value: import("./collapse").CollapseModelValue) => void;
    "update:modelValue": (value: import("./collapse").CollapseModelValue) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly accordion: BooleanConstructor;
    readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number | CollapseActiveName[]) | (() => import("./collapse").CollapseModelValue) | ((new (...args: any[]) => string | number | CollapseActiveName[]) | (() => import("./collapse").CollapseModelValue))[], unknown, unknown, () => [], boolean>;
    readonly effect: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "flat" | "inset" | "outset" | "bordered" | "outlined") | (() => "flat" | "inset" | "outset" | "bordered" | "outlined") | ((new (...args: any[]) => "flat" | "inset" | "outset" | "bordered" | "outlined") | (() => "flat" | "inset" | "outset" | "bordered" | "outlined"))[], "flat" | "inset" | "outset" | "bordered" | "outlined", unknown, "outset", boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
}>> & {
    onChange?: ((value: import("./collapse").CollapseModelValue) => any) | undefined;
    "onUpdate:modelValue"?: ((value: import("./collapse").CollapseModelValue) => any) | undefined;
}, {
    readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
    readonly effect: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "flat" | "inset" | "outset" | "bordered" | "outlined") | (() => "flat" | "inset" | "outset" | "bordered" | "outlined") | ((new (...args: any[]) => "flat" | "inset" | "outset" | "bordered" | "outlined") | (() => "flat" | "inset" | "outset" | "bordered" | "outlined"))[], "flat" | "inset" | "outset" | "bordered" | "outlined", unknown>;
    readonly modelValue: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | CollapseActiveName[]) | (() => import("./collapse").CollapseModelValue) | ((new (...args: any[]) => string | number | CollapseActiveName[]) | (() => import("./collapse").CollapseModelValue))[], unknown, unknown>;
    readonly accordion: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
