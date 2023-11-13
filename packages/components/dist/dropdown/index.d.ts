export declare const TuDropdown: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | ((new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl"))[], unknown, unknown>;
            readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
            readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly trigger: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | ((new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]))[], unknown, unknown>;
            readonly hideOnSelect: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly popupMaxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [BooleanConstructor, NumberConstructor], unknown, unknown>;
        }> & Omit<{
            readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | ((new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl"))[], unknown, unknown>;
            readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
            readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly trigger: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | ((new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]))[], unknown, unknown>;
            readonly hideOnSelect: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly popupMaxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [BooleanConstructor, NumberConstructor], unknown, unknown>;
            readonly popupContainer?: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown> | undefined;
            readonly popupVisible?: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown> | undefined;
            onSelect?: ((value: string | number | Record<string, any> | undefined, ev: Event) => any) | undefined;
            "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
            onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
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
        }, "position" | "size" | "popupVisible" | "defaultPopupVisible" | "trigger" | "hideOnSelect" | "popupMaxHeight">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "select", value: string | number | Record<string, any> | undefined, ev: Event) => void) & ((event: "update:popupVisible", visible: boolean) => void) & ((event: "popupVisibleChange", visible: boolean) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
            readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | ((new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl"))[], unknown, unknown>;
            readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
            readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly trigger: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | ((new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]))[], unknown, unknown>;
            readonly hideOnSelect: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly popupMaxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [BooleanConstructor, NumberConstructor], unknown, unknown>;
        }, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
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
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
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
    readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | ((new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl"))[], unknown, unknown>;
    readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
    readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly trigger: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | ((new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]))[], unknown, unknown>;
    readonly hideOnSelect: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly popupMaxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [BooleanConstructor, NumberConstructor], unknown, unknown>;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
        content?(_: {}): any;
        footer?(_: {}): any;
    };
})> & Record<string, any>;
export declare const TuDropdownGroup: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<{
            readonly title?: string | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            readonly title: StringConstructor;
        }>>, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            readonly title: StringConstructor;
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        readonly title: StringConstructor;
    }>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
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
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly active: boolean;
            readonly uninjectContext: boolean;
        }> & Omit<{
            readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly active: boolean;
            readonly uninjectContext: boolean;
            readonly value?: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, ObjectConstructor], unknown, unknown> | undefined;
            onClick?: ((ev: MouseEvent) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
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
        }, "disabled" | "active" | "uninjectContext">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: "click", ev: MouseEvent) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
        }, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
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
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
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
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | ((new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl"))[], unknown, unknown>;
            readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
            readonly type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "default" | "text" | "success" | "warning" | "danger" | "info" | "primary", unknown>;
            readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly trigger: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | ((new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]))[], unknown, unknown>;
            readonly hideOnSelect: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        }> & Omit<{
            readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | ((new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl"))[], unknown, unknown>;
            readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
            readonly type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "default" | "text" | "success" | "warning" | "danger" | "info" | "primary", unknown>;
            readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly trigger: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | ((new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]))[], unknown, unknown>;
            readonly hideOnSelect: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly popupContainer?: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown> | undefined;
            readonly popupVisible?: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown> | undefined;
            readonly buttonProps?: import("../button").ButtonProps | undefined;
            onClick?: ((ev: MouseEvent) => any) | undefined;
            onSelect?: ((value: string | number | Record<string, any> | undefined, ev: Event) => any) | undefined;
            "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
            onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
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
        }, "disabled" | "position" | "size" | "type" | "popupVisible" | "defaultPopupVisible" | "trigger" | "hideOnSelect">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "select", value: string | number | Record<string, any> | undefined, ev: Event) => void) & ((event: "click", ev: MouseEvent) => void) & ((event: "update:popupVisible", visible: boolean) => void) & ((event: "popupVisibleChange", visible: boolean) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
            readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | ((new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl"))[], unknown, unknown>;
            readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
            readonly type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "default" | "text" | "success" | "warning" | "danger" | "info" | "primary", unknown>;
            readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly trigger: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | ((new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]))[], unknown, unknown>;
            readonly hideOnSelect: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        }, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
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
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
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
    readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | ((new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl"))[], unknown, unknown>;
    readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
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
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "rt" | "lt") | (() => "rt" | "lt") | ((new (...args: any[]) => "rt" | "lt") | (() => "rt" | "lt"))[], unknown, unknown>;
            readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly trigger: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "click" | "hover" | ("click" | "hover")[]) | (() => "click" | "hover" | ("click" | "hover")[]) | ((new (...args: any[]) => "click" | "hover" | ("click" | "hover")[]) | (() => "click" | "hover" | ("click" | "hover")[]))[], unknown, unknown>;
        }> & Omit<{
            readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "rt" | "lt") | (() => "rt" | "lt") | ((new (...args: any[]) => "rt" | "lt") | (() => "rt" | "lt"))[], unknown, unknown>;
            readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly trigger: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "click" | "hover" | ("click" | "hover")[]) | (() => "click" | "hover" | ("click" | "hover")[]) | ((new (...args: any[]) => "click" | "hover" | ("click" | "hover")[]) | (() => "click" | "hover" | ("click" | "hover")[]))[], unknown, unknown>;
            readonly value?: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
            readonly popupVisible?: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown> | undefined;
            readonly optionProps?: Record<string, any> | undefined;
            "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
            onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
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
        }, "disabled" | "position" | "popupVisible" | "defaultPopupVisible" | "trigger">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "update:popupVisible", visible: boolean) => void) & ((event: "popupVisibleChange", visible: boolean) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
        }, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
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
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
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
