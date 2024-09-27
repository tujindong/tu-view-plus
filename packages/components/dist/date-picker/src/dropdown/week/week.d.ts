import type { ExtractPropTypes } from 'vue';
import { WeekStart } from '../../interface';
export declare const weekProps: {
    readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => 0 | 3 | 5 | 1 | 2 | 4 | 6) | (() => WeekStart) | ((new (...args: any[]) => 0 | 3 | 5 | 1 | 2 | 4 | 6) | (() => WeekStart))[], unknown, unknown, 0, boolean>;
};
export declare const weekEmits: string[];
export type WeekProps = ExtractPropTypes<typeof weekProps>;
