export const SIZES = ['', 'mini', 'small', 'medium', 'large'] as const;
export type Size = (typeof SIZES)[number];

export const SizeMap = {
  mini: 20,
  small: 24,
  medium: 32,
  large: 36
} as const;
