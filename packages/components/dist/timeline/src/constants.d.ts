import { InjectionKey } from 'vue';
export declare const direction: readonly ["horizontal", "vertical"];
export declare const labelPositionType: readonly ["relative", "same"];
export declare const modeType: readonly ["left", "right", "top", "bottom", "alternate"];
export declare const dotType: readonly ["default", "hollow", "solid"];
export declare const lineType: readonly ["solid", "dashed", "dotted"];
export declare const positionType: readonly ["left", "right", "top", "bottom"];
export type Direction = (typeof direction)[number];
export type LabelPositionType = (typeof labelPositionType)[number];
export type ModeType = (typeof modeType)[number];
export type DotType = (typeof dotType)[number];
export type LineType = (typeof lineType)[number];
export type PositionType = (typeof positionType)[number];
export interface TimelineContext {
    items: number[];
    reverse: boolean;
    direction: Direction;
    labelPosition: LabelPositionType;
    mode: ModeType;
}
export declare const timelineInjectionKey: InjectionKey<TimelineContext>;
