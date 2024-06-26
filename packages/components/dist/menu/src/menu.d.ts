import type { ExtractPropTypes } from 'vue';
export declare const menuProps: {
    readonly mode: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "pop" | "horizontal" | "vertical" | "popButton") | (() => "pop" | "horizontal" | "vertical" | "popButton") | ((new (...args: any[]) => "pop" | "horizontal" | "vertical" | "popButton") | (() => "pop" | "horizontal" | "vertical" | "popButton"))[], unknown, unknown, "vertical", boolean>;
    readonly effect: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "default" | "flat" | "inset" | "outset" | "bordered" | "outlined") | (() => "default" | "flat" | "inset" | "outset" | "bordered" | "outlined") | ((new (...args: any[]) => "default" | "flat" | "inset" | "outset" | "bordered" | "outlined") | (() => "default" | "flat" | "inset" | "outset" | "bordered" | "outlined"))[], "default" | "flat" | "inset" | "outset" | "bordered" | "outlined", unknown, "outset", boolean>;
};
export type MenuProps = ExtractPropTypes<typeof menuProps>;
