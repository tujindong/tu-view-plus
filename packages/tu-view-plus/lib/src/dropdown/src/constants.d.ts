import { InjectionKey } from 'vue';
export declare const dropdownPosition: readonly ["top", "tl", "tr", "bottom", "bl", "br"];
export declare type DropdownPosition = (typeof dropdownPosition)[number];
export interface DropdownContext {
    size: string | undefined;
    popupMaxHeight: boolean | number;
    onOptionClick: (value: string | number | Record<string, unknown> | undefined, ev: Event) => void;
}
export declare const dropdownInjectionKey: InjectionKey<DropdownContext>;
