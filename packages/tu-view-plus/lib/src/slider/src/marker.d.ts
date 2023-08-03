import type { CSSProperties, ExtractPropTypes } from 'vue';
export declare const markerProps: {
    readonly mark: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | {
        style: CSSProperties;
        label: any;
    }) & {}) | (() => string | {
        style: CSSProperties;
        label: any;
    }) | ((new (...args: any[]) => (string | {
        style: CSSProperties;
        label: any;
    }) & {}) | (() => string | {
        style: CSSProperties;
        label: any;
    }))[], unknown, unknown, undefined, boolean>;
};
export declare type MarkerProps = ExtractPropTypes<typeof markerProps>;
