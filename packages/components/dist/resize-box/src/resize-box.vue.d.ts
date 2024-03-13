declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    readonly width: {
        readonly type: import("vue").PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly height: {
        readonly type: import("vue").PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly component: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
    readonly directions: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ("bottom" | "left" | "right" | "top")[]) | (() => ("bottom" | "left" | "right" | "top")[]) | ((new (...args: any[]) => ("bottom" | "left" | "right" | "top")[]) | (() => ("bottom" | "left" | "right" | "top")[]))[], unknown, unknown, () => string[], boolean>;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    moving: (size: {
        width: number;
        height: number;
    }, ev: MouseEvent) => void;
    "update:width": (width: number) => void;
    "update:height": (height: number) => void;
    movingStart: (ev: MouseEvent) => void;
    movingEnd: (ev: MouseEvent) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly width: {
        readonly type: import("vue").PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly height: {
        readonly type: import("vue").PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly component: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
    readonly directions: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ("bottom" | "left" | "right" | "top")[]) | (() => ("bottom" | "left" | "right" | "top")[]) | ((new (...args: any[]) => ("bottom" | "left" | "right" | "top")[]) | (() => ("bottom" | "left" | "right" | "top")[]))[], unknown, unknown, () => string[], boolean>;
}>> & {
    onMoving?: ((size: {
        width: number;
        height: number;
    }, ev: MouseEvent) => any) | undefined;
    "onUpdate:width"?: ((width: number) => any) | undefined;
    "onUpdate:height"?: ((height: number) => any) | undefined;
    onMovingStart?: ((ev: MouseEvent) => any) | undefined;
    onMovingEnd?: ((ev: MouseEvent) => any) | undefined;
}, {
    readonly component: string;
    readonly directions: ("bottom" | "left" | "right" | "top")[];
}, {}>, {
    default?(_: {}): any;
    "resize-trigger"?(_: {
        direction: "bottom" | "left" | "right" | "top";
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
