export const effectTypes = ['line', 'up', 'down'] as const;

export type EffectTypes = (typeof effectTypes)[number];
