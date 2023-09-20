import type { ExtractPropTypes } from 'vue';
import type TabPane from './tab-pane.vue';
export declare const tabPaneProps: {
    readonly label: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly name: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly closable: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly lazy: BooleanConstructor;
};
export declare type TabPaneProps = ExtractPropTypes<typeof tabPaneProps>;
export declare type TabPaneInstance = InstanceType<typeof TabPane>;
