import { PropType } from 'vue';
import { ScrollbarProps } from '../../scrollbar/src/scrollbar';
import type { ExtractPropTypes } from 'vue';
import type { EmitType } from '@tu-view-plus/utils';
export declare const selectDropDownProps: {
    readonly loading: BooleanConstructor;
    readonly empty: BooleanConstructor;
    readonly virtualList: BooleanConstructor;
    readonly bottomOffset: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly scrollbar: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ({
        readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly maxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly always: boolean;
        readonly tag: string;
        readonly native: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly wrapStyle: import("vue").StyleValue;
        readonly wrapClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewStyle: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
        readonly minSize: number;
        readonly noresize: boolean;
    } & {})) | (() => boolean | ScrollbarProps) | ((new (...args: any[]) => boolean | ({
        readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly maxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly always: boolean;
        readonly tag: string;
        readonly native: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly wrapStyle: import("vue").StyleValue;
        readonly wrapClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewStyle: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
        readonly minSize: number;
        readonly noresize: boolean;
    } & {})) | (() => boolean | ScrollbarProps))[], unknown, unknown, true, boolean>;
    readonly onScroll: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => ((ev: Event) => void) | ((ev: Event) => void)[]) | (() => EmitType<(ev: Event) => void>) | ((new (...args: any[]) => ((ev: Event) => void) | ((ev: Event) => void)[]) | (() => EmitType<(ev: Event) => void>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onReachBottom: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => ((ev: Event) => void) | ((ev: Event) => void)[]) | (() => EmitType<(ev: Event) => void>) | ((new (...args: any[]) => ((ev: Event) => void) | ((ev: Event) => void)[]) | (() => EmitType<(ev: Event) => void>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly showHeaderOnEmpty: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown, false, boolean>;
    readonly showFooterOnEmpty: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown, false, boolean>;
};
export declare const selectDropDownEmits: string[];
export type SelectDropDownProps = ExtractPropTypes<typeof selectDropDownProps>;
