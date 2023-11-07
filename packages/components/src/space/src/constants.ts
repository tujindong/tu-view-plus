export const spaceSize = ['mini', 'small', 'medium', 'large'] as const;
export const spaceAlign = ['start', 'end', 'center', 'baseline'] as const;
export const spaceDirection = ['vertical', 'horizontal'] as const;
export const spaceSizeMaps = {
  mini: 4,
  small: 8,
  medium: 16,
  large: 24
};

export type SpaceSize = (typeof spaceSize)[number] | number;
export type SpaceAlign = (typeof spaceAlign)[number];
export type SpaceDirection = (typeof spaceDirection)[number];
