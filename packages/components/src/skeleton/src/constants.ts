export const SHAPE = ['square', 'circle'] as const;

export type Shape = (typeof SHAPE)[number];

