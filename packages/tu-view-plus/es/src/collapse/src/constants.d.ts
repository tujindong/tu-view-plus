import type { InjectionKey, Ref } from 'vue';
import type { CollapseActiveName } from './collapse';
export declare const collapseTypes: readonly ["line", "neumorphic"];
export interface CollapseContext {
    activeNames: Ref<CollapseActiveName[]>;
    size: String;
    handleItemClick: (name: CollapseActiveName) => void;
}
export declare const collapseContextKey: InjectionKey<CollapseContext>;
export declare type CollapseTypes = (typeof collapseTypes)[number];
