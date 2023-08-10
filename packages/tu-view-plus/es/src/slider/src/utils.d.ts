import type { CSSProperties } from 'vue';
import { Direction } from './constants';
export declare const getOffsetPercent: (value: number, [min, max]: [number, number]) => string;
export declare const getPositionStyle: (offset: string, direction: Direction) => CSSProperties;
