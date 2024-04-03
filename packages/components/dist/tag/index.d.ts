export declare const TuTag: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        readonly closable: BooleanConstructor;
        readonly disableTransitions: BooleanConstructor;
        readonly hit: BooleanConstructor;
        readonly color: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly size: {
            readonly default: "medium";
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            readonly __epPropKey: true;
        };
        readonly effect: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "inset" | "outset" | "dark" | "light" | "plain", unknown, "outset", boolean>;
        readonly round: BooleanConstructor;
    }>> & {
        onClick?: ((evt: MouseEvent) => any) | undefined;
        onClose?: ((evt: MouseEvent) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (evt: MouseEvent) => void;
        close: (evt: MouseEvent) => void;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        readonly closable: BooleanConstructor;
        readonly disableTransitions: BooleanConstructor;
        readonly hit: BooleanConstructor;
        readonly color: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly size: {
            readonly default: "medium";
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            readonly __epPropKey: true;
        };
        readonly effect: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "inset" | "outset" | "dark" | "light" | "plain", unknown, "outset", boolean>;
        readonly round: BooleanConstructor;
    }>> & {
        onClick?: ((evt: MouseEvent) => any) | undefined;
        onClose?: ((evt: MouseEvent) => any) | undefined;
    }, {
        readonly color: string;
        readonly round: boolean;
        readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
        readonly effect: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "inset" | "outset" | "dark" | "light" | "plain", unknown>;
        readonly closable: boolean;
        readonly disableTransitions: boolean;
        readonly hit: boolean;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly closable: BooleanConstructor;
        readonly disableTransitions: BooleanConstructor;
        readonly hit: BooleanConstructor;
        readonly color: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly size: {
            readonly default: "medium";
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            readonly __epPropKey: true;
        };
        readonly effect: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "inset" | "outset" | "dark" | "light" | "plain", unknown, "outset", boolean>;
        readonly round: BooleanConstructor;
    }>> & {
        onClick?: ((evt: MouseEvent) => any) | undefined;
        onClose?: ((evt: MouseEvent) => any) | undefined;
    }, {}, {}, {}, {}, {
        readonly color: string;
        readonly round: boolean;
        readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
        readonly effect: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "inset" | "outset" | "dark" | "light" | "plain", unknown>;
        readonly closable: boolean;
        readonly disableTransitions: boolean;
        readonly hit: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly closable: BooleanConstructor;
    readonly disableTransitions: BooleanConstructor;
    readonly hit: BooleanConstructor;
    readonly color: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly effect: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "inset" | "outset" | "dark" | "light" | "plain", unknown, "outset", boolean>;
    readonly round: BooleanConstructor;
}>> & {
    onClick?: ((evt: MouseEvent) => any) | undefined;
    onClose?: ((evt: MouseEvent) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (evt: MouseEvent) => void;
    close: (evt: MouseEvent) => void;
}, string, {
    readonly color: string;
    readonly round: boolean;
    readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
    readonly effect: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "inset" | "outset" | "dark" | "light" | "plain", unknown>;
    readonly closable: boolean;
    readonly disableTransitions: boolean;
    readonly hit: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        icon?(_: {}): any;
        default?(_: {}): any;
    };
})> & Record<string, any>;
export default TuTag;
export * from './src/tag';
