export declare const TuAvatar: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        shape: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "circle" | "square") | (() => "circle" | "square") | ((new (...args: any[]) => "circle" | "square") | (() => "circle" | "square"))[], "circle" | "square", unknown, string, boolean>;
        imageUrl: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        size: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
        autoFixFontSize: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
        triggerType: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "mask" | "button") | (() => "mask" | "button") | ((new (...args: any[]) => "mask" | "button") | (() => "mask" | "button"))[], "mask" | "button", unknown, string, boolean>;
        triggerIconStyle: {
            readonly type: import("vue").PropType<import("vue").CSSProperties>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        effect: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "line" | "up" | "down", unknown, string, boolean>;
        background: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        color: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
    }>> & {
        onLoad?: (() => any) | undefined;
        onError?: (() => any) | undefined;
        onClick?: ((e: Event) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (e: Event) => void;
        error: () => void;
        load: () => void;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        shape: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "circle" | "square") | (() => "circle" | "square") | ((new (...args: any[]) => "circle" | "square") | (() => "circle" | "square"))[], "circle" | "square", unknown, string, boolean>;
        imageUrl: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        size: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
        autoFixFontSize: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
        triggerType: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "mask" | "button") | (() => "mask" | "button") | ((new (...args: any[]) => "mask" | "button") | (() => "mask" | "button"))[], "mask" | "button", unknown, string, boolean>;
        triggerIconStyle: {
            readonly type: import("vue").PropType<import("vue").CSSProperties>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        effect: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "line" | "up" | "down", unknown, string, boolean>;
        background: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        color: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
    }>> & {
        onLoad?: (() => any) | undefined;
        onError?: (() => any) | undefined;
        onClick?: ((e: Event) => any) | undefined;
    }, {
        size: number;
        effect: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "line" | "up" | "down", unknown>;
        shape: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "circle" | "square") | (() => "circle" | "square") | ((new (...args: any[]) => "circle" | "square") | (() => "circle" | "square"))[], "circle" | "square", unknown>;
        autoFixFontSize: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        triggerType: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "mask" | "button") | (() => "mask" | "button") | ((new (...args: any[]) => "mask" | "button") | (() => "mask" | "button"))[], "mask" | "button", unknown>;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        shape: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "circle" | "square") | (() => "circle" | "square") | ((new (...args: any[]) => "circle" | "square") | (() => "circle" | "square"))[], "circle" | "square", unknown, string, boolean>;
        imageUrl: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        size: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
        autoFixFontSize: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
        triggerType: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "mask" | "button") | (() => "mask" | "button") | ((new (...args: any[]) => "mask" | "button") | (() => "mask" | "button"))[], "mask" | "button", unknown, string, boolean>;
        triggerIconStyle: {
            readonly type: import("vue").PropType<import("vue").CSSProperties>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        effect: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "line" | "up" | "down", unknown, string, boolean>;
        background: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        color: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
    }>> & {
        onLoad?: (() => any) | undefined;
        onError?: (() => any) | undefined;
        onClick?: ((e: Event) => any) | undefined;
    }, {}, {}, {}, {}, {
        size: number;
        effect: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "line" | "up" | "down", unknown>;
        shape: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "circle" | "square") | (() => "circle" | "square") | ((new (...args: any[]) => "circle" | "square") | (() => "circle" | "square"))[], "circle" | "square", unknown>;
        autoFixFontSize: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        triggerType: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "mask" | "button") | (() => "mask" | "button") | ((new (...args: any[]) => "mask" | "button") | (() => "mask" | "button"))[], "mask" | "button", unknown>;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    shape: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "circle" | "square") | (() => "circle" | "square") | ((new (...args: any[]) => "circle" | "square") | (() => "circle" | "square"))[], "circle" | "square", unknown, string, boolean>;
    imageUrl: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    size: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    autoFixFontSize: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    triggerType: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "mask" | "button") | (() => "mask" | "button") | ((new (...args: any[]) => "mask" | "button") | (() => "mask" | "button"))[], "mask" | "button", unknown, string, boolean>;
    triggerIconStyle: {
        readonly type: import("vue").PropType<import("vue").CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    effect: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "line" | "up" | "down", unknown, string, boolean>;
    background: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    color: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>> & {
    onLoad?: (() => any) | undefined;
    onError?: (() => any) | undefined;
    onClick?: ((e: Event) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (e: Event) => void;
    error: () => void;
    load: () => void;
}, string, {
    size: number;
    effect: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "line" | "up" | "down", unknown>;
    shape: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "circle" | "square") | (() => "circle" | "square") | ((new (...args: any[]) => "circle" | "square") | (() => "circle" | "square"))[], "circle" | "square", unknown>;
    autoFixFontSize: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    triggerType: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "mask" | "button") | (() => "mask" | "button") | ((new (...args: any[]) => "mask" | "button") | (() => "mask" | "button"))[], "mask" | "button", unknown>;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        error?(_: {}): any;
        default?(_: {}): any;
        "trigger-icon"?(_: {}): any;
    };
})> & Record<string, any>;
export declare const TuAvatarGroup: import("@tu-view-plus/utils").SFCWithInstall<import("vue").DefineComponent<{
    shape: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "circle" | "square") | (() => "circle" | "square") | ((new (...args: any[]) => "circle" | "square") | (() => "circle" | "square"))[], unknown, unknown, string, boolean>;
    size: NumberConstructor;
    autoFixFontSize: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    maxCount: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    zIndexAscend: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    maxStyle: {
        readonly type: import("vue").PropType<import("vue").CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    shape: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "circle" | "square") | (() => "circle" | "square") | ((new (...args: any[]) => "circle" | "square") | (() => "circle" | "square"))[], unknown, unknown, string, boolean>;
    size: NumberConstructor;
    autoFixFontSize: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    maxCount: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    zIndexAscend: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    maxStyle: {
        readonly type: import("vue").PropType<import("vue").CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>>, {
    shape: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "circle" | "square") | (() => "circle" | "square") | ((new (...args: any[]) => "circle" | "square") | (() => "circle" | "square"))[], unknown, unknown>;
    autoFixFontSize: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    maxCount: number;
    zIndexAscend: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}>> & Record<string, any>;
export default TuAvatar;
export * from './src/avatar';
export * from './src/constants';
