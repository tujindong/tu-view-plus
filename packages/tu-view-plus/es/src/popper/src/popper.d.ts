import type { ExtractPropTypes } from 'vue';
import type Popper from './popper.vue';
export declare const popperProps: {
    readonly role: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tootip", boolean>;
};
export declare type PopperProps = ExtractPropTypes<typeof popperProps>;
export declare type PopperInstance = InstanceType<typeof Popper>;
