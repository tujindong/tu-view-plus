import { ShortcutType } from '../interface';
import type { ExtractPropTypes, PropType } from 'vue';
import type Shortcuts from './shortcuts.vue';
export declare const shortcutsProps: {
    readonly shortcuts: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ShortcutType[]) | (() => ShortcutType[]) | ((new (...args: any[]) => ShortcutType[]) | (() => ShortcutType[]))[], unknown, unknown, () => never[], boolean>;
    readonly showNowBtn: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export declare const shortcutsEmits: string[];
export type ShortcutsProps = ExtractPropTypes<typeof shortcutsProps>;
export type ShortcutsInstance = InstanceType<typeof Shortcuts>;
