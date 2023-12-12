export const SIZES = ['', 'mini', 'small', 'medium', 'large'] as const;
export type Size = (typeof SIZES)[number];

export const SizeMap = {
  mini: 24,
  small: 28,
  medium: 32,
  large: 36
} as const;
