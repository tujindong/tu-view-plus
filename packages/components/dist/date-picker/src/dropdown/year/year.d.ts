import { Dayjs } from 'dayjs';
import { RenderFunc } from '@tu-view-plus/constants';
import type { ExtractPropTypes, PropType } from 'vue';
import type Year from './year.vue';
import type { DisabledDate, HeaderIcons, HeaderOperations } from '../../interface';
export declare const yearProps: {
    readonly headerValue: {
        readonly type: PropType<Dayjs>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly headerOperations: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => HeaderOperations) | (() => HeaderOperations) | ((new (...args: any[]) => HeaderOperations) | (() => HeaderOperations))[], unknown, unknown, () => {}, boolean>;
    readonly headerIcons: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => HeaderIcons) | (() => HeaderIcons) | ((new (...args: any[]) => HeaderIcons) | (() => HeaderIcons))[], unknown, unknown, () => {}, boolean>;
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
    readonly rangeValues: {
        readonly type: PropType<(Dayjs | undefined)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly dateRender: {
        readonly type: PropType<RenderFunc>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export declare const yearEmits: string[];
export type YearProps = ExtractPropTypes<typeof yearProps>;
export type YearInstance = InstanceType<typeof Year>;
