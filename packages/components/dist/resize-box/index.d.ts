export declare const TuResizeBox: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
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
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        moving: (size: {
            width: number;
            height: number;
        }, ev: MouseEvent) => void;
        "update:width": (width: number) => void;
        "update:height": (height: number) => void;
        movingStart: (ev: MouseEvent) => void;
        movingEnd: (ev: MouseEvent) => void;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
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
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
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
    }, {}, {}, {}, {}, {
        readonly component: string;
        readonly directions: ("bottom" | "left" | "right" | "top")[];
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    moving: (size: {
        width: number;
        height: number;
    }, ev: MouseEvent) => void;
    "update:width": (width: number) => void;
    "update:height": (height: number) => void;
    movingStart: (ev: MouseEvent) => void;
    movingEnd: (ev: MouseEvent) => void;
}, string, {
    readonly component: string;
    readonly directions: ("bottom" | "left" | "right" | "top")[];
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
        "resize-trigger"?(_: {
            direction: "bottom" | "left" | "right" | "top";
        }): any;
    };
})> & Record<string, any>;
export default TuResizeBox;
export * from './src/resize-box';
