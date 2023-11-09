import type { ExtractPropTypes } from 'vue';
import type Radio from './radio.vue';
export declare const radioProps: {
    type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "button" | "border", unknown, string, boolean>;
    size: {
        default: string;
        type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "large" | "medium" | "mini", never>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
    label: import("@tu-view-plus/utils").EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, string, boolean>;
    modelValue: import("@tu-view-plus/utils").EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, string, boolean>;
    name: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    border: BooleanConstructor;
};
export declare const radioEmits: {
    change: (val: string | number | boolean) => boolean;
    "update:modelValue": (val: string | number | boolean) => boolean;
};
export type RadioProps = ExtractPropTypes<typeof radioProps>;
export type RadioInstance = InstanceType<typeof Radio>;
export type RadioEmits = typeof radioEmits;
