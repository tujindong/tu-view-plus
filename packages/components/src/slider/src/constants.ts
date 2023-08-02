export const DIRECTIONS = ['horizontal', 'vertical'] as const;

export type Direction = (typeof DIRECTIONS)[number];
