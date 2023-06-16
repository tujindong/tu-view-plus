import type { Ref, ComputedRef, InjectionKey, CSSProperties } from 'vue';
import type { Instance } from '@popperjs/core';
export declare type Measurable = {
    getBoundingClientRect: () => DOMRect;
};
export declare const effects: readonly ["light", "dark"];
export declare const triggers: readonly ["click", "contextmenu", "hover", "focus"];
export declare const Effect: {
    readonly LIGHT: "light";
    readonly DARK: "dark";
};
export declare const roleTypes: readonly ["dialog", "grid", "group", "listbox", "menu", "navigation", "tooltip", "tree"];
export declare type PopperEffect = (typeof effects)[number];
export declare type PopperTrigger = (typeof triggers)[number];
/**
 * @zh
 * triggerRef: 表示触发 popper 的元素
 * contentRef: 表示 popper 内容的元素
 * referenceRef: 表示 popper 内容相关的元素
 * @en
 * triggerRef indicates the element that triggers popper
 * contentRef indicates the element of popper content
 * referenceRef indicates the element that popper content relative with
 */
export declare type TuPopperInjectionContext = {
    triggerRef: Ref<Measurable | undefined>;
    contentRef: Ref<HTMLElement | undefined>;
    popperInstanceRef: Ref<Instance | undefined>;
    referenceRef: Ref<Measurable | undefined>;
    role: ComputedRef<string>;
};
export declare type TuPopperContentInjectionContext = {
    arrowRef: Ref<HTMLElement | undefined>;
    arrowOffset: Ref<number | undefined>;
    arrowStyle: ComputedRef<CSSProperties>;
};
export declare const POPPER_INJECTION_KEY: InjectionKey<TuPopperInjectionContext>;
export declare const POPPER_CONTENT_INJECTION_KEY: InjectionKey<TuPopperContentInjectionContext>;
