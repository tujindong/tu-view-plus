import type { ExtractPropTypes, PropType } from 'vue';
export declare const backTopProps: {
    readonly visibleHeight: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number) | (() => number) | ((new (...args: any[]) => number) | (() => number))[], unknown, unknown, 200, boolean>;
    readonly target: {
        readonly type: PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly right: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 30, boolean>;
    readonly bottom: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
};
export declare const backtopEmits: {
    click: (evt: MouseEvent) => boolean;
};
export type BackTopProps = ExtractPropTypes<typeof backTopProps>;
export type BacktopEmits = typeof backtopEmits;
