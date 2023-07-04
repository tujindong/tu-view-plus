import type { ExtractPropTypes } from 'vue';
import type Radio from './radio.vue';
export declare const radioProps: {
    type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "button" | "border", unknown, string, boolean>;
    size: {
        default: string;
        type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "medium" | "large", never>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
    label: import("@tu-view-plus/utils").EpPropFinalized<(StringConstructor | BooleanConstructor | NumberConstructor)[], unknown, unknown, string, boolean>;
    modelValue: import("@tu-view-plus/utils").EpPropFinalized<(StringConstructor | BooleanConstructor | NumberConstructor)[], unknown, unknown, string, boolean>;
    name: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    border: BooleanConstructor;
};
export declare const radioEmits: {
    change: (val: string | number | boolean) => boolean;
    "update:modelValue": (val: string | number | boolean) => boolean;
};
export declare type RadioProps = ExtractPropTypes<typeof radioProps>;
export declare type RadioInstance = InstanceType<typeof Radio>;
export declare type RadioEmits = typeof radioEmits;
