declare const _default: import("vue").DefineComponent<{
    readonly color: {
        readonly type: import("vue").PropType<import("./interface").Color>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly alpha: {
        readonly type: import("vue").PropType<number>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly colorString: StringConstructor;
    readonly disabled: BooleanConstructor;
    readonly disabledAlpha: BooleanConstructor;
    readonly showHistory: BooleanConstructor;
    readonly showPreset: BooleanConstructor;
    readonly format: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "hex" | "rgb") | (() => "hex" | "rgb") | ((new (...args: any[]) => "hex" | "rgb") | (() => "hex" | "rgb"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly historyColors: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => never[], boolean>;
    readonly presetColors: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => never[], boolean>;
    readonly onAlphaChange: {
        readonly type: import("vue").PropType<(alpha: number) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onHsvChange: {
        readonly type: import("vue").PropType<(hsv: import("./interface").HSV) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly color: {
        readonly type: import("vue").PropType<import("./interface").Color>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly alpha: {
        readonly type: import("vue").PropType<number>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly colorString: StringConstructor;
    readonly disabled: BooleanConstructor;
    readonly disabledAlpha: BooleanConstructor;
    readonly showHistory: BooleanConstructor;
    readonly showPreset: BooleanConstructor;
    readonly format: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "hex" | "rgb") | (() => "hex" | "rgb") | ((new (...args: any[]) => "hex" | "rgb") | (() => "hex" | "rgb"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly historyColors: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => never[], boolean>;
    readonly presetColors: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => never[], boolean>;
    readonly onAlphaChange: {
        readonly type: import("vue").PropType<(alpha: number) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onHsvChange: {
        readonly type: import("vue").PropType<(hsv: import("./interface").HSV) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>>, {
    readonly showPreset: boolean;
    readonly showHistory: boolean;
    readonly disabled: boolean;
    readonly disabledAlpha: boolean;
    readonly historyColors: string[];
    readonly presetColors: string[];
}, {}>;
export default _default;
