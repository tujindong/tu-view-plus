import type { ExtractPropTypes } from 'vue';
import type Affix from './affix.vue';
export declare const affixProps: {
    readonly zIndex: import("@tu-view-plus/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor], unknown, unknown, 100, boolean>;
    readonly target: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly offset: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly position: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "top" | "bottom", unknown, "top", boolean>;
};
export declare const affixEmits: {
    scroll: ({ scrollTop, fixed }: {
        scrollTop: number;
        fixed: boolean;
    }) => boolean;
    change: (fixed: boolean) => boolean;
};
export type AffixProps = ExtractPropTypes<typeof affixProps>;
export type AffixInstance = InstanceType<typeof Affix>;
export type AffixEmits = typeof affixEmits;
