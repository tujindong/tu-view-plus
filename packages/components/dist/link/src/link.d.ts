import type { ExtractPropTypes, PropType } from 'vue';
export declare const linkProps: {
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "default" | "success" | "warning" | "danger" | "info" | "primary") | (() => "default" | "success" | "warning" | "danger" | "info" | "primary") | ((new (...args: any[]) => "default" | "success" | "warning" | "danger" | "info" | "primary") | (() => "default" | "success" | "warning" | "danger" | "info" | "primary"))[], unknown, unknown, "default", boolean>;
    readonly underline: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly href: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly icon: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export declare const linkEmits: {
    click: (evt: MouseEvent) => boolean;
};
export type LinkProps = ExtractPropTypes<typeof linkProps>;
