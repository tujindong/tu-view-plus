import type { ExtractPropTypes, PropType } from 'vue';
export declare const resizeBoxProps: {
    readonly width: {
        readonly type: PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly height: {
        readonly type: PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly component: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
    readonly directions: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ("bottom" | "left" | "right" | "top")[]) | (() => ("bottom" | "left" | "right" | "top")[]) | ((new (...args: any[]) => ("bottom" | "left" | "right" | "top")[]) | (() => ("bottom" | "left" | "right" | "top")[]))[], unknown, unknown, () => string[], boolean>;
};
export declare const resizeBoxEmits: {
    'update:width': (width: number) => boolean;
    'update:height': (height: number) => boolean;
    /**
     * @zh 拖拽开始时触发
     * @en Triggered when dragging starts
     * @param {MouseEvent} ev
     */
    movingStart: (ev: MouseEvent) => boolean;
    /**
     * @zh 拖拽时触发
     * @en Triggered when dragging
     * @param {{ width: number; height: number; }} size
     * @param {MouseEvent} ev
     */
    moving: (size: {
        width: number;
        height: number;
    }, ev: MouseEvent) => boolean;
    /**
     * @zh 拖拽结束时触发
     * @en Triggered when the drag ends
     * @param {MouseEvent} ev
     */
    movingEnd: (ev: MouseEvent) => boolean;
};
export type ResizeBoxProps = ExtractPropTypes<typeof resizeBoxProps>;
