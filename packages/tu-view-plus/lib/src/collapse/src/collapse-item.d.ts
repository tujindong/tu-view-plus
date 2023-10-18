import type { ExtractPropTypes } from 'vue';
import type CollapseItem from './collapse-item.vue';
import type { CollapseActiveName } from './collapse';
export declare const collapseItemProps: {
    readonly title: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly extra: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly name: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => CollapseActiveName & {}) | (() => CollapseActiveName) | ((new (...args: any[]) => CollapseActiveName & {}) | (() => CollapseActiveName))[], unknown, unknown, () => number, boolean>;
    readonly disabled: BooleanConstructor;
};
export declare type CollapseItemProps = ExtractPropTypes<typeof collapseItemProps>;
export declare type CollapseItemInstance = InstanceType<typeof CollapseItem>;
