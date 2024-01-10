export const resultStatusTypes = [
  'info',
  'success',
  'warning',
  'error',
  '403',
  '404',
  '500',
  'custom'
] as const;

export type ResultStatusTypes = (typeof resultStatusTypes)[number];
