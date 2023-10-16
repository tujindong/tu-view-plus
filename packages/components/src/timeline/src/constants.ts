import { InjectionKey } from 'vue';

export const direction = ['horizontal', 'vertical'] as const;
export const labelPositionType = ['relative', 'same'] as const;
export const modeType = [
  'left',
  'right',
  'top',
  'bottom',
  'alternate'
] as const;
export const dotType = ['hollow', 'solid'] as const;
export const lineType = ['solid', 'dashed', 'dotted'] as const;
export const positionType = ['left', 'right', 'top', 'bottom'] as const;

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

export const timelineInjectionKey: InjectionKey<TimelineContext> =
  Symbol('TuTimeline');
