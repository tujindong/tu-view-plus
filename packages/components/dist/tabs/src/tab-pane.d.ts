import type { ExtractPropTypes } from 'vue';
import type TabPane from './tab-pane.vue';
export declare const tabPaneProps: {
    readonly title: StringConstructor;
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly closable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly destroyOnHide: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
};
export type TabPaneProps = ExtractPropTypes<typeof tabPaneProps>;
export type TabPaneInstance = InstanceType<typeof TabPane>;
