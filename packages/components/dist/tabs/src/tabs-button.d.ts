import type { ExtractPropTypes, PropType } from 'vue';
import type TabsButton from './tabs-button.vue';
type ButtonTypes = 'previous' | 'next';
export declare const tabsButtonProps: {
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "next" | "previous") | (() => ButtonTypes) | ((new (...args: any[]) => "next" | "previous") | (() => ButtonTypes))[], unknown, unknown, "next", boolean>;
    readonly direction: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown, "horizontal", boolean>;
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
export type TabsButtonProps = ExtractPropTypes<typeof tabsButtonProps>;
export type TabsButtonInstance = InstanceType<typeof TabsButton>;
export type TabsButtonEmits = typeof tabsButtonEmits;
export {};
