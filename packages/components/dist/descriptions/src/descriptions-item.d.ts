import type { ExtractPropTypes } from 'vue';
export declare const descriptionsItemProps: {
    label: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    span: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    width: import("@tu-view-plus/utils").EpPropFinalized<(NumberConstructor | StringConstructor)[], unknown, unknown, string, boolean>;
    minWidth: import("@tu-view-plus/utils").EpPropFinalized<(NumberConstructor | StringConstructor)[], unknown, unknown, string, boolean>;
    align: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    labelAlign: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    className: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    labelClassName: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
};
export type DescriptionsItemProps = ExtractPropTypes<typeof descriptionsItemProps>;
