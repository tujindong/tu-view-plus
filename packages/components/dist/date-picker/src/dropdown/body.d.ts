import { RenderFunc } from '@tu-view-plus/constants';
import { Dayjs } from 'dayjs';
import type { Cell, DisabledDate, IsSameTime, Mode } from '../interface';
import type { ExtractPropTypes, PropType } from 'vue';
import type Body from './body.vue';
export declare const bodyProps: {
    readonly rows: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => Cell[][]) | (() => Cell[][]) | ((new (...args: any[]) => Cell[][]) | (() => Cell[][]))[], unknown, unknown, () => never[], boolean>;
    readonly value: {
        readonly type: PropType<Dayjs>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabledDate: {
        readonly type: PropType<DisabledDate>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly isSameTime: {
        readonly type: PropType<IsSameTime>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly mode: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => Mode) | ((new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => Mode))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly rangeValues: {
        readonly type: PropType<(Dayjs | undefined)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly dateRender: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => RenderFunc) | (() => RenderFunc | undefined) | {
            (): RenderFunc | undefined;
            new (): any;
            readonly prototype: any;
        } | ((new (...args: any[]) => RenderFunc) | (() => RenderFunc | undefined) | {
            (): RenderFunc | undefined;
            new (): any;
            readonly prototype: any;
        })[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export declare const bodyEmits: string[];
export type BodyProps = ExtractPropTypes<typeof bodyProps>;
export type BodyInstance = InstanceType<typeof Body>;
