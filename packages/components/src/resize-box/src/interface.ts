export type DirectionType = 'left' | 'right' | 'top' | 'bottom';

export type PaddingCSSProperties =
  | 'padding-left'
  | 'padding-right'
  | 'padding-top'
  | 'padding-bottom';

export const DIRECTION_LEFT = 'left';
export const DIRECTION_RIGHT = 'right';
export const DIRECTION_TOP = 'top';
export const DIRECTION_BOTTOM = 'bottom';

export const allDirections: DirectionType[] = [
  DIRECTION_LEFT,
  DIRECTION_RIGHT,
  DIRECTION_TOP,
  DIRECTION_BOTTOM
];
