import type { ExtractPropTypes } from 'vue';
export declare const menuProps: {
    readonly mode: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "pop" | "horizontal" | "vertical" | "popButton") | (() => "pop" | "horizontal" | "vertical" | "popButton") | ((new (...args: any[]) => "pop" | "horizontal" | "vertical" | "popButton") | (() => "pop" | "horizontal" | "vertical" | "popButton"))[], unknown, unknown, "vertical", boolean>;
    readonly effect: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "flat" | "inset" | "outset" | "default" | "bordered" | "outlined") | (() => "flat" | "inset" | "outset" | "default" | "bordered" | "outlined") | ((new (...args: any[]) => "flat" | "inset" | "outset" | "default" | "bordered" | "outlined") | (() => "flat" | "inset" | "outset" | "default" | "bordered" | "outlined"))[], "flat" | "inset" | "outset" | "default" | "bordered" | "outlined", unknown, "outset", boolean>;
};
export type MenuProps = ExtractPropTypes<typeof menuProps>;
