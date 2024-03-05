import type { ExtractPropTypes, PropType } from 'vue';
import type PreviewGroup from './preview-group.vue';
export declare const previewGroupProps: {
    readonly renderToBody: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly srcList: {
        readonly type: PropType<string[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly current: {
        readonly type: PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly defaultCurrent: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly infinite: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly visible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly defaultVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly maskClosable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly closable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly actionsLayout: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => string[], boolean>;
    readonly popupContainer: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export declare const previewGroupEmits: string[];
export type PreviewGroupProps = ExtractPropTypes<typeof previewGroupProps>;
export type PreviewGroupInstance = InstanceType<typeof PreviewGroup>;
