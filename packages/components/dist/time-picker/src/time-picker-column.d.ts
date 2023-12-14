import { TimeList } from './interface';
import type { ExtractPropTypes, PropType } from 'vue';
import type TimePickerColumn from './time-picker-column.vue';
export declare const timePickerColumnProps: {
    readonly list: {
        readonly type: PropType<TimeList>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly value: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly visible: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export declare const timePickerColumnEmits: string[];
export type TimePickerColumnProps = ExtractPropTypes<typeof timePickerColumnProps>;
export type TimePickerColumnInstance = InstanceType<typeof TimePickerColumn>;
