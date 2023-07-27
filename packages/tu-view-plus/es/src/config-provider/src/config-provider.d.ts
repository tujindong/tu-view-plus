import type { MessageConfigContext } from '../../message';
export declare const messageConfig: MessageConfigContext;
declare const ConfigProvider: import("vue").DefineComponent<{
    readonly a11y: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly locale: {
        readonly type: import("vue").PropType<import("@tu-view-plus/locale").Language>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "medium" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly button: {
        readonly type: import("vue").PropType<import("../../button").ButtonConfigContext>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly experimentalFeatures: {
        readonly type: import("vue").PropType<import("./config-provider-props").ExperimentalFeatures>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly keyboardNavigation: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly message: {
        readonly type: import("vue").PropType<MessageConfigContext>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly zIndex: NumberConstructor;
    readonly namespace: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "tu", boolean>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly a11y: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly locale: {
        readonly type: import("vue").PropType<import("@tu-view-plus/locale").Language>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "medium" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly button: {
        readonly type: import("vue").PropType<import("../../button").ButtonConfigContext>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly experimentalFeatures: {
        readonly type: import("vue").PropType<import("./config-provider-props").ExperimentalFeatures>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly keyboardNavigation: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly message: {
        readonly type: import("vue").PropType<MessageConfigContext>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly zIndex: NumberConstructor;
    readonly namespace: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "tu", boolean>;
}>>, {
    readonly a11y: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly keyboardNavigation: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly namespace: string;
}>;
export default ConfigProvider;
