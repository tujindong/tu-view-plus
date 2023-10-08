import type { ExtractPropTypes, PropType } from 'vue';
import type TabsButton from './tabs-button.vue';
declare type ButtonTypes = 'previous' | 'next';
export declare const tabsButtonProps: {
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ButtonTypes & {}) | (() => ButtonTypes) | ((new (...args: any[]) => ButtonTypes & {}) | (() => ButtonTypes))[], unknown, unknown, "next", boolean>;
    readonly direction: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ("horizontal" | "vertical") & {}) | (() => "horizontal" | "vertical") | ((new (...args: any[]) => ("horizontal" | "vertical") & {}) | (() => "horizontal" | "vertical"))[], unknown, unknown, "horizontal", boolean>;
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly onClick: {
        readonly type: PropType<(type: ButtonTypes, ev: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export declare const tabsButtonEmits: {
    click: (type: string) => boolean;
};
export declare type TabsButtonProps = ExtractPropTypes<typeof tabsButtonProps>;
export declare type TabsButtonInstance = InstanceType<typeof TabsButton>;
export declare type TabsButtonEmits = typeof tabsButtonEmits;
export {};
