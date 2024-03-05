import { CSSProperties, StyleValue } from 'vue';
declare const _default: import("vue").DefineComponent<{
    readonly renderToBody: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly src: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly width: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly height: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly title: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly description: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly fit: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "fill" | "contain" | "none" | "cover" | "scale-down") | (() => "fill" | "contain" | "none" | "cover" | "scale-down") | ((new (...args: any[]) => "fill" | "contain" | "none" | "cover" | "scale-down") | (() => "fill" | "contain" | "none" | "cover" | "scale-down"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly alt: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly hideFooter: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | "never") | (() => boolean | "never") | ((new (...args: any[]) => boolean | "never") | (() => boolean | "never"))[], unknown, unknown, false, boolean>;
    readonly footerPosition: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "outer" | "inner") | (() => "outer" | "inner") | ((new (...args: any[]) => "outer" | "inner") | (() => "outer" | "inner"))[], unknown, unknown, "inner", boolean>;
    readonly showLoader: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly preview: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly previewVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly defaultPreviewVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly previewProps: {
        readonly type: import("vue").PropType<import("./interface").ImagePreviewProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly footerClass: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}, {
    t: import("@tu-view-plus/hooks").Translator;
    wrapperClasses: import("vue").ComputedRef<any>;
    wrapperStyles: import("vue").ComputedRef<StyleValue[]>;
    imgProps: import("vue").ComputedRef<Omit<{
        [x: string]: unknown;
    }, "style" | "class">>;
    nsImage: {
        derivedNamespace: import("vue").ComputedRef<string>;
        namespace: string;
        b: () => string;
        e: (element: string) => string;
        m: (modifier: string) => string;
        em: (element: string, modifier: string) => string;
        is: {
            (name: string, state: boolean | undefined): string;
            (name: string): string;
        };
    };
    sizeStyle: import("vue").ComputedRef<{
        width: string | undefined;
        height: string | undefined;
    }>;
    fitStyle: import("vue").ComputedRef<CSSProperties>;
    isLoaded: import("vue").ComputedRef<boolean>;
    isError: import("vue").ComputedRef<boolean>;
    isLoading: import("vue").ComputedRef<boolean>;
    mergedPreviewVisible: import("vue").ComputedRef<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
    mergePreview: import("vue").ComputedRef<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
    showFooter: import("vue").ComputedRef<boolean>;
    refImg: import("vue").Ref<any>;
    onImgLoaded: () => void;
    onImgLoadError: () => void;
    onImgClick: () => void;
    onPreviewClose: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly renderToBody: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly src: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly width: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly height: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly title: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly description: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly fit: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "fill" | "contain" | "none" | "cover" | "scale-down") | (() => "fill" | "contain" | "none" | "cover" | "scale-down") | ((new (...args: any[]) => "fill" | "contain" | "none" | "cover" | "scale-down") | (() => "fill" | "contain" | "none" | "cover" | "scale-down"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly alt: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly hideFooter: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | "never") | (() => boolean | "never") | ((new (...args: any[]) => boolean | "never") | (() => boolean | "never"))[], unknown, unknown, false, boolean>;
    readonly footerPosition: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "outer" | "inner") | (() => "outer" | "inner") | ((new (...args: any[]) => "outer" | "inner") | (() => "outer" | "inner"))[], unknown, unknown, "inner", boolean>;
    readonly showLoader: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly preview: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly previewVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly defaultPreviewVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly previewProps: {
        readonly type: import("vue").PropType<import("./interface").ImagePreviewProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly footerClass: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>> & {
    [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
}, {
    readonly preview: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly renderToBody: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly hideFooter: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | "never") | (() => boolean | "never") | ((new (...args: any[]) => boolean | "never") | (() => boolean | "never"))[], unknown, unknown>;
    readonly footerPosition: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "outer" | "inner") | (() => "outer" | "inner") | ((new (...args: any[]) => "outer" | "inner") | (() => "outer" | "inner"))[], unknown, unknown>;
    readonly showLoader: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly previewVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly defaultPreviewVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}>;
export default _default;
