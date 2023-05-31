export const SIZES = ['mini', 'small', 'medium', 'large'] as const;
export type Size = (typeof SIZES)[number];
