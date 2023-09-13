import { InjectionKey } from 'vue';

export const dropdownPosition = [
  'top',
  'tl',
  'tr',
  'bottom',
  'bl',
  'br'
] as const;

export type DropdownPosition = (typeof dropdownPosition)[number];

export interface DropdownContext {
  popupMaxHeight: boolean | number;
  onOptionClick: (
    value: string | number | Record<string, unknown> | undefined,
    ev: Event
  ) => void;
}

export const dropdownInjectionKey: InjectionKey<DropdownContext> =
  Symbol('TuDropdown');
