import type { ExtractPropTypes } from 'vue';
export declare const menuItemGroupProps: {
    readonly title: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export type MenuItemGroupProps = ExtractPropTypes<typeof menuItemGroupProps>;
