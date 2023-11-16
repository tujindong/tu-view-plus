import type { CollapseActiveName } from './collapse';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    readonly accordion: BooleanConstructor;
    readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number | CollapseActiveName[]) | (() => import("./collapse").CollapseModelValue) | ((new (...args: any[]) => string | number | CollapseActiveName[]) | (() => import("./collapse").CollapseModelValue))[], unknown, unknown, () => [], boolean>;
    readonly effect: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "line" | "up" | "down") | (() => "line" | "up" | "down") | ((new (...args: any[]) => "line" | "up" | "down") | (() => "line" | "up" | "down"))[], "line" | "up" | "down", unknown, "line", boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "large" | "medium", never>>;
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
    readonly effect: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "line" | "up" | "down") | (() => "line" | "up" | "down") | ((new (...args: any[]) => "line" | "up" | "down") | (() => "line" | "up" | "down"))[], "line" | "up" | "down", unknown, "line", boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "large" | "medium", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
}>> & {
    onChange?: ((value: import("./collapse").CollapseModelValue) => any) | undefined;
    "onUpdate:modelValue"?: ((value: import("./collapse").CollapseModelValue) => any) | undefined;
}, {
    readonly modelValue: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | CollapseActiveName[]) | (() => import("./collapse").CollapseModelValue) | ((new (...args: any[]) => string | number | CollapseActiveName[]) | (() => import("./collapse").CollapseModelValue))[], unknown, unknown>;
    readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "large" | "medium", never>;
    readonly effect: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "line" | "up" | "down") | (() => "line" | "up" | "down") | ((new (...args: any[]) => "line" | "up" | "down") | (() => "line" | "up" | "down"))[], "line" | "up" | "down", unknown>;
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
