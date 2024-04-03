export const effectTypes = [
  'outset',
  'inset',
  'bordered',
  'outlined',
  'flat'
] as const;

export type EffectTypes = (typeof effectTypes)[number];
