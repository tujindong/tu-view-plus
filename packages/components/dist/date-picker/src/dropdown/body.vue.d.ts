import { Cell } from '../interface';
declare const _default: import("vue").DefineComponent<{
    readonly rows: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => Cell[][]) | (() => Cell[][]) | ((new (...args: any[]) => Cell[][]) | (() => Cell[][]))[], unknown, unknown, () => never[], boolean>;
    readonly value: {
        readonly type: import("vue").PropType<import("dayjs").Dayjs>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabledDate: {
        readonly type: import("vue").PropType<import("../interface").DisabledDate>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly isSameTime: {
        readonly type: import("vue").PropType<import("../interface").IsSameTime>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly mode: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => import("../interface").Mode) | ((new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => import("../interface").Mode))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly rangeValues: {
        readonly type: import("vue").PropType<(import("dayjs").Dayjs | undefined)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly dateRender: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => import("@tu-view-plus/constants").RenderFunc) | (() => import("@tu-view-plus/constants").RenderFunc | undefined) | {
            (): import("@tu-view-plus/constants").RenderFunc | undefined;
            new (): any;
            readonly prototype: any;
        } | ((new (...args: any[]) => import("@tu-view-plus/constants").RenderFunc) | (() => import("@tu-view-plus/constants").RenderFunc | undefined) | {
            (): import("@tu-view-plus/constants").RenderFunc | undefined;
            new (): any;
            readonly prototype: any;
        })[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    [x: string]: (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly rows: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => Cell[][]) | (() => Cell[][]) | ((new (...args: any[]) => Cell[][]) | (() => Cell[][]))[], unknown, unknown, () => never[], boolean>;
    readonly value: {
        readonly type: import("vue").PropType<import("dayjs").Dayjs>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabledDate: {
        readonly type: import("vue").PropType<import("../interface").DisabledDate>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly isSameTime: {
        readonly type: import("vue").PropType<import("../interface").IsSameTime>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly mode: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => import("../interface").Mode) | ((new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => import("../interface").Mode))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly rangeValues: {
        readonly type: import("vue").PropType<(import("dayjs").Dayjs | undefined)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly dateRender: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => import("@tu-view-plus/constants").RenderFunc) | (() => import("@tu-view-plus/constants").RenderFunc | undefined) | {
            (): import("@tu-view-plus/constants").RenderFunc | undefined;
            new (): any;
            readonly prototype: any;
        } | ((new (...args: any[]) => import("@tu-view-plus/constants").RenderFunc) | (() => import("@tu-view-plus/constants").RenderFunc | undefined) | {
            (): import("@tu-view-plus/constants").RenderFunc | undefined;
            new (): any;
            readonly prototype: any;
        })[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>>, {
    readonly rows: Cell[][];
}, {}>;
export default _default;
