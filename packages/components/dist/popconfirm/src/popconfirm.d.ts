import type { ExtractPropTypes, PropType, CSSProperties } from 'vue';
import type { ClassName } from '@tu-view-plus/utils';
import type { ButtonProps } from '../../button';
export declare const popconfirmProps: {
    readonly content: StringConstructor;
    readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "bottom" | "left" | "right" | "top" | "br" | "rt" | "tr" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "bottom" | "left" | "right" | "top" | "br" | "rt" | "tr" | "rb" | "tl" | "bl" | "lt" | "lb") | ((new (...args: any[]) => "bottom" | "left" | "right" | "top" | "br" | "rt" | "tr" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "bottom" | "left" | "right" | "top" | "br" | "rt" | "tr" | "rb" | "tl" | "bl" | "lt" | "lb"))[], unknown, unknown, "top", boolean>;
    readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "error" | "success" | "warning" | "info") | (() => "error" | "success" | "warning" | "info") | ((new (...args: any[]) => "error" | "success" | "warning" | "info") | (() => "error" | "success" | "warning" | "info"))[], unknown, unknown, "", boolean>;
    readonly size: {
        readonly default: "medium";
        /**
         * @zh 触发 cancel 事件前的回调函数。如果返回 false 则不会触发后续事件。
         * @en The callback function before the cancel event is triggered. If it returns false, no subsequent events will be triggered.
         */
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly okText: StringConstructor;
    readonly cancelText: StringConstructor;
    readonly okLoading: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly okButtonProps: {
        /**
         * @zh 触发 cancel 事件前的回调函数。如果返回 false 则不会触发后续事件。
         * @en The callback function before the cancel event is triggered. If it returns false, no subsequent events will be triggered.
         */
        readonly type: PropType<ButtonProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly cancelButtonProps: {
        /**
         * @zh 触发 cancel 事件前的回调函数。如果返回 false 则不会触发后续事件。
         * @en The callback function before the cancel event is triggered. If it returns false, no subsequent events will be triggered.
         */
        readonly type: PropType<ButtonProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly contentClass: {
        /**
         * @zh 触发 cancel 事件前的回调函数。如果返回 false 则不会触发后续事件。
         * @en The callback function before the cancel event is triggered. If it returns false, no subsequent events will be triggered.
         */
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | Record<string, boolean> | (string | Record<string, boolean>)[]) | (() => ClassName) | ((new (...args: any[]) => string | Record<string, boolean> | (string | Record<string, boolean>)[]) | (() => ClassName))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly contentStyle: {
        /**
         * @zh 触发 cancel 事件前的回调函数。如果返回 false 则不会触发后续事件。
         * @en The callback function before the cancel event is triggered. If it returns false, no subsequent events will be triggered.
         */
        readonly type: PropType<CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly arrowClass: {
        /**
         * @zh 触发 cancel 事件前的回调函数。如果返回 false 则不会触发后续事件。
         * @en The callback function before the cancel event is triggered. If it returns false, no subsequent events will be triggered.
         */
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | Record<string, boolean> | (string | Record<string, boolean>)[]) | (() => ClassName) | ((new (...args: any[]) => string | Record<string, boolean> | (string | Record<string, boolean>)[]) | (() => ClassName))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly arrowStyle: {
        /**
         * @zh 触发 cancel 事件前的回调函数。如果返回 false 则不会触发后续事件。
         * @en The callback function before the cancel event is triggered. If it returns false, no subsequent events will be triggered.
         */
        readonly type: PropType<CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly popupContainer: {
        /**
         * @zh 触发 cancel 事件前的回调函数。如果返回 false 则不会触发后续事件。
         * @en The callback function before the cancel event is triggered. If it returns false, no subsequent events will be triggered.
         */
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onBeforeOk: {
        /**
         * @zh 触发 cancel 事件前的回调函数。如果返回 false 则不会触发后续事件。
         * @en The callback function before the cancel event is triggered. If it returns false, no subsequent events will be triggered.
         */
        readonly type: PropType<(done: (closed: boolean) => void) => void | boolean | Promise<void | boolean>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onBeforeCancel: {
        /**
         * @zh 触发 cancel 事件前的回调函数。如果返回 false 则不会触发后续事件。
         * @en The callback function before the cancel event is triggered. If it returns false, no subsequent events will be triggered.
         */
        readonly type: PropType<() => boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export declare const popconfirmEmits: {
    'update:popupVisible': (visible: boolean) => boolean;
    popupVisibleChange: (visible: boolean) => boolean;
    ok: () => boolean;
    cancel: () => boolean;
};
export type PopconfirmProps = ExtractPropTypes<typeof popconfirmProps>;
export type PopconfirmEmits = typeof popconfirmEmits;
