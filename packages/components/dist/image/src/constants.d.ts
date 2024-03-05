import { InjectionKey } from 'vue';
export declare const rotateDirectionTypes: readonly ["clockwise", "counterclockwise"];
export declare const scaleActionTypes: readonly ["zoomIn", "zoomOut"];
export declare const fitTypes: readonly ["contain", "cover", "fill", "none", "scale-down"];
export declare const footerPositionTypes: readonly ["inner", "outer"];
export type RotateDirectionTypes = (typeof rotateDirectionTypes)[number];
export type ScaleActionTypes = (typeof scaleActionTypes)[number];
export type FitTypes = (typeof fitTypes)[number];
export type FooterPositionTypes = (typeof footerPositionTypes)[number];
export type PreviewGroupContext = Readonly<{
    registerImageUrl: (id: number, url: string, canPreview: boolean) => () => void;
    preview: (imageId: number) => void;
}>;
export declare const PreviewGroupInjectionKey: InjectionKey<PreviewGroupContext>;
