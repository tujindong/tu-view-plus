export declare const TuBreadcrumb: import("@tu-view-plus/utils").SFCWithInstall<import("vue").DefineComponent<{
    readonly maxCount: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly routes: {
        readonly type: import("vue").PropType<import("./src/interface").BreadcrumbRoute[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly separator: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "/", boolean>;
    readonly customUrl: {
        readonly type: import("vue").PropType<(paths: string[]) => string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly maxCount: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly routes: {
        readonly type: import("vue").PropType<import("./src/interface").BreadcrumbRoute[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly separator: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "/", boolean>;
    readonly customUrl: {
        readonly type: import("vue").PropType<(paths: string[]) => string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>>, {
    readonly separator: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    readonly maxCount: number;
}, {}>> & Record<string, any>;
export declare const TuBreadcrumbItem: import("@tu-view-plus/utils").SFCWithInstall<import("vue").DefineComponent<{
    readonly separator: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly droplist: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => import("./src/interface").BreadcrumbRoute[]) | (() => import("./src/interface").BreadcrumbRoute[] | undefined) | ((new (...args: any[]) => import("./src/interface").BreadcrumbRoute[]) | (() => import("./src/interface").BreadcrumbRoute[] | undefined))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly dropdownProps: {
        readonly type: import("vue").PropType<import("../dropdown").DropdownProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly index: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
}, () => JSX.Element | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly separator: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly droplist: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => import("./src/interface").BreadcrumbRoute[]) | (() => import("./src/interface").BreadcrumbRoute[] | undefined) | ((new (...args: any[]) => import("./src/interface").BreadcrumbRoute[]) | (() => import("./src/interface").BreadcrumbRoute[] | undefined))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly dropdownProps: {
        readonly type: import("vue").PropType<import("../dropdown").DropdownProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly index: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
}>>, {
    readonly index: number;
}, {}>> & Record<string, any>;
export default TuBreadcrumb;
export * from './src/breadcrumb';
