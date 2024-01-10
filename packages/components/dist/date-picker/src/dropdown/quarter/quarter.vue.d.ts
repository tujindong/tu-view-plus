declare const _default: import("vue").DefineComponent<{
    readonly headerValue: {
        readonly type: import("vue").PropType<import("dayjs").Dayjs>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly headerOperations: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => import("../../interface").HeaderOperations) | (() => import("../../interface").HeaderOperations) | ((new (...args: any[]) => import("../../interface").HeaderOperations) | (() => import("../../interface").HeaderOperations))[], unknown, unknown, () => {}, boolean>;
    readonly headerIcons: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => import("../../interface").HeaderIcons) | (() => import("../../interface").HeaderIcons) | ((new (...args: any[]) => import("../../interface").HeaderIcons) | (() => import("../../interface").HeaderIcons))[], unknown, unknown, () => {}, boolean>;
    readonly value: {
        readonly type: import("vue").PropType<import("dayjs").Dayjs>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabledDate: {
        readonly type: import("vue").PropType<import("../../interface").DisabledDate>;
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
        readonly type: import("vue").PropType<import("@tu-view-plus/constants").RenderFunc>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onHeaderLabelClick: {
        readonly type: import("vue").PropType<import("../header").HeaderLabelClickFunc>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    [x: string]: (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly headerValue: {
        readonly type: import("vue").PropType<import("dayjs").Dayjs>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly headerOperations: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => import("../../interface").HeaderOperations) | (() => import("../../interface").HeaderOperations) | ((new (...args: any[]) => import("../../interface").HeaderOperations) | (() => import("../../interface").HeaderOperations))[], unknown, unknown, () => {}, boolean>;
    readonly headerIcons: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => import("../../interface").HeaderIcons) | (() => import("../../interface").HeaderIcons) | ((new (...args: any[]) => import("../../interface").HeaderIcons) | (() => import("../../interface").HeaderIcons))[], unknown, unknown, () => {}, boolean>;
    readonly value: {
        readonly type: import("vue").PropType<import("dayjs").Dayjs>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabledDate: {
        readonly type: import("vue").PropType<import("../../interface").DisabledDate>;
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
        readonly type: import("vue").PropType<import("@tu-view-plus/constants").RenderFunc>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onHeaderLabelClick: {
        readonly type: import("vue").PropType<import("../header").HeaderLabelClickFunc>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>>, {
    readonly headerIcons: import("../../interface").HeaderIcons;
    readonly headerOperations: import("../../interface").HeaderOperations;
}, {}>;
export default _default;
