import type { ExtractPropTypes } from 'vue';
import type SelectGroup from './select-group.vue';
export declare const selectGroupProps: {
    readonly label: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export type SelectGroupProps = ExtractPropTypes<typeof selectGroupProps>;
export type SelectGroupPropsInstance = InstanceType<typeof SelectGroup>;
