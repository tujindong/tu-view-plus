export declare const TuCollapse: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        readonly accordion: BooleanConstructor;
        readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number | import("./src/collapse").CollapseActiveName[]) | (() => import("./src/collapse").CollapseModelValue) | ((new (...args: any[]) => string | number | import("./src/collapse").CollapseActiveName[]) | (() => import("./src/collapse").CollapseModelValue))[], unknown, unknown, () => [], boolean>;
        readonly effect: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "line" | "up" | "down") | (() => "line" | "up" | "down") | ((new (...args: any[]) => "line" | "up" | "down") | (() => "line" | "up" | "down"))[], "line" | "up" | "down", unknown, "line", boolean>;
        readonly size: {
            readonly default: "medium";
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            readonly __epPropKey: true;
        };
    }>> & {
        onChange?: ((value: import("./src/collapse").CollapseModelValue) => any) | undefined;
        "onUpdate:modelValue"?: ((value: import("./src/collapse").CollapseModelValue) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (value: import("./src/collapse").CollapseModelValue) => void;
        "update:modelValue": (value: import("./src/collapse").CollapseModelValue) => void;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        readonly accordion: BooleanConstructor;
        readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number | import("./src/collapse").CollapseActiveName[]) | (() => import("./src/collapse").CollapseModelValue) | ((new (...args: any[]) => string | number | import("./src/collapse").CollapseActiveName[]) | (() => import("./src/collapse").CollapseModelValue))[], unknown, unknown, () => [], boolean>;
        readonly effect: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "line" | "up" | "down") | (() => "line" | "up" | "down") | ((new (...args: any[]) => "line" | "up" | "down") | (() => "line" | "up" | "down"))[], "line" | "up" | "down", unknown, "line", boolean>;
        readonly size: {
            readonly default: "medium";
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            readonly __epPropKey: true;
        };
    }>> & {
        onChange?: ((value: import("./src/collapse").CollapseModelValue) => any) | undefined;
        "onUpdate:modelValue"?: ((value: import("./src/collapse").CollapseModelValue) => any) | undefined;
    }, {
        readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
        readonly modelValue: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | import("./src/collapse").CollapseActiveName[]) | (() => import("./src/collapse").CollapseModelValue) | ((new (...args: any[]) => string | number | import("./src/collapse").CollapseActiveName[]) | (() => import("./src/collapse").CollapseModelValue))[], unknown, unknown>;
        readonly effect: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "line" | "up" | "down") | (() => "line" | "up" | "down") | ((new (...args: any[]) => "line" | "up" | "down") | (() => "line" | "up" | "down"))[], "line" | "up" | "down", unknown>;
        readonly accordion: boolean;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly accordion: BooleanConstructor;
        readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number | import("./src/collapse").CollapseActiveName[]) | (() => import("./src/collapse").CollapseModelValue) | ((new (...args: any[]) => string | number | import("./src/collapse").CollapseActiveName[]) | (() => import("./src/collapse").CollapseModelValue))[], unknown, unknown, () => [], boolean>;
        readonly effect: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "line" | "up" | "down") | (() => "line" | "up" | "down") | ((new (...args: any[]) => "line" | "up" | "down") | (() => "line" | "up" | "down"))[], "line" | "up" | "down", unknown, "line", boolean>;
        readonly size: {
            readonly default: "medium";
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            readonly __epPropKey: true;
        };
    }>> & {
        onChange?: ((value: import("./src/collapse").CollapseModelValue) => any) | undefined;
        "onUpdate:modelValue"?: ((value: import("./src/collapse").CollapseModelValue) => any) | undefined;
    }, {}, {}, {}, {}, {
        readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
        readonly modelValue: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | import("./src/collapse").CollapseActiveName[]) | (() => import("./src/collapse").CollapseModelValue) | ((new (...args: any[]) => string | number | import("./src/collapse").CollapseActiveName[]) | (() => import("./src/collapse").CollapseModelValue))[], unknown, unknown>;
        readonly effect: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "line" | "up" | "down") | (() => "line" | "up" | "down") | ((new (...args: any[]) => "line" | "up" | "down") | (() => "line" | "up" | "down"))[], "line" | "up" | "down", unknown>;
        readonly accordion: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly accordion: BooleanConstructor;
    readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number | import("./src/collapse").CollapseActiveName[]) | (() => import("./src/collapse").CollapseModelValue) | ((new (...args: any[]) => string | number | import("./src/collapse").CollapseActiveName[]) | (() => import("./src/collapse").CollapseModelValue))[], unknown, unknown, () => [], boolean>;
    readonly effect: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "line" | "up" | "down") | (() => "line" | "up" | "down") | ((new (...args: any[]) => "line" | "up" | "down") | (() => "line" | "up" | "down"))[], "line" | "up" | "down", unknown, "line", boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
}>> & {
    onChange?: ((value: import("./src/collapse").CollapseModelValue) => any) | undefined;
    "onUpdate:modelValue"?: ((value: import("./src/collapse").CollapseModelValue) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (value: import("./src/collapse").CollapseModelValue) => void;
    "update:modelValue": (value: import("./src/collapse").CollapseModelValue) => void;
}, string, {
    readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
    readonly modelValue: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | import("./src/collapse").CollapseActiveName[]) | (() => import("./src/collapse").CollapseModelValue) | ((new (...args: any[]) => string | number | import("./src/collapse").CollapseActiveName[]) | (() => import("./src/collapse").CollapseModelValue))[], unknown, unknown>;
    readonly effect: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "line" | "up" | "down") | (() => "line" | "up" | "down") | ((new (...args: any[]) => "line" | "up" | "down") | (() => "line" | "up" | "down"))[], "line" | "up" | "down", unknown>;
    readonly accordion: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
