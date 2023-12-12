import type { ExtractPropTypes } from 'vue';
import type Row from './row.vue';
export declare const RowJustify: readonly ["start", "center", "end", "space-around", "space-between", "space-evenly"];
export declare const RowAlign: readonly ["top", "middle", "bottom"];
export declare const rowProps: {
    tag: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    gutter: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    justify: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start", unknown, string, boolean>;
    align: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "bottom" | "top" | "middle", unknown, string, boolean>;
};
export type RowProps = ExtractPropTypes<typeof rowProps>;
export type RowInstance = InstanceType<typeof Row>;
