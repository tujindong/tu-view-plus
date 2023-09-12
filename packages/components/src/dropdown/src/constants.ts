export const dropdownPosition = [
  'top',
  'tl',
  'tr',
  'bottom',
  'bl',
  'br'
] as const;

export type DropdownPosition = (typeof dropdownPosition)[number];
