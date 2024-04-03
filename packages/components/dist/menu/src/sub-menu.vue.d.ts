import { SubMenuProps } from './sub-menu';
declare const _default: import("vue").DefineComponent<{
    readonly key: {
        readonly type: import("vue").PropType<string>;
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
    readonly selectable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly popup: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((level: number) => boolean)) | (() => boolean | ((level: number) => boolean)) | ((new (...args: any[]) => boolean | ((level: number) => boolean)) | (() => boolean | ((level: number) => boolean)))[], unknown, unknown, false, boolean>;
    readonly popupMaxHeight: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number | boolean) | (() => number | boolean) | ((new (...args: any[]) => number | boolean) | (() => number | boolean))[], unknown, unknown, undefined, boolean>;
}, {
    subMenuKeys: import("vue").ComputedRef<string[]>;
    menuItemKeys: import("vue").ComputedRef<string[]>;
    isChildrenSelected: import("vue").ComputedRef<boolean>;
    props: SubMenuProps;
    attrs: {
        [x: string]: unknown;
    };
    computedKey: import("vue").ComputedRef<string>;
    computedPopup: import("vue").ComputedRef<boolean>;
    expandIconDown: import("vue").Ref<(() => import("vue").VNodeTypes) | undefined>;
    expandIconRight: import("vue").Ref<(() => import("vue").VNodeTypes) | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly key: {
        readonly type: import("vue").PropType<string>;
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
    readonly selectable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly popup: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((level: number) => boolean)) | (() => boolean | ((level: number) => boolean)) | ((new (...args: any[]) => boolean | ((level: number) => boolean)) | (() => boolean | ((level: number) => boolean)))[], unknown, unknown, false, boolean>;
    readonly popupMaxHeight: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number | boolean) | (() => number | boolean) | ((new (...args: any[]) => number | boolean) | (() => number | boolean))[], unknown, unknown, undefined, boolean>;
}>>, {
    readonly popup: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | ((level: number) => boolean)) | (() => boolean | ((level: number) => boolean)) | ((new (...args: any[]) => boolean | ((level: number) => boolean)) | (() => boolean | ((level: number) => boolean)))[], unknown, unknown>;
    readonly popupMaxHeight: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => number | boolean) | (() => number | boolean) | ((new (...args: any[]) => number | boolean) | (() => number | boolean))[], unknown, unknown>;
    readonly selectable: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}>;
export default _default;
