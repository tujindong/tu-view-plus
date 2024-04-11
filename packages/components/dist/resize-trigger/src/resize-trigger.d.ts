import type { ExtractPropTypes } from 'vue';
export declare const resizeTriggerProps: {
    direction: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown, string, boolean>;
};
export declare const resizeTriggerEmits: string[];
export type ResizeTriggerProps = ExtractPropTypes<typeof resizeTriggerProps>;
