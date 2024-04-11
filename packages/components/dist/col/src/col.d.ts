import type { ExtractPropTypes } from 'vue';
export type ColSizeObject = {
    span?: number;
    offset?: number;
    pull?: number;
    push?: number;
};
export type ColSize = number | ColSizeObject;
export declare const colProps: {
    tag: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    span: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    offset: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    pull: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    push: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    xs: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number | ColSizeObject) | (() => ColSize) | ((new (...args: any[]) => number | ColSizeObject) | (() => ColSize))[], unknown, unknown, () => import("@tu-view-plus/utils").Mutable<{}>, boolean>;
    sm: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number | ColSizeObject) | (() => ColSize) | ((new (...args: any[]) => number | ColSizeObject) | (() => ColSize))[], unknown, unknown, () => import("@tu-view-plus/utils").Mutable<{}>, boolean>;
    md: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number | ColSizeObject) | (() => ColSize) | ((new (...args: any[]) => number | ColSizeObject) | (() => ColSize))[], unknown, unknown, () => import("@tu-view-plus/utils").Mutable<{}>, boolean>;
    lg: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number | ColSizeObject) | (() => ColSize) | ((new (...args: any[]) => number | ColSizeObject) | (() => ColSize))[], unknown, unknown, () => import("@tu-view-plus/utils").Mutable<{}>, boolean>;
    xl: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number | ColSizeObject) | (() => ColSize) | ((new (...args: any[]) => number | ColSizeObject) | (() => ColSize))[], unknown, unknown, () => import("@tu-view-plus/utils").Mutable<{}>, boolean>;
};
export type ColProps = ExtractPropTypes<typeof colProps>;