export declare const TuCollapseItem: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        readonly title: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly extra: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly name: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number) | (() => import("./src/collapse").CollapseActiveName) | ((new (...args: any[]) => string | number) | (() => import("./src/collapse").CollapseActiveName))[], unknown, unknown, () => number, boolean>;
        readonly disabled: BooleanConstructor;
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        readonly title: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly extra: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly name: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number) | (() => import("./src/collapse").CollapseActiveName) | ((new (...args: any[]) => string | number) | (() => import("./src/collapse").CollapseActiveName))[], unknown, unknown, () => number, boolean>;
        readonly disabled: BooleanConstructor;
    }>>, {
        readonly disabled: boolean;
        readonly title: string;
        readonly name: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => import("./src/collapse").CollapseActiveName) | ((new (...args: any[]) => string | number) | (() => import("./src/collapse").CollapseActiveName))[], unknown, unknown>;
        readonly extra: string;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly title: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly extra: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly name: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number) | (() => import("./src/collapse").CollapseActiveName) | ((new (...args: any[]) => string | number) | (() => import("./src/collapse").CollapseActiveName))[], unknown, unknown, () => number, boolean>;
        readonly disabled: BooleanConstructor;
    }>>, {}, {}, {}, {}, {
        readonly disabled: boolean;
        readonly title: string;
        readonly name: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => import("./src/collapse").CollapseActiveName) | ((new (...args: any[]) => string | number) | (() => import("./src/collapse").CollapseActiveName))[], unknown, unknown>;
        readonly extra: string;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly title: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly extra: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly name: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number) | (() => import("./src/collapse").CollapseActiveName) | ((new (...args: any[]) => string | number) | (() => import("./src/collapse").CollapseActiveName))[], unknown, unknown, () => number, boolean>;
    readonly disabled: BooleanConstructor;
}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    readonly disabled: boolean;
    readonly title: string;
    readonly name: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => import("./src/collapse").CollapseActiveName) | ((new (...args: any[]) => string | number) | (() => import("./src/collapse").CollapseActiveName))[], unknown, unknown>;
    readonly extra: string;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        title?(_: {}): any;
        extra?(_: {}): any;
        default?(_: {}): any;
    };
})> & Record<string, any>;
export default TuCollapse;
export * from './src/collapse';
