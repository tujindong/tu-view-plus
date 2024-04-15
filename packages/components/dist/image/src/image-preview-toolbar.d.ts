import type { ExtractPropTypes } from 'vue';
import type { ActionType } from './interface';
export declare const imagePreviewToolbarProps: {
    actions: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ActionType[]) | (() => ActionType[]) | ((new (...args: any[]) => ActionType[]) | (() => ActionType[]))[], unknown, unknown, () => never[], boolean>;
    actionsLayout: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => never[], boolean>;
};
export type ImagePreviewToolbarProps = ExtractPropTypes<typeof imagePreviewToolbarProps>;
