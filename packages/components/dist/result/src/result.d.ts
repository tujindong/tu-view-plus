import type { ExtractPropTypes } from 'vue';
export declare const resultProps: {
    status: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "error" | "success" | "warning" | "info" | "403" | "404" | "500" | "custom") | (() => "error" | "success" | "warning" | "info" | "403" | "404" | "500" | "custom") | ((new (...args: any[]) => "error" | "success" | "warning" | "info" | "403" | "404" | "500" | "custom") | (() => "error" | "success" | "warning" | "info" | "403" | "404" | "500" | "custom"))[], unknown, unknown, string, boolean>;
    title: StringConstructor;
    subtitle: StringConstructor;
};
export type ResultProps = ExtractPropTypes<typeof resultProps>;
