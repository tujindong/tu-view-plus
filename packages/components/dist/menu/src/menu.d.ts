import type { ExtractPropTypes } from 'vue';
import type Menu from './menu.vue';
export declare const menuProps: {
    readonly mode: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "pop" | "horizontal" | "vertical" | "popButton") | (() => "pop" | "horizontal" | "vertical" | "popButton") | ((new (...args: any[]) => "pop" | "horizontal" | "vertical" | "popButton") | (() => "pop" | "horizontal" | "vertical" | "popButton"))[], unknown, unknown, "vertical", boolean>;
};
export type MenuProps = ExtractPropTypes<typeof menuProps>;
export type MenuInstance = InstanceType<typeof Menu>;
