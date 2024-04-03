import type { InjectionKey, Ref } from 'vue';
import type { CollapseActiveName } from './collapse';
export declare const collapseEffects: readonly ["outset", "inset", "bordered", "outlined", "flat"];
export interface CollapseContext {
    activeNames: Ref<CollapseActiveName[]>;
    handleItemClick: (name: CollapseActiveName) => void;
}
export declare const collapseContextKey: InjectionKey<CollapseContext>;
export type CollapseEffects = (typeof collapseEffects)[number];
