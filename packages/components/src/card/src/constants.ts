export const effectTypes = [
  'normal',
  'inside',
  'outside',
] as const;

export type EffectTypes = (typeof effectTypes)[number];