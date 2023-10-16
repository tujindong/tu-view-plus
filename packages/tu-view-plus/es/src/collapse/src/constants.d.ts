import type { InjectionKey, Ref } from 'vue';
import type { CollapseActiveName } from './collapse';
<<<<<<< HEAD
export declare const collapseTypes: readonly ["line", "neumorphic"];
export interface CollapseContext {
    activeNames: Ref<CollapseActiveName[]>;
    size: String;
    handleItemClick: (name: CollapseActiveName) => void;
}
export declare const collapseContextKey: InjectionKey<CollapseContext>;
export declare type CollapseTypes = (typeof collapseTypes)[number];
=======
export interface CollapseContext {
    activeNames: Ref<CollapseActiveName[]>;
    handleItemClick: (name: CollapseActiveName) => void;
}
export declare const collapseContextKey: InjectionKey<CollapseContext>;
>>>>>>> 79bdb6ed003cf262a69a6c4f13609ec889cd68cf
