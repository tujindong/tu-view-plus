export const direction = ['horizontal', 'vertical'] as const;
export const orientation = ['left', 'center', 'right'] as const;
export const type = ['solid', 'dashed', 'dotted', 'double'] as const;

export type Direction = (typeof direction)[number];
export type Orientation = (typeof orientation)[number];
export type Type = (typeof type)[number];
