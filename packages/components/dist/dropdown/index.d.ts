export declare const TuDropdown: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
        readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly trigger: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | ((new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]))[], unknown, unknown, "click", boolean>;
        readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | ((new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl"))[], unknown, unknown, "bottom", boolean>;
        readonly popupContainer: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly popupMaxHeight: import("@tu-view-plus/utils").EpPropFinalized<readonly [BooleanConstructor, NumberConstructor], unknown, unknown, true, boolean>;
        readonly size: {
            readonly default: "medium";
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            readonly __epPropKey: true;
        };
        readonly hideOnSelect: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    }>> & {
        onSelect?: ((value: string | number | Record<string, any> | undefined, ev: Event) => any) | undefined;
        "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
        onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        select: (value: string | number | Record<string, any> | undefined, ev: Event) => void;
        "update:popupVisible": (visible: boolean) => void;
        popupVisibleChange: (visible: boolean) => void;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
        readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly trigger: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | ((new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]))[], unknown, unknown, "click", boolean>;
        readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | ((new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl"))[], unknown, unknown, "bottom", boolean>;
        readonly popupContainer: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly popupMaxHeight: import("@tu-view-plus/utils").EpPropFinalized<readonly [BooleanConstructor, NumberConstructor], unknown, unknown, true, boolean>;
        readonly size: {
            readonly default: "medium";
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            readonly __epPropKey: true;
        };
        readonly hideOnSelect: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    }>> & {
        onSelect?: ((value: string | number | Record<string, any> | undefined, ev: Event) => any) | undefined;
        "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
        onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
    }, {
        readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
        readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | ((new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl"))[], unknown, unknown>;
        readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly trigger: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | ((new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]))[], unknown, unknown>;
        readonly popupMaxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [BooleanConstructor, NumberConstructor], unknown, unknown>;
        readonly hideOnSelect: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
        readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly trigger: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | ((new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]))[], unknown, unknown, "click", boolean>;
        readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | ((new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl"))[], unknown, unknown, "bottom", boolean>;
        readonly popupContainer: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly popupMaxHeight: import("@tu-view-plus/utils").EpPropFinalized<readonly [BooleanConstructor, NumberConstructor], unknown, unknown, true, boolean>;
        readonly size: {
            readonly default: "medium";
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            readonly __epPropKey: true;
        };
        readonly hideOnSelect: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    }>> & {
        onSelect?: ((value: string | number | Record<string, any> | undefined, ev: Event) => any) | undefined;
        "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
        onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
    }, {}, {}, {}, {}, {
        readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
        readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | ((new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl"))[], unknown, unknown>;
        readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly trigger: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | ((new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]))[], unknown, unknown>;
        readonly popupMaxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [BooleanConstructor, NumberConstructor], unknown, unknown>;
        readonly hideOnSelect: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly trigger: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | ((new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]))[], unknown, unknown, "click", boolean>;
    readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | ((new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl"))[], unknown, unknown, "bottom", boolean>;
    readonly popupContainer: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly popupMaxHeight: import("@tu-view-plus/utils").EpPropFinalized<readonly [BooleanConstructor, NumberConstructor], unknown, unknown, true, boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly hideOnSelect: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}>> & {
    onSelect?: ((value: string | number | Record<string, any> | undefined, ev: Event) => any) | undefined;
    "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
    onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (value: string | number | Record<string, any> | undefined, ev: Event) => void;
    "update:popupVisible": (visible: boolean) => void;
    popupVisibleChange: (visible: boolean) => void;
}, string, {
    readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
    readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | ((new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl"))[], unknown, unknown>;
    readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly trigger: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | ((new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]))[], unknown, unknown>;
    readonly popupMaxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [BooleanConstructor, NumberConstructor], unknown, unknown>;
    readonly hideOnSelect: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
        content?(_: {}): any;
        footer?(_: {}): any;
    };
})> & Record<string, any>;
export declare const TuDropdownGroup: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        readonly title: StringConstructor;
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        readonly title: StringConstructor;
    }>>, {}, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly title: StringConstructor;
    }>>, {}, {}, {}, {}, {}>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly title: StringConstructor;
}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        title?(_: {}): any;
        default?(_: {}): any;
    };
})> & Record<string, any>;
export declare const TuDropdownItem: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        readonly value: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, ObjectConstructor], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly active: BooleanConstructor;
        readonly uninjectContext: BooleanConstructor;
    }>> & {
        onClick?: ((ev: MouseEvent) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (ev: MouseEvent) => void;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        readonly value: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, ObjectConstructor], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly active: BooleanConstructor;
        readonly uninjectContext: BooleanConstructor;
    }>> & {
        onClick?: ((ev: MouseEvent) => any) | undefined;
    }, {
        readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly active: boolean;
        readonly uninjectContext: boolean;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly value: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, ObjectConstructor], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly active: BooleanConstructor;
        readonly uninjectContext: BooleanConstructor;
    }>> & {
        onClick?: ((ev: MouseEvent) => any) | undefined;
    }, {}, {}, {}, {}, {
        readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly active: boolean;
        readonly uninjectContext: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly value: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, ObjectConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly active: BooleanConstructor;
    readonly uninjectContext: BooleanConstructor;
}>> & {
    onClick?: ((ev: MouseEvent) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (ev: MouseEvent) => void;
}, string, {
    readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly active: boolean;
    readonly uninjectContext: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        icon?(_: {}): any;
        default?(_: {}): any;
        suffix?(_: {}): any;
    };
})> & Record<string, any>;
export declare const TuDropdownButton: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
        readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly trigger: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | ((new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]))[], unknown, unknown, "click", boolean>;
        readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | ((new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl"))[], unknown, unknown, "br", boolean>;
        readonly popupContainer: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "default" | "text" | "success" | "warning" | "danger" | "info" | "primary", unknown, "default", boolean>;
        readonly size: {
            readonly default: "medium";
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            readonly __epPropKey: true;
        };
        readonly buttonProps: {
            readonly type: import("vue").PropType<import("../button").ButtonProps>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly hideOnSelect: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    }>> & {
        onClick?: ((ev: MouseEvent) => any) | undefined;
        onSelect?: ((value: string | number | Record<string, any> | undefined, ev: Event) => any) | undefined;
        "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
        onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        select: (value: string | number | Record<string, any> | undefined, ev: Event) => void;
        click: (ev: MouseEvent) => void;
        "update:popupVisible": (visible: boolean) => void;
        popupVisibleChange: (visible: boolean) => void;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
        readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly trigger: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | ((new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]))[], unknown, unknown, "click", boolean>;
        readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | ((new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl"))[], unknown, unknown, "br", boolean>;
        readonly popupContainer: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "default" | "text" | "success" | "warning" | "danger" | "info" | "primary", unknown, "default", boolean>;
        readonly size: {
            readonly default: "medium";
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            readonly __epPropKey: true;
        };
        readonly buttonProps: {
            readonly type: import("vue").PropType<import("../button").ButtonProps>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly hideOnSelect: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    }>> & {
        onClick?: ((ev: MouseEvent) => any) | undefined;
        onSelect?: ((value: string | number | Record<string, any> | undefined, ev: Event) => any) | undefined;
        "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
        onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
    }, {
        readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
        readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | ((new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl"))[], unknown, unknown>;
        readonly type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "default" | "text" | "success" | "warning" | "danger" | "info" | "primary", unknown>;
        readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly trigger: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | ((new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]))[], unknown, unknown>;
        readonly hideOnSelect: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
        readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly trigger: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | ((new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]))[], unknown, unknown, "click", boolean>;
        readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | ((new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl"))[], unknown, unknown, "br", boolean>;
        readonly popupContainer: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "default" | "text" | "success" | "warning" | "danger" | "info" | "primary", unknown, "default", boolean>;
        readonly size: {
            readonly default: "medium";
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            readonly __epPropKey: true;
        };
        readonly buttonProps: {
            readonly type: import("vue").PropType<import("../button").ButtonProps>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly hideOnSelect: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    }>> & {
        onClick?: ((ev: MouseEvent) => any) | undefined;
        onSelect?: ((value: string | number | Record<string, any> | undefined, ev: Event) => any) | undefined;
        "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
        onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
    }, {}, {}, {}, {}, {
        readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
        readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | ((new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl"))[], unknown, unknown>;
        readonly type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "default" | "text" | "success" | "warning" | "danger" | "info" | "primary", unknown>;
        readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly trigger: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | ((new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]))[], unknown, unknown>;
        readonly hideOnSelect: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly trigger: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | ((new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]))[], unknown, unknown, "click", boolean>;
    readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | ((new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl"))[], unknown, unknown, "br", boolean>;
    readonly popupContainer: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "default" | "text" | "success" | "warning" | "danger" | "info" | "primary", unknown, "default", boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly buttonProps: {
        readonly type: import("vue").PropType<import("../button").ButtonProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly hideOnSelect: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}>> & {
    onClick?: ((ev: MouseEvent) => any) | undefined;
    onSelect?: ((value: string | number | Record<string, any> | undefined, ev: Event) => any) | undefined;
    "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
    onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (value: string | number | Record<string, any> | undefined, ev: Event) => void;
    click: (ev: MouseEvent) => void;
    "update:popupVisible": (visible: boolean) => void;
    popupVisibleChange: (visible: boolean) => void;
}, string, {
    readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
    readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | ((new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl"))[], unknown, unknown>;
    readonly type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "default" | "text" | "success" | "warning" | "danger" | "info" | "primary", unknown>;
    readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly trigger: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | ((new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]))[], unknown, unknown>;
    readonly hideOnSelect: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
        icon?(_: {
            popupVisible: boolean;
        }): any;
        content?(_: {}): any;
    };
})> & Record<string, any>;
export declare const TuDropdownSubmenu: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        readonly value: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly trigger: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "click" | "hover" | ("click" | "hover")[]) | (() => "click" | "hover" | ("click" | "hover")[]) | ((new (...args: any[]) => "click" | "hover" | ("click" | "hover")[]) | (() => "click" | "hover" | ("click" | "hover")[]))[], unknown, unknown, "click", boolean>;
        readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "rt" | "lt") | (() => "rt" | "lt") | ((new (...args: any[]) => "rt" | "lt") | (() => "rt" | "lt"))[], unknown, unknown, "rt", boolean>;
        readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
        readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly optionProps: {
            readonly type: import("vue").PropType<Record<string, any>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
    }>> & {
        "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
        onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:popupVisible": (visible: boolean) => void;
        popupVisibleChange: (visible: boolean) => void;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        readonly value: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly trigger: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "click" | "hover" | ("click" | "hover")[]) | (() => "click" | "hover" | ("click" | "hover")[]) | ((new (...args: any[]) => "click" | "hover" | ("click" | "hover")[]) | (() => "click" | "hover" | ("click" | "hover")[]))[], unknown, unknown, "click", boolean>;
        readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "rt" | "lt") | (() => "rt" | "lt") | ((new (...args: any[]) => "rt" | "lt") | (() => "rt" | "lt"))[], unknown, unknown, "rt", boolean>;
        readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
        readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly optionProps: {
            readonly type: import("vue").PropType<Record<string, any>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
    }>> & {
        "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
        onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
    }, {
        readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "rt" | "lt") | (() => "rt" | "lt") | ((new (...args: any[]) => "rt" | "lt") | (() => "rt" | "lt"))[], unknown, unknown>;
        readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly trigger: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "click" | "hover" | ("click" | "hover")[]) | (() => "click" | "hover" | ("click" | "hover")[]) | ((new (...args: any[]) => "click" | "hover" | ("click" | "hover")[]) | (() => "click" | "hover" | ("click" | "hover")[]))[], unknown, unknown>;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly value: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly trigger: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "click" | "hover" | ("click" | "hover")[]) | (() => "click" | "hover" | ("click" | "hover")[]) | ((new (...args: any[]) => "click" | "hover" | ("click" | "hover")[]) | (() => "click" | "hover" | ("click" | "hover")[]))[], unknown, unknown, "click", boolean>;
        readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "rt" | "lt") | (() => "rt" | "lt") | ((new (...args: any[]) => "rt" | "lt") | (() => "rt" | "lt"))[], unknown, unknown, "rt", boolean>;
        readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
        readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly optionProps: {
            readonly type: import("vue").PropType<Record<string, any>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
    }>> & {
        "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
        onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
    }, {}, {}, {}, {}, {
        readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "rt" | "lt") | (() => "rt" | "lt") | ((new (...args: any[]) => "rt" | "lt") | (() => "rt" | "lt"))[], unknown, unknown>;
        readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly trigger: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "click" | "hover" | ("click" | "hover")[]) | (() => "click" | "hover" | ("click" | "hover")[]) | ((new (...args: any[]) => "click" | "hover" | ("click" | "hover")[]) | (() => "click" | "hover" | ("click" | "hover")[]))[], unknown, unknown>;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly value: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly trigger: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "click" | "hover" | ("click" | "hover")[]) | (() => "click" | "hover" | ("click" | "hover")[]) | ((new (...args: any[]) => "click" | "hover" | ("click" | "hover")[]) | (() => "click" | "hover" | ("click" | "hover")[]))[], unknown, unknown, "click", boolean>;
    readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "rt" | "lt") | (() => "rt" | "lt") | ((new (...args: any[]) => "rt" | "lt") | (() => "rt" | "lt"))[], unknown, unknown, "rt", boolean>;
    readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly optionProps: {
        readonly type: import("vue").PropType<Record<string, any>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>> & {
    "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
    onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:popupVisible": (visible: boolean) => void;
    popupVisibleChange: (visible: boolean) => void;
}, string, {
    readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "rt" | "lt") | (() => "rt" | "lt") | ((new (...args: any[]) => "rt" | "lt") | (() => "rt" | "lt"))[], unknown, unknown>;
    readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly trigger: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "click" | "hover" | ("click" | "hover")[]) | (() => "click" | "hover" | ("click" | "hover")[]) | ((new (...args: any[]) => "click" | "hover" | ("click" | "hover")[]) | (() => "click" | "hover" | ("click" | "hover")[]))[], unknown, unknown>;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
        icon?(_: {}): any;
        suffix?(_: {}): any;
        content?(_: {}): any;
        footer?(_: {}): any;
    };
})> & Record<string, any>;
export default TuDropdown;
export * from './src/dropdown';
