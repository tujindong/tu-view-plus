import { InjectionKey } from 'vue';

export const rotateDirectionTypes = ['clockwise', 'counterclockwise'] as const;
export const scaleActionTypes = ['zoomIn', 'zoomOut'] as const;
export const fitTypes = [
  'contain',
  'cover',
  'fill',
  'none',
  'scale-down'
] as const;
export const footerPositionTypes = ['inner', 'outer'] as const;

export type RotateDirectionTypes = (typeof rotateDirectionTypes)[number];
export type ScaleActionTypes = (typeof scaleActionTypes)[number];
export type FitTypes = (typeof fitTypes)[number];
export type FooterPositionTypes = (typeof footerPositionTypes)[number];

export type PreviewGroupContext = Readonly<{
  registerImageUrl: (
    id: number,
    url: string,
    canPreview: boolean
  ) => () => void;
  preview: (imageId: number) => void;
}>;

export const PreviewGroupInjectionKey: InjectionKey<PreviewGroupContext> =
  Symbol('PreviewGroupInjectionKey');
