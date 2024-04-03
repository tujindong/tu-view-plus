import type { ExtractPropTypes } from 'vue';
import type SubMenuInline from './sub-menu-inline.vue';
export declare const subMenuInlineProps: {
    readonly title: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly isChildrenSelected: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export type SubMenuInlineProps = ExtractPropTypes<typeof subMenuInlineProps>;
export type SubMenuInlineInstance = InstanceType<typeof SubMenuInline>;
