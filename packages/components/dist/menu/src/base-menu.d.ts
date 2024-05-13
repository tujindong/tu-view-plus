import type { ExtractPropTypes, PropType, StyleValue } from 'vue';
import type { TriggerProps } from '../../trigger';
export declare const baseMenuProps: {
    readonly style: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | false | import("vue").CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | false | import("vue").CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown, {}, boolean>;
    readonly mode: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "pop" | "horizontal" | "vertical" | "popButton") | (() => "pop" | "horizontal" | "vertical" | "popButton") | ((new (...args: any[]) => "pop" | "horizontal" | "vertical" | "popButton") | (() => "pop" | "horizontal" | "vertical" | "popButton"))[], unknown, unknown, "vertical", boolean>;
    readonly effect: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "" | "flat" | "inset" | "outset" | "bordered" | "outlined") | (() => "" | "flat" | "inset" | "outset" | "bordered" | "outlined") | ((new (...args: any[]) => "" | "flat" | "inset" | "outset" | "bordered" | "outlined") | (() => "" | "flat" | "inset" | "outset" | "bordered" | "outlined"))[], "" | "flat" | "inset" | "outset" | "bordered" | "outlined", unknown, "default", boolean>;
    readonly levelIndent: {
        readonly type: PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly autoOpen: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly collapsed: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly defaultCollapsed: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly collapsedWidth: {
        readonly type: PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly accordion: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly autoScrollIntoView: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly showCollapseButton: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly selectedKeys: {
        readonly type: PropType<string[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly defaultSelectedKeys: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => never[], boolean>;
    readonly openKeys: {
        readonly type: PropType<string[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly defaultOpenKeys: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => never[], boolean>;
    readonly scrollConfig: {
        readonly type: PropType<{
            [key: string]: any;
        }>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly triggerProps: {
        readonly type: PropType<TriggerProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly tooltipProps: {
        readonly type: PropType<Record<string, any>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly autoOpenSelected: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly breakpoint: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "xxl" | "xl" | "lg" | "md" | "sm" | "xs") | (() => "xxl" | "xl" | "lg" | "md" | "sm" | "xs") | ((new (...args: any[]) => "xxl" | "xl" | "lg" | "md" | "sm" | "xs") | (() => "xxl" | "xl" | "lg" | "md" | "sm" | "xs"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly popupMaxHeight: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number | boolean) | (() => number | boolean) | ((new (...args: any[]) => number | boolean) | (() => number | boolean))[], unknown, unknown, true, boolean>;
    readonly prefixCls: {
        readonly type: PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly inTrigger: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly siderCollapsed: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly isRoot: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export declare const baseMenuEmits: string[];
export type BaseMenuProps = ExtractPropTypes<typeof baseMenuProps>;
